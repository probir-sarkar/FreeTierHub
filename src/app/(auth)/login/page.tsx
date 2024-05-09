import { validateRequest } from "@/lib/auth";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Login</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to your account to continue</p>
        </div>
        <Link className="w-full flex items-center justify-center py-2 border rounded-md bg-white hover:bg-opacity-75" href="/login/github">
          <GitHubLogoIcon className="mr-2 h-5 w-5" />
          Login with GitHub
        </Link>
      </div>
    </div>
  );
}
