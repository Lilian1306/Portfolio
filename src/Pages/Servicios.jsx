import {
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { services } from "../utils/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Servicios = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar la página
  }, []);
  return (
    <div className=" flex items-center justify-center  min-h-screen text-black dark:text-white bg-gradient-to-r from-white to-white dark:from-[#080e1c] dark:to-[#0c1d36] ">
      <div className="px-10 flex flex-col gap-10 max-sm:gap-5">
        <h1 className="text-4xl text-center uppercase font-extrabold max-sm:text-base max-2xl:text-base ">
          Servicios
        </h1>

        <motion.div
          ref={ref}
          className="flex flex-wrap gap-10 justify-center items-center"
          initial={{ opacity: 0, x: 200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {services.map((service) => (
            <Card
              key={service.id}
              className="w-full max-w-[20rem] shadow-lg text-black dark:text-white bg-white dark:bg-slate-950"
            >
              <CardHeader floated={false} color="blue-gray">
                <img src={service.img} alt={service.title} />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody className="px-2">
                <div className="mb-3 flex items-center justify-between uppercase font-extrabold">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {service.title}
                  </Typography>
                </div>

                <Typography>{service.description}</Typography>
                <div className="group mt-8 flex justify-center items-center pb-2">
                  <Link
                    to="/servicios"
                    className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3  transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
                  >
                    <Tooltip content="Ver Proyecto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                          clipRule="evenodd"
                        />
                        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                      </svg>
                    </Tooltip>
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Servicios;