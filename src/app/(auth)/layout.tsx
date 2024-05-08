import { validateRequest } from "@/lib/auth";
import React from "react";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return <section>{children}</section>;
}
