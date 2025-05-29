import { projecs2 } from "../utils/Data";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Proyectos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className=" flex items-center justify-center  min-h-screen pt-20 pb-2  text-backgroundDark dark:text-textDark dark:bg-backgroundDark bg-lines3 bg-cover bg-center bg-textDark">
      <div className="px-10 flex flex-col gap-2 max-sm:gap-0">
        <h1 className="text-4xl text-center uppercase font-extrabold max-sm:text-base max-2xl:text-base">
          Proyectos
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 items-center max-sm:gap-6 pb-2 "
        >
          {projecs2.map((project) => (
            <div
              key={project.id}
              className="product-card  rounded-md shadow-xl overflow-hidden relative cursor-pointer  shrink-0 py-8 px-6 bg-white flex flex-col  w-80 h-96 items-center justify-center gap-3 transition-all duration-300 group dark:backdrop-blur-sm  border border-gray-300  dark:border-gray-700 dark:bg-gray-100 dark:hover:bg-gray-200"
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
              <div className="absolute rounded-full  bg-backgroundDark left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
              <div className="para uppercase text-center leading-none  z-10 ">
                <p className="text-black font-semibold text-xs font-serif">
                  Proyecto
                </p>
                <p className="font-bold text-xl tracking-wider text-backgroundDark">
                  {project.title}
                </p>
              </div>
              <div className="img w-[180px] aspect-square  z-10 rounded-md">
                <img src={project.img} alt="Images for Projects" />
              </div>
              <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex flex-row gap-2">
                    <div className="inline-flex gap-3 items-center justify-center">
                      <p className="font-semibold text-xs text-white w-44">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                      <Link to={project.demo} target="_blank"  >
                        <svg
                          data-testid="geist-icon"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-6 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2"
                        >
                          <path d="M8 1L0 15H16L8 1ZM8 4.02335L2.58477 13.5H13.4152L8 4.02335Z"></path>
                        </svg>
                      </Link>
                      <Link to={project.github} target="_blank">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-6 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Proyectos;
