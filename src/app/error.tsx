"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 p-3">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mb-6">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={reset} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <Home className="h-4 w-4" />
              Return home
            </Button>
          </Link>
        </div>
        {error.digest && (
          <p className="text-muted-foreground mt-4 text-xs">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
