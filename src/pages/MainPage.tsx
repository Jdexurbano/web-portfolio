import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import {
  BriefcaseBusiness,
  Github,
  Linkedin,
  MapPin,
  Send,
} from "lucide-react";
import AboutCard from "@/components/MainPage/AboutCard";
import ExperienceCard from "@/components/MainPage/ExperienceCard";
import TechStacksCard from "@/components/MainPage/TechStacksCard";
import ProjectCard from "@/components/MainPage/ProjectCard";
import { handleOpenGithubInNewTab } from "@/data/data";
import { handleOpenLinkedinInNewTab } from "@/data/data";
import { motion } from "framer-motion";
function MainPage() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/message");
  return (
    <section>
      <div className="md:grid md:grid-cols-[40%_60%] lg:grid-cols-[30%_70%] md:gap-2 pr-1.5 ">
        <div className="flex justify-center md:flex-col md:justify-start md:items-center gap-2">
          <img
            src="images/Profile_pic.png"
            alt=""
            className="rounded-full border-3 border-white size-32 md:size-40 lg:size-52"
          />

          <div className="pl-1 space-y-4">
            <h1 className="text-white text-lg md:text-center lg:text-2xl">
              John Dexter Urbano
            </h1>
            <Button
              onClick={handleNavigate}
              className="bg-secondary min-w-40 md:min-w-56 text-slate-950 px-10 py-3 h-8 active:scale-95 cursor-pointer "
            >
              <Send />
              Send a Message
            </Button>
            <div className="space-y-2 text-white font-light text-sm lg:text-lg">
              <div className="flex gap-2 items-center">
                <MapPin size={20} />
                <p>Naga City, Philippines</p>
              </div>
              <div className="flex gap-2 items-center">
                <BriefcaseBusiness size={20} />
                <p>Software Engineer</p>
              </div>
            </div>

            <div className="border-t-2 border-white text-white py-2 space-y-2 max-w-56 lg:text-lg">
              <p>Socials</p>
              <div className="flex items-center space-x-3 ">
                <Github
                  onClick={handleOpenGithubInNewTab}
                  className="cursor-pointer"
                />
                <Linkedin
                  onClick={handleOpenLinkedinInNewTab}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="mt-5 md:mt-0"
        >
          <AboutCard />
          <ExperienceCard />
          <TechStacksCard />
        </motion.div>
      </div>
      <ProjectCard />
    </section>
  );
}

export default MainPage;
