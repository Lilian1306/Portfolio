import { proceso } from "../utils/Data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Proceso = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="flex  items-center justify-center gap-10 pt-10 ">
      <div className="px-10 flex flex-col gap-10 max-sm:gap-0">
        <h1 className="text-4xl text-center uppercase font-extrabold max-sm:text-base max-2xl:text-base ">
          proceso
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2 justify-center items-center pb-4 max-sm:px-4"
        >
          {proceso.map((process) => (
            <div
              key={process.id}
              className="flex flex-row pl-2 md:max-w-xl items-stretch bg-white/50 backdrop-blur-md border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex-[2] flex flex-col justify-between py-4 leading-normal">
                <h5 className="mb-2 uppercase text-2xl max-sm:text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  {process.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-sm:text-xs">
                  {process.description}
                </p>
              </div>
              <div className="flex-[1] rounded-tr-lg rounded-br-lg dark:bg-gray-700 bg-blue-200 flex items-center">
                <img
                  className="object-contain h-40 w-full rounded-lg"
                  src={process.img}
                  alt="Step Process"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Proceso;
