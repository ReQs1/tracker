export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <svg
        className="h-12 w-12 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <circle
          className="opacity-25"
          cx="25"
          cy="25"
          r="20"
          stroke="black"
          strokeWidth="5"
          fill="none"
        />
        <circle
          className="opacity-75"
          cx="25"
          cy="25"
          r="20"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="90"
          strokeDashoffset="60"
          fill="none"
        />
      </svg>
    </div>
  );
}
