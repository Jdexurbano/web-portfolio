import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, SquareTerminal } from "lucide-react";
import { useNavigate } from "react-router";
import { frontendData, backendData } from "@/data/data";
import { Button } from "../ui/button";
function TechStacksCard() {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/stacks");

  return (
    <Card className="bg-gray-600/15 mt-5">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 font-medium text-xl lg:text-2xl text-white">
          <div className="flex items-center gap-2">
            <SquareTerminal />
            Tech Stacks
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

      <CardContent className="text-white/90 font-light space-y-5 text-sm lg:text-base">
        <div>
          <h1 className="font-medium text-base md:text-xl">Frontend</h1>
          <div className="space-x-3 md:space-x-6 mt-2">
            {frontendData.slice(0, 4).map((data) => {
              return (
                <Badge
                  key={data.id}
                  variant={"outline"}
                  className="text-white md:text-base px-3 py-1 md:py-2 rounded-xl hover:bg-white/10 mt-4 md:mt-2"
                >
                  <p>{data.name}</p>
                </Badge>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="font-medium text-base md:text-xl">Backend</h1>
          <div className="space-x-3 md:space-x-6 mt-2">
            {backendData.slice(0, 4).map((data) => {
              return (
                <Badge
                  key={data.id}
                  variant={"outline"}
                  className="text-white md:text-base px-3 py-1 md:py-2 rounded-xl hover:bg-white/10 mt-4 md:mt-2"
                >
                  <p>{data.name}</p>
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TechStacksCard;
