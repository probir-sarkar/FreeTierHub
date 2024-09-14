import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AdminRootLayout({ children }: { children: React.ReactNode }) {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login?callback=/admin");
  }
  if (user.role !== "admin") {
    throw new Error("You are not authorized to access admin pages.");
  }

  return <div>{children}</div>;
}
