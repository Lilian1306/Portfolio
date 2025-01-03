import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [darkSide, setDarkSide] = useState(colorTheme === "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeContext.Provider
      value={{
        theme,
        setTheme,
        colorTheme,
        darkSide,
        setDarkSide,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkProvider };
export default DarkModeContext;
