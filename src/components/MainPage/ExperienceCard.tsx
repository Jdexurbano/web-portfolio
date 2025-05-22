import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness } from "lucide-react";
import { experienceData } from "@/data/data";

function ExperienceCard() {
  return (
    <Card className="bg-gray-600/15 mt-5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-medium text-xl lg:text-2xl text-white">
          <BriefcaseBusiness />
          Experience
        </CardTitle>
      </CardHeader>

      <CardContent className="text-white/90 font-light space-y-5 text-sm lg:text-base">
        {experienceData.map((data) => {
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
