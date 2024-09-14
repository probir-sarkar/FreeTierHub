import { generateState } from "arctic";
import { github } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const callback = searchParams.get("callback") ?? "/";
  const newState = JSON.stringify({ callback });
  const state = encodeURIComponent(newState);
  const url = await github.createAuthorizationURL(state);

  cookies().set("github_oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax"
  });

  return Response.redirect(url);
}
