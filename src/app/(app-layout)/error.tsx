"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-background flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Oops! Something went wrong.
        </h1>
        <p className="text-muted-foreground md:text-xl">
          We encountered an unexpected error. Please try again.
        </p>
        {error?.digest && (
          <p className="text-muted-foreground text-sm">
            Error Digest: {error.digest}
          </p>
        )}
      </div>
      <button
        onClick={() => reset()}
        className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-10 cursor-pointer items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
      >
        Try Again
      </button>
    </div>
  );
}
