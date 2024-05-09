import { Lucia } from "lucia";
import { cookies } from "next/headers";
import { cache } from "react";
import type { Session, User } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { GitHub } from "arctic";
import mongoose from "mongoose";
import dbConnect from "./dbConnect";
export const adapter = new MongodbAdapter(mongoose.connection.collection("sessions"), mongoose.connection.collection("users"));

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production"
    }
  },
  getUserAttributes: (attributes: any) => {
    return {
      username: attributes.username,
      githubId: attributes.githubId
    };
  }
});

export const validateRequest = cache(async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
  await dbConnect();
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
    return {
      user: null,
      session: null
    };
  }

  const result = await lucia.validateSession(sessionId);
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
  } catch {
    /* empty */
  }
  return result;
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}
export const github = new GitHub(process.env.GITHUB_CLIENT_ID!, process.env.GITHUB_CLIENT_SECRET!);
