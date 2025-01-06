import {  createContext, useEffect, useState } from "react";

const PageContext = createContext();

const PageProvider = ({ children } ) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageContext.Provider
      value={{
        scrollToSection,
        isScrolled,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export { PageProvider };
export default PageContext;
