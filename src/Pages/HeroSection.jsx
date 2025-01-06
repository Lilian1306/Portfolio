import { motion } from "framer-motion";
import { lazy } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 2 },
  visible: { opacity: 10, y: 0, transition: { duration: 0.8 } },
};
const AboutUs = lazy(() => import("../components/AboutUs"));
const InfoServicios = lazy(() => import("../components/InfoServicios"));
const AllProjects = lazy(() => import("../components/AllProjects"));
const Inicio = lazy(() => import("./Inicio"));

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-backgroundDark bg-textDark   ">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <Inicio />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <AboutUs />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <InfoServicios />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <AllProjects />
      </motion.div>
    </div>
  );
};

export default HeroSection;
