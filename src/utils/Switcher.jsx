import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode} from "../hooks/useDarkMode"


export default function Switcher() {
  const { darkSide, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-center dark:text-textDark text-backgroundDark ">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} />
    </div>
  );
}
