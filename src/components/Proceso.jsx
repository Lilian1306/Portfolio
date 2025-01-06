import { proceso } from "../utils/Data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Proceso = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="flex  items-center justify-center gap-10 pt-10 ">
      <div className="px-10 flex flex-col gap-10 max-sm:gap-0 max-sm:px-2">
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
              className="flex flex-row px-2 md:max-w-xl items-center bg-white/50 backdrop-blur-md border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col justify-between py-4 leading-normal">
                <h5 className="mb-2 uppercase text-2xl max-sm:text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  {process.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-sm:text-xs">
                  {process.description}
                </p>
              </div>
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 max-sm:w-20 max-sm:h-20"
                src={process.img}
                alt=""
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Proceso;
