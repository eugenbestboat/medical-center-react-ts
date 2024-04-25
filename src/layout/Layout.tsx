import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useLocalStorage from "../hooks/useLocalStorage";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
  const isSystemThemeSatedDark: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isModalRendered, setIsModalRendered] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useLocalStorage({
    key: "theme",
    defaultValue: isSystemThemeSatedDark ? "dark" : "light",
  });

  const handleToggleTheme = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };
  const handleToggleModal = () => {
    setIsModalRendered(!isModalRendered);
  };

  const refForWindow = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && refForWindow.current < 1) {
        refForWindow.current += 1;
        setIsModalRendered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      refForWindow.current = 0;
    };
  }, [isModalRendered]);

  return (
    <div
      onScroll={handleToggleModal}
      className={twMerge("overflow-hidden", darkMode)}
    >
      <Header
        toggleTheme={handleToggleTheme}
        toggleModal={handleToggleModal}
        isModalRendered={isModalRendered}
      />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
