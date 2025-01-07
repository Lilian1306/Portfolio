import { Link } from "react-router-dom";
import { projecs } from "../utils/Data";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const AllProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className=" flex items-center justify-center  min-h-screen text-backgroundDark dark:text-textDark bg-lines4 bg-cover bg-center  ">
      <div className="px-10 flex flex-col items-center justify-center gap-10 max-sm:gap-1">
        <h1 className="text-4xl text-center uppercase font-extrabold max-sm:text-base max-2xl:text-base ">
          Proyectos
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 items-center max-sm:gap-4  "
        >
          {projecs.map((project) => (
            <div
              key={project.id}
              className="product-card  rounded-md shadow-xl overflow-hidden relative cursor-pointer  shrink-0 py-8 px-6  flex flex-col w-80 h-96  items-center justify-center gap-3 transition-all duration-300 group   bg-backgroundDark/10 backdrop-blur-sm dark:backdrop-blur-sm dark:bg-white/5 border border-gray-200 hover:bg-backgroundDark/20 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 "
            >
              <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                <div className="flex gap-1">
                  <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="fill-gray-600 rotate-[24deg]"
                    height="200"
                    width="200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <div className="absolute rounded-full bg-backgroundDark left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
              <div className="para uppercase text-center leading-none  z-10">
                <p className="text-backgroundDark dark:text-textDark font-semibold text-xs font-serif">
                  Proyecto
                </p>
                <p className="font-bold text-xl tracking-wider text-backgroundDark dark:text-textDark">
                  {project.title}
                </p>
              </div>
              <div className="img w-[180px] aspect-square  z-10 rounded-md">
                <img src={project.img} />
              </div>
              <div className="btm-_container z-40 flex flex-row justify-between ">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex flex-row gap-2">
                    <div className="inline-flex gap-3 items-center justify-center">
                      <p className="font-semibold text-xs text-center text-textDark dark:text-textDark w-44">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <Link
          to="/portafolio"
          className="bg-primaryDark text-textDark px-4 py-2 my-4 rounded-md"
        >
          Ver mas proyectos
        </Link>
      </div>
    </div>
  );
};

export default AllProjects;
