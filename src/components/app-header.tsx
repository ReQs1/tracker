import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function AppHeader() {
  return (
    <header className="border-b p-4">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Briefcase />
          <span className="text-lg font-semibold">JobTrackr</span>
        </Link>

        <Button asChild size="lg">
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}

export default AppHeader;
