import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import Portfolio from "./Portfolio";
import Proyectos from "./Proyectos";
import Servicios from "./Servicios";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 2 },
  visible: { opacity: 10, y: 0, transition: { duration: 0.8 } },
};

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col space-y-10 text-black dark:text-white bg-white dark:bg-black">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <Portfolio />
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
        <Servicios />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <Proyectos />
      </motion.div>
    </div>
  );
}
