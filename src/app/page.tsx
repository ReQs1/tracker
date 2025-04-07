import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section className="grid gap-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-20 text-center md:gap-8">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Track Your Job Applications Effortlessly
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-500">
          Never lose track of your job applications again. Organize, monitor,
          and optimize your job search with JobTrackr.
        </p>
        <div>
          <Button asChild size="lg" className="px-8 py-5">
            <Link href="/login">Start Tracking Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
