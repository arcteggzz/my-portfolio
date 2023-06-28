import React, { createContext, useEffect, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileNavbarOpen: boolean;
  setMobileNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
  darkMode: boolean;
  toggleMobileNavbar: () => void;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(
  //   window.matchMedia(`(prefers-color-scheme: dark)`).matches
  // );
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    darkMode
      ? document.documentElement.style.setProperty(
          "--scrollbar-track-color",
          "#e7e7e7"
        )
      : document.documentElement.style.setProperty(
          "--scrollbar-track-color",
          "#02142d"
        );

    setDarkMode((darkMode) => !darkMode);
  };

  const toggleMobileNavbar = () => {
    setMobileNavbarOpen((mobileNavbarOpen) => !mobileNavbarOpen);
  };

  useEffect(() => {
    darkMode
      ? document.documentElement.style.setProperty(
          "--scrollbar-track-color",
          "#02142d"
        )
      : document.documentElement.style.setProperty(
          "--scrollbar-track-color",
          "#e7e7e7"
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        mobileNavbarOpen,
        setMobileNavbarOpen,
        toggleTheme,
        darkMode,
        toggleMobileNavbar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
