import { Link } from "react-router-dom";
import { projecs } from "../utils/Data";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Proyectos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className=" flex items-center justify-center  min-h-screen   ">
      <div ref={ref} className="px-10 flex flex-col gap-10 max-sm:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-6 items-center max-sm:gap-2 ">
            {projecs.map((project) => (
              <div
                key={project.id}
                className="product-card  rounded-md shadow-xl overflow-hidden relative cursor-pointer  shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
              >
                <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                  <div className="flex gap-1">
                    <svg
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="1"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-gray-300 rotate-[24deg]"
                      height="200"
                      width="200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="absolute rounded-full bg-gray-500 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
                <div className="para uppercase text-center leading-none ">
                  <p className="text-black font-semibold text-xs font-serif">
                    Proyecto
                  </p>
                  <p className="font-bold text-xl tracking-wider text-gray-500">
                    {project.title}
                  </p>
                </div>
                <div className="img w-[180px] aspect-square  z-10 rounded-md">
                  <img src={project.img} />
                </div>
                <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex flex-row gap-2">
                      <div className="inline-flex gap-3 items-center justify-center">
                        <div className="p-1 bg-white flex items-center justify-center rounded-full ">
                          <svg
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="1"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="fill-gray-800 h-3 w-3 stroke-white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <p className="font-semibold text-xs text-white w-44">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/proyectos"
                    className="uppercase font-semibold text-xs px-2 whitespace-nowrap py-1 rounded-full bg-white text-gray-800"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Proyectos;

/*                <div
                  key={project.id}
                  className={`group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-800 via-slate-500 to-indigo-950 before:absolute before:top-0 w-80 h-72 relative bg-slate-200 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden `}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-28 h-28  mt-8 rounded-full border-4 border-black dark:border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
                  />
                  <div className="z-10  group-hover:-translate-y-10 transition-all duration-500 text-black dark:text-black">
                    <span className="text-2xl font-semibold ">
                      {project.title}
                    </span>
                  </div>
                  <Link
                    className="bg-indigo-950 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-indigo-800"
                    to="/portafolio"
                  >
                    Ver más
                  </Link>
                </div>*/
