"use client";

import { LogOut } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function LogOutButton() {
  const router = useRouter();
  return (
    <DropdownMenuItem
      asChild
      className="hover:bg-accent cursor-pointer"
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login");
              router.refresh();
            },
          },
        })
      }
    >
      <button className="w-full">
        <LogOut className="text-foreground" />
        <span className="font-semibold">Logout</span>
      </button>
    </DropdownMenuItem>
  );
}

export default LogOutButton;
