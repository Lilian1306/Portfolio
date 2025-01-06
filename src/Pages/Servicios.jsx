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
    <div className="flex items-center pt-20 pb-2 justify-center min-h-screen text-backgroundDark dark:text-textDark dark:bg-backgroundDark bg-lines3 bg-cover bg-center ">
      <div className="px-10 flex flex-col items-center justify-center gap-10 max-sm:gap-5">
        <h1 className="text-4xl text-center uppercase font-extrabold max-sm:text-base max-2xl:text-base">
          Servicios
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-2 justify-center items-center pb-4 max-sm:px-4"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-row items-center border border-gray-800 rounded-lg backdrop-blur-md shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 max-sm:h-20 max-sm:w-20 md:rounded-none md:rounded-s-lg"
                src={service.img}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 uppercase text-2xl max-sm:text-base font-bold tracking-tight ">
                  {service.title}
                </h5>
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
