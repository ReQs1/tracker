import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, LucideIcon } from "lucide-react";

type Props = {
  title: string;
  Icon: LucideIcon;
  iconColor: string;
  data: string;
  subParagraph: string;
};

function OverviewCard({ title, Icon, iconColor, data, subParagraph }: Props) {
  return (
    <Card className="gap-2 shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <CardTitle
          className="rounded-full p-2"
          style={{ backgroundColor: iconColor }}
        >
          <Icon size={18} color="white" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{data}</p>
        <p className="text-sm text-gray-400">{subParagraph}</p>
      </CardContent>
    </Card>
  );
}

export default OverviewCard;
