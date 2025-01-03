import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { socialMedia } from "../utils/Data";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center justify-between px-20 max-sm:px-2 py-2 max-sm:py-2  text-black dark:text-white bg-white dark:bg-black ">
      <div className="flex flex-row items-center justify-between w-full max-sm:flex-row">
        <button onClick={handleClick}>
          <img
            src={logo}
            alt="Logo"
            className=" w-10 h-10 max-sm:w-8 max-sm:h-8 dark:drop-shadow-[0_3px_10px_#ffffff] dark:delay-200 dark:transition-all"
          />
        </button>

        <div className="flex flex-col justify-center items-center gap-2  max-sm:gap-1">
          <div className="flex flex-row items-center gap-1 text-base max-sm:text-xs">
            <Link to="/" onClick={handleClick}>
              Inicio
            </Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/portafolio">Portafolio</Link>
            <Link to="/contactanos">Contactanos</Link>
          </div>
          <div className="flex flex-row items-center space-x-4 gap-2">
            {socialMedia.map((social) => (
              <Link key={social.id} to={social.url} target="_blank">
                <img
                  src={social.img}
                  alt="Logo"
                  className=" w-10 h-10 max-sm:w-4 max-sm:h-4 dark:drop-shadow-[0_3px_10px_#ffffff] dark:delay-200 dark:transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm max-sm:text-xs pt-4">
        Todos los derechos reservados © {new Date().getFullYear()}{" "}
      </p>
    </div>
  );
};

export default Footer;
