import { UserIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { validateRequest, lucia } from "@/lib/auth";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
interface ActionResult {
  error: string | null;
}

async function logout(): Promise<ActionResult> {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized"
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  //   return redirect("/login");
  return {
    error: null
  };
}

const NavUser = async () => {
  const { user } = await validateRequest();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserIcon className="w-6 h-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{user ? user.username : "Not Logged in?"}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {user ? (
            <>
              <DropdownMenuItem>
                <form action={logout}>
                  <button>Sign out</button>
                </form>
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem>
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
              <Link href="/login/github">Login</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavUser;
