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
      <CardTitle className="line-clamp-1 text-lg break-all">
        {companyName}
      </CardTitle>
      <CardDescription className="line-clamp-1 text-base break-all">
        {position}
      </CardDescription>
    </div>
  );
}
