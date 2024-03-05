import { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const getInitialDarkModeState = () => {
    const isDarkMode =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDarkMode ? isDarkMode : false;
  };

  const [isDarkMode, setIsDarkMode] = useLocalStorageState("isDarkMode", getInitialDarkModeState());

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    // Your existing code for handling dark mode in the useEffect
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw Error("DarkModeContext was used outside of DarkModeProvider");
  }

  return context;
}