import { github, lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import User from "@/models/user";
import dbConnect from "@/lib/dbConnect";

export async function GET(request: Request): Promise<Response> {
  await dbConnect();
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400
    });
  }
  const parsedState = JSON.parse(decodeURIComponent(state));
  const callback = parsedState?.callback ?? "/";

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`
      }
    });
    const githubUser: GitHubUser = await githubUserResponse.json();

    const existingUser = await User.findOne({ githubId: githubUser.id });
    if (existingUser) {
      const session = await lucia.createSession(existingUser._id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      return new Response(null, {
        status: 302,
        headers: {
          Location: callback
        }
      });
    }
    const newUser = await User.create({
      githubId: githubUser.id,
      username: githubUser.login,
      avatarUrl: githubUser.avatar_url
    });
    const session = await lucia.createSession(newUser._id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return new Response(null, {
      status: 302,
      headers: {
        Location: callback
      }
    });
  } catch (e) {
    console.log(e);

    if (e instanceof OAuth2RequestError && e.message === "bad_verification_code") {
      return new Response(null, {
        status: 400
      });
    }
    return new Response(null, {
      status: 500
    });
  }
}

interface GitHubUser {
  id: string;
  login: string;
  avatar_url: string;
}
