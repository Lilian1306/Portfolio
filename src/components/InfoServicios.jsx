import { Card, Typography } from "@material-tailwind/react";
import { services } from "../utils/Data";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InfoServicios = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className=" flex items-center justify-center  min-h-screen text-backgroundDark dark:text-textDark bg-lines3 bg-cover bg-center ">
      <div className="px-10 flex flex-col items-center justify-center gap-10 max-sm:gap-5">
        <h1 className="text-4xl text-center uppercase font-extrabold max-sm:text-base max-2xl:text-base max-sm:pt-6 ">
          Servicios
        </h1>

        <motion.div
          ref={ref}
          className="flex flex-wrap gap-10 max-sm:gap-4 justify-center items-center"
          initial={{ opacity: 0, x: 200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {services.map((service) => (
            <Link to="/servicios" key={service.id}>
              <Card className=" w-80  h-72 p-4 rounded-lg shadow-lg backdrop-blur-lg bg-backgroundDark/5 dark:bg-textDark/5 ">
                <div>
                  <img
                    src={service.img}
                    alt="Diverse Services"
                    className=" h-auto "
                  />
                </div>

                <div className=" flex items-center text-center justify-center uppercase font-extrabold pt-4 ">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium text-center dark:text-textDark"
                  >
                    {service.title}
                  </Typography>
                </div>
              </Card>
            </Link>
          ))}
        </motion.div>
        <Link
          to="/servicios"
          className="bg-primaryDark text-textDark px-4 py-2 rounded-md"
        >
          Ver mas detalles
        </Link>
      </div>
    </div>
  );
};

export default InfoServicios;
