import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { BriefcaseBusiness } from "lucide-react";
function AboutCard() {
  return (
    <Card className="bg-gray-600/15">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-medium text-xl lg:text-2xl text-white">
          <BriefcaseBusiness />
          About
        </CardTitle>
      </CardHeader>

      <CardContent className="text-white/90 font-light space-y-3 text-sm lg:text-base">
        <p>
          Hello! I’m Dexter, a Computer Science student and aspiring Software
          Engineer with a strong passion for building impactful web
          applications. I thrive on learning new technologies and crafting
          solutions that not only streamline business operations but also create
          positive change in the community.
        </p>

        <p>
          My technical focus lies in backend development using Python,
          particularly with Django and Django REST Framework, where I build
          robust and scalable APIs. On the frontend, I'm actively honing my
          skills with React.js and Tailwind CSS to develop clean, responsive,
          and user-friendly interfaces.
        </p>
        <p>
          As I continue my journey in software engineering, I’m eager to apply
          my knowledge to real-world projects, collaborate with passionate
          teams, and contribute to building solutions that matter.
        </p>

        <p>Let’s connect and create something meaningful together! </p>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
