import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";
import SocialMedia from "./SocialMedia";
import { links } from "../utils/SocialLinks";
import { useDarkMode } from "../hooks/useDarkMode";

const Footer = () => {
  const navigate = useNavigate();
    const {colorTheme } = useDarkMode()

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className=" flex flex-col items-center justify-between px-20 max-sm:px-2 py-2 max-sm:py-2 text-backgroundDark dark:text-textDark bg-textDark dark:bg-backgroundDark ">
      <div className="flex flex-row items-center justify-between w-full max-sm:flex-row">
        <button onClick={handleClick}>
          <img
           src={`${colorTheme === "dark" ? logo : logo2}`}
            alt="TTech Designer Logo Footer"
            className=" w-10 h-10 max-sm:w-8 max-sm:h-8  "
          />
        </button>
        <div className="flex flex-row gap-4">
          {links.map((link, index) => (
            <SocialMedia
              key={index}
              to={link.to}
              svgPath={link.svgPath}
              className="w-7 h-10 max-sm:w-5 dark:text-textDark text-backgroundDark"
            />
          ))}
        </div>
      </div>
      <p className="text-sm max-sm:text-xs pt-2">
        Todos los derechos reservados © {new Date().getFullYear()}{" "}
      </p>
    </div>
  );
};

export default Footer;
