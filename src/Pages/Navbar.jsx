import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { usePage } from "../hooks/usePage";
import Footer from "../components/Footer";
import Switcher from "../utils/Switcher";

const Navbar = () => {
  const navigate = useNavigate();
  const { isScrolled } = usePage();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 w-full z-20 rounded-3xl">
        <div
          className={`flex flex-row justify-between px-4 py-2 w-full absolute transition-all duration-300  gap-4 max-sm:gap-1 text-black dark:text-white max-sm:py-2   ${
            isScrolled
              ? "bg-white dark:bg-black/20 backdrop-blur-3xl shadow-lg"
              : ""
          }`}
        >
          <button onClick={handleLogoClick}>
            <img
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="dark:drop-shadow-[0_3px_10px_#ffffff] dark:delay-200 dark:transition-all"
            />
          </button>
          <div className="flex justify-center items-center gap-6 text-base max-sm:text-xs max-sm:gap-3 font-prince2">
            <button onClick={handleLogoClick}>Inicio</button>
            <Link to="/servicios">Servicios</Link>
            <Link to="/portafolio">Portafolio</Link>
            <Link to="/contactanos">Contactanos</Link>
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

/*.color1 { #2e2dac };
.color2 { #9695e3 };
.color3 { #1c1c6a };
.color4 { #343468 };
.color5 { #201f79 };

.color1 { #3053ba };
.color2 { #a264db };
.color3 { #1e1c73 };
.color4 { #5e5db4 };
.color5 { #866ebc };
*/
