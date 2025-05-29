import { services } from "../utils/Data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Caracteristicas from "../components/Caracteristicas";
import Proceso from "../components/Proceso";

const Servicios = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex items-center pt-20 pb-2 justify-center min-h-screen text-backgroundDark dark:text-textDark dark:bg-backgroundDark bg-lines3 bg-cover bg-center bg-textDark  ">
      <div className="px-10 flex flex-col items-center justify-center gap-10 max-sm:gap-5">
        <h1 className="text-4xl text-center uppercase font-extrabold max-sm:text-base max-2xl:text-base">
          Servicios
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 70 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-2 justify-center items-center pb-4 max-sm:px-8"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-row items-stretch border border-gray-300 rounded-lg backdrop-blur-md shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex-[1] rounded-tl-lg rounded-bl-lg dark:bg-gray-700  bg-blue-200 flex items-center">
                <img
                  className=" object-contain h-48 w-full max-sm:h-28 rounded-lg "
                  src={service.img}
                  alt="Services Images"
                />
              </div>

              <div className="flex-[2] flex flex-col justify-between py-4 pl-2 ">
                <h1 className="mb-2 uppercase text-2xl max-sm:text-xs font-bold text-gray-900 dark:text-white ">
                  {service.title}
                </h1>
                <p className="mb-3 font-normal max-sm:text-xs text-gray-700 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <Caracteristicas />
        <Proceso />
      </div>
    </div>
  );
};

export default Servicios;
