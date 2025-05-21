import BackToHome from "@/shared/components/BackToHome";
import { projectsData } from "@/data/data";
import { motion } from "framer-motion";
function ProjectPage() {
  const handleOpenInNewTab = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <section className=" text-white">
      <div className=" flex items-center gap-5">
        <BackToHome />
        <h1 className="font-medium text-xl md:text-2xl">All Projects</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-20"
      >
        {projectsData.map((data) => {
          return (
            <div
              key={data.id}
              onClick={() => handleOpenInNewTab(data.link)}
              className="border py-2 px-3 min-h-28 md:min-h-32 rounded-md space-y-1.5 bg-gray-600/10 hover:bg-white/10 cursor-pointer active:scale-95 active:transition active:duration-150 active:ease-in-out"
            >
              <p className="font-medium text-base md:text-lg">{data.title}</p>
              <p className="font-light text-sm">{data.description}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default ProjectPage;
