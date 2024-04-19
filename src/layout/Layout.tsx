import React from "react";
import { twMerge } from "tailwind-merge";
import useLocalStorage from "../hooks/useLocalStorage";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
  const isSystemThemeSatedDark: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useLocalStorage({
    key: "theme",
    defaultValue: isSystemThemeSatedDark ? "dark" : "light",
  });

  const handleToggleTheme = () => {
      setDarkMode(darkMode === 'light'? 'dark': 'light');
  };

  return (
    <div
      className={twMerge("overflow-hidden", darkMode)}
    >
      <button onClick={handleToggleTheme}>theme</button>
      <Header/>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
