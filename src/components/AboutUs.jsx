//import Team from "./Team";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutus } from "../utils/Data";
import { useDarkMode } from "../hooks/useDarkMode";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { colorTheme } = useDarkMode();

  return (
    <div className="flex items-center justify-center min-h-screen w-full dark:text-textDark text-primaryDark bg-lines4 bg-cover bg-center ">
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
                src={`${
                  colorTheme === "dark" ? about.imgDark : about.imgWhite
                }`}
                alt="Hero"
                className=" w-96 h-96 max-sm:h-20 max-sm:w-20 "
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col gap-2 items-center justify-center"
            >
              <p className="text-5xl font-extrabold max-2xl:text-lg uppercase  dark:text-secondaryLight">
                <span className="  text-secondaryDark">{about.title} </span>
              </p>
              <span className=" text-xl text-center  max-sm:text-sm max-2xl:text-base ">
                {about.description}
              </span>
              <div className=" text-textDark w-96 max-sm:w-72 max-sm:px-10 text-base px-20 rounded-lg py-2 text-center font-bold backdrop-blur-md  bg-backgroundDark dark:backdrop-blur-md dark:bg-backgroundDark/20 border border-gray-800 hover:bg-slate-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 ">
                <p> &quot;{about.phrase} &quot;</p>
                <span className="text-xs text-end">- {about.author}</span>
              </div>
              {/* <h1 className="text-2xl font-bold text-center">Nuestro equipo</h1>
              <Team />  This is optional */}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
