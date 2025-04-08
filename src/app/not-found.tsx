"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 p-3">
          <Search className="h-6 w-6 text-blue-600" />
        </div>
        <h1 className="mb-2 text-5xl font-bold tracking-tight">404</h1>
        <h2 className="mb-2 text-2xl font-semibold">Page not found</h2>
        <p className="text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Return home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}
