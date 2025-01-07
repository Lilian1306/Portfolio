import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Inicio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Cambia `once` a `false` para detectar múltiples entradas al viewport

  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };

  return (
    <div className="flex justify-center min-h-screen w-full text-backgroundDark dark:text-textDark bg-lines3 bg-cover bg-center ">
      <div
        className="flex flex-col gap-10 items-center justify-center max-sm:flex-col px-10"
        ref={ref}
      >
        <motion.div
          className="flex flex-col items-center relative  "
          initial={{ opacity: 0, x: -200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          key={isInView ? "visible" : "hidden"} // Fuerza el remount cuando cambia `isInView`
        >
          <div className="flex flex-col justify-center items-center gap-4 text-center max-sm:text-center ">
            <div className="overflow-hidden">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
              >
                <p className="text-7xl max-2xl:text-4xl max-sm:text-lg font-bold  ">
                  Bienvenido a{" "}
                  <span className="text-secondaryDark ">Web Tech T</span> donde
                  creamos
                </p>
              </motion.h1>

              <motion.h1
                initial="right"
                animate="visible"
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
                className=" h-24"
              >
                <p className="text-7xl max-2xl:text-4xl font-bold  max-sm:text-lg ">
                  paginas web a tu medida
                </p>
              </motion.h1>
            </div>

            <span className="text-lg max-sm:text-xs max-2xl:text-base max-md:text-center w-96 ">
              {" "}
              ¿Estás listo para transformar tu visión en un sitio web destacado?
            </span>

            <Link
              to="/contactanos"
              className=" text-xs text-textDark bg-primaryDark px-2 rounded-lg py-2 text-center uppercase font-bold"
            >
              Contactanos
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Inicio;
