import { ReactNode } from "react";

import { Footer } from "src/Components/Footer";
import Navbar from "src/Components/Navbar";
import { Sidebar } from "src/Components/Sidebar";
import { useNavContext } from "src/Contexts/useNavContext";
import { cm } from "src/Hooks/useClassesMerge";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { isNavBar } = useNavContext();

  return (
    <div className="relative flex bg-main-bg items-center justify-center min-h-screen min-w-full overflow-hidden">
      {isNavBar && <Navbar />}

      <div className="flex w-full h-full justify-center max-w-desktop-full">
        <Sidebar />

        <div
          className={cm(
            "flex flex-shrink w-full flex-col items-center min-h-screen bg-main max-w-[calc(100% - 326px)] lg:max-w-full overflow-auto",
            isNavBar ? "pt-20 sm:pt-14" : "",
          )}
        >
          <div className="flex relative flex-1 py-10 pt-8.5 flex-col justify-between w-full px-10 sm:px-0 sm:pt-7.5">
            {children}

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
