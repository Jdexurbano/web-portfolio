import BackToHome from "@/shared/components/BackToHome";
import { Badge } from "@/components/ui/badge";
import { frontendData, backendData, devToolsData } from "@/data/data";
import { motion } from "framer-motion";
function TechStackPage() {
  return (
    <section className=" text-white">
      <div className=" flex items-center gap-5">
        <BackToHome />
        <h1 className="font-medium text-xl md:text-2xl">Tech Stacks</h1>
      </div>

      <div className="font-medium text-xl md:text-2xl mt-10 mb-36 space-y-10">
        <div>
          <p>Frontend</p>

          <div className="flex flex-wrap gap-5 mt-5">
            {frontendData.map((data) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  key={data.id}
                >
                  <Badge
                    variant={"outline"}
                    className="text-white py-1.5 px-6 text-sm rounded-xl hover:bg-white/10 bg-gray-600/15"
                  >
                    {data.name}
                  </Badge>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <p>Backend</p>

          <div className="flex flex-wrap gap-5 mt-5">
            {backendData.map((data) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  key={data.id}
                >
                  <Badge
                    variant={"outline"}
                    className="text-white py-1.5 px-6 text-sm rounded-xl hover:bg-white/10 bg-gray-600/15"
                  >
                    {data.name}
                  </Badge>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <p>Developer Tools</p>

          <div className="flex flex-wrap gap-5 mt-5">
            {devToolsData.map((data) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  key={data.id}
                >
                  <Badge
                    variant={"outline"}
                    className="text-white py-1.5 px-6 text-sm rounded-xl hover:bg-white/10 bg-gray-600/15"
                  >
                    {data.name}
                  </Badge>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackPage;
