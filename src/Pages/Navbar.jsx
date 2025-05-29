import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";
import { usePage } from "../hooks/usePage";
import Footer from "../components/Footer";
import Switcher from "../utils/Switcher";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isScrolled } = usePage();
  const {colorTheme } = useDarkMode()

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="fixed top-0 w-full z-20 rounded-3xl">
        <div
          className={`flex flex-row justify-between px-4 py-4 w-full max-sm:w-full absolute transition-all duration-300  gap-4 max-sm:gap-1 text-textLight dark:text-textDark max-sm:py-2   ${
            isScrolled
              ? "bg-textDark dark:bg-black/10 backdrop-blur-xl shadow-md"
              : ""
          }`}
        >
          <button onClick={handleLogoClick}>
            
            <img
              src={`${colorTheme === "dark" ? logo : logo2}`}
              alt="TTech Designer logo Navbar"
              className=" max-sm:w-8 max-sm:h-8 w-8 h-8"
            />
          </button>
          <div className="flex justify-center items-center gap-6 text-base max-sm:text-xs max-sm:gap-3 font-prince2">
            <button
              onClick={handleLogoClick}
              className={`${
                isActive("/")
                  ? "border-b-2 border-backgroundDark dark:border-textDark"
                  : ""
              }`}
            >
              Inicio
            </button>
            <Link
              to="/servicios"
              className={`${
                isActive("/servicios")
                  ? "border-b-2 border-backgroundDark dark:border-textDark"
                  : ""
              }`}
            >
              Servicios
            </Link>
            <Link
              to="/portafolio"
              className={`${
                isActive("/portafolio")
                  ? "border-b-2 border-backgroundDark dark:border-textDark"
                  : ""
              }`}
            >
              Portafolio
            </Link>
            <Link
              to="/contactanos"
              className={`${
                isActive("/contactanos")
                  ? "border-b-2 border-backgroundDark dark:border-textDark"
                  : ""
              }`}
            >
              Contactanos
            </Link>
            <Switcher />
          </div>
        </div>
      </div>

      <Outlet />

      <Footer />
    </>
  );
};

export default Navbar;


//TODO:TEST