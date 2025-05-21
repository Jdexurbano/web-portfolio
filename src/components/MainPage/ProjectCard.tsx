import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Boxes, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/data";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";
function ProjectCard() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/projects");
  const handleOpenInNewTab = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Card className="bg-gray-600/15 mt-5">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 font-medium text-xl lg:text-2xl text-white">
          <div className="flex items-center gap-2">
            <Boxes />
            Projects
          </div>
          <Button
            onClick={handleNavigate}
            className="font-medium flex items-center gap-2 text-sm md:text-base cursor-pointer text-white bg-transparent"
          >
            <p>View all </p>
            <ChevronRight />
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-white/90 font-light text-sm lg:text-base grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {projectsData.slice(0, 4).map((data) => {
          return (
            <div
              key={data.id}
              onClick={() => handleOpenInNewTab(data.link)}
              className="border py-2 px-3 min-h-28 md:min-h-32 rounded-md space-y-1.5 hover:bg-white/10 cursor-pointer"
            >
              <p className="font-medium text-base md:text-lg">{data.title}</p>
              <p>{data.description}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
