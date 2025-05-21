import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness } from "lucide-react";

function ExperienceCard() {
  const expData = [
    {
      id: 1,
      title: "Internnook",
      possition: "Software Developer Intern",
      year: "2025",
    },
    {
      id: 2,
      title: "BS Computer Science",
      possition: "Naga College Foundation",
      year: "2025",
    },
    {
      id: 3,
      title: "Hello World",
      possition: "Wrote my first line of code",
      year: "2021",
    },
  ];
  return (
    <Card className="bg-gray-600/15 mt-5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-medium text-xl lg:text-2xl text-white">
          <BriefcaseBusiness />
          Experience
        </CardTitle>
      </CardHeader>

      <CardContent className="text-white/90 font-light space-y-5 text-sm lg:text-base">
        {expData.map((data) => {
          return (
            <div className="flex justify-between items-center" key={data.id}>
              <div>
                <h1 className="font-bold md:text-lg">{data.title}</h1>
                <p>{data.possition}</p>
              </div>
              <Badge variant={"outline"} className="text-white h-6">
                {data.year}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
