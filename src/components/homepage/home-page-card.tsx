import { type HomePageCard } from "@/app/(app-layout)/page";

const ICON_SIZE = 28;

export default function HomePageCard({ Icon, title, paragraph }: HomePageCard) {
  return (
    <li className="flex max-w-[400px] flex-col items-center gap-5 px-4">
      <div className="rounded-full bg-gray-100 p-4">
        <Icon size={ICON_SIZE} />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
        <p className="text-gray-500">{paragraph}</p>
      </div>
    </li>
  );
}
