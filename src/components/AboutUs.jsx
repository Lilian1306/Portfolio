import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutus } from "../utils/Data";
import Team from "./Team";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex items-center justify-center min-h-screen w-full ">
      <div
        className=" items-center justify-center max-sm:flex-col px-10 max-sm:px-2"
        ref={ref}
      >
        {aboutus.map((about) => (
          <div
            key={about.id}
            className="flex flex-row max-sm:flex-col gap-10 items-center justify-center relative px-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full items-center justify-center flex "
            >
              <img
                src={about.img}
                alt="Hero"
                className=" max-sm:h-16 dark:drop-shadow-[0_5px_35px_#8b8a8a] dark:delay-200 dark:transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col gap-2 items-center justify-center"
            >
              <p className="text-3xl font-extrabold max-2xl:text-lg">
                {about.title}
              </p>
              <span className=" text-base text-center  max-sm:text-xs max-2xl:text-base ">
                {about.description}
              </span>
              <div className=" w-96 max-sm:w-72 max-sm:px-10 text-xs px-20 bg-black text-white dark:bg-white dark:text-black rounded-lg py-2 text-center font-bold">
                <p className="">{about.phrase}</p>
              </div>
              <h1 className="text-2xl font-bold text-center">Nuestro equipo</h1>
              <Team /> {/* This is optional */}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
