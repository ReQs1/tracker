import LogOutButton from "@/components/header/log-out-button";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/auth";
import { Briefcase, LayoutDashboard, User } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

async function AppHeader() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="border-b p-4">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <Briefcase className="text-foreground" />
          <span className="text-lg font-semibold">JobTrackr</span>
        </Link>

        {session?.user ? (
          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold">
              {session.user.name.split(" ")[0]}
            </p>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer overflow-hidden rounded-full focus-visible:outline-offset-4 focus-visible:outline-black">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name}
                      width={36}
                      height={36}
                    />
                  ) : (
                    <User className="h-9 w-9 bg-gray-200 p-1 text-gray-500" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownContent user={session.user} />
            </DropdownMenu>
          </div>
        ) : (
          <Button asChild size="lg">
            <Link href="/login">Get Started</Link>
          </Button>
        )}
      </div>
    </header>
  );
}

export default AppHeader;

function DropdownContent({ user }: { user: { name: string; email: string } }) {
  return (
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel className="font-semibold">
        {user.name}
      </DropdownMenuLabel>
      <DropdownMenuLabel className="text-sm text-gray-500">
        {user.email}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild className="hover:bg-accent cursor-pointer">
        <Link href="/dashboard" className="flex items-center gap-2">
          <LayoutDashboard className="text-foreground" />
          <span className="font-semibold">Dashboard</span>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="hover:bg-accent cursor-pointer">
        <Link
          href="/dashboard/applications"
          className="flex items-center gap-2"
        >
          <Briefcase className="text-foreground" />
          <span className="font-semibold">Applications</span>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <LogOutButton />
    </DropdownMenuContent>
  );
}
