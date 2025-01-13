import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { contact } from "../utils/Data";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";
import { Link } from "react-router-dom";
import { links } from "../utils/SocialLinks";
import SocialMedia from "../components/SocialMedia";
import { useDarkMode } from "../hooks/useDarkMode";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { colorTheme } = useDarkMode();
  return (
    <div className="flex items-center justify-center min-h-screen w-full  text-backgroundDark dark:text-textDark dark:bg-backgroundDark bg-lines3 bg-cover bg-center bg-textDark ">
      <div className=" flex flex-row items-center justify-center max-sm:flex-col px-10 max-sm:px-2 gap-4 ">
        <div className="flex flex-col gap-10 items-center justify-center ">
          <div className="flex flex-row gap-10 items-center justify-center">
            {contact.map((contactos) => (
              <div
                key={contactos.id}
                className="flex flex-col max-sm:flex-col items-center justify-center relative px-10 "
              >
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 70 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex flex-row items-center justify-center gap-2">
                    {" "}
                    <img
                      src={contactos.imgDark}
                      alt="Contact Dark Image"
                      className="w-8 h-8 max-sm:w-6 max-sm:h-4 "
                    />
                    <p className="text-sm font-extrabold uppercase max-2xl:text-lg max-sm:text-xs">
                      {contactos.title}
                    </p>
                  </div>
                  <span className=" w-full text-base flex items-end justify-end text-end  max-sm:text-xs max-2xl:text-base ">
                    {contactos.description}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-6 max-sm:gap-6 items-center justify-center">
            {links.map((social, index) => (
              <Link key={index} to={social.to} target="_blank">
                <motion.div
                  initial={{ opacity: 0, y: -70 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <SocialMedia
                    key={index}
                    to={social.to}
                    svgPath={social.svgPath}
                    className="w-7 h-10 dark:text-textDark text-backgroundDark"
                    title={social.title}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full items-center justify-center flex pt-20 "
        >
          <img
            src={`${colorTheme === "dark" ? logo : logo2}`}
            alt="Hero Logo Dark and White"
            className=" max-sm:h-32 max-sm:w-32 w-96 h-96"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

/*        {links.map((link, index) => (
          <SocialMedia
            key={index}
            to={link.to}
            svgPath={link.svgPath}
            className="w-7 h-10 dark:text-textDark text-backgroundDark"
          />
        ))}*/
