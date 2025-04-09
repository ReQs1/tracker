import HomePageCard from "@/components/homepage/home-page-card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  ChartNoAxesColumnIncreasing,
  CircleCheckBig,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

export type HomePageCard = {
  Icon: LucideIcon;
  title: string;
  paragraph: string;
};

const homepageCardsContent: HomePageCard[] = [
  {
    Icon: Briefcase,
    title: "Organize Applications",
    paragraph:
      "Keep all your job applications in one place with company details, positions and notes",
  },
  {
    Icon: CircleCheckBig,
    title: "Track Status",
    paragraph:
      "Update application status with a single click and never miss an interview or follow-up.",
  },
  {
    Icon: ChartNoAxesColumnIncreasing,
    title: "Insights",
    paragraph:
      "Get insights into your job search progress and improve your application strategy.",
  },
];

export default async function Home() {
  //TODO: adjust links when user is logged in

  return (
    <div>
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

      <section className="px-4 py-20 text-center">
        <h2 className="mb-15 text-3xl font-bold text-balance">
          Everything You Need to Land Your Dream Job
        </h2>
        <ul className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          {homepageCardsContent.map((card, id) => (
            <HomePageCard
              key={id}
              Icon={card.Icon}
              title={card.title}
              paragraph={card.paragraph}
            />
          ))}
        </ul>
      </section>

      <section className="grid gap-6 bg-gray-100 px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Organize Your Job Search?
        </h2>
        <p className="mx-auto max-w-2xl px-4 text-gray-500">
          Join thousands of job seekers who have streamlined their job search
          process with JobTrackr.
        </p>
        <div>
          <Button asChild size="lg" className="px-8 py-5">
            <Link href="/login">Start in with Google</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
