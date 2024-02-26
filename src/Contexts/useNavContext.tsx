import { ReactNode, createContext, useContext, useState } from "react";

export const NavContext = createContext<
  | {
      isNavBar: boolean;

      showNavbar: () => void;
      hideNavbar: () => void;
    }
  | undefined
>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [isNavBar, setIsNavbar] = useState(true);

  const showNavbar = () => setIsNavbar(true);
  const hideNavbar = () => setIsNavbar(false);

  const value = {
    isNavBar,

    showNavbar,
    hideNavbar,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context)
    throw new Error("useNavContext must be used within a NavProvider");
  return context;
};
