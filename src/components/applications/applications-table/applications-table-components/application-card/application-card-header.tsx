import { CardDescription, CardTitle } from "@/components/ui/card";

export default function CardHeader({
  companyName,
  position,
}: {
  companyName: string;
  position: string;
}) {
  return (
    <div>
      <CardTitle className="text-lg">{companyName}</CardTitle>
      <CardDescription className="text-base">{position}</CardDescription>
    </div>
  );
}
