import React from "react";

import { Footer } from "src/Components/Footer";
import Navbar from "src/Components/Navbar";
import { Sidebar } from "src/Components/Sidebar";

export const DashboardLayout = ({ children }) => (
  <div className="relative flex bg-main-bg items-center justify-center min-h-screen min-w-full overflow-hidden">
    <Navbar />

    <div className="flex w-full h-full justify-center max-w-desktop-full">
      <Sidebar />

      <div className="flex flex-shrink w-full flex-col items-center min-h-screen bg-main max-w-[calc(100% - 326px)] lg:max-w-full overflow-auto pt-20 sm:pt-14">
        <div className="flex relative flex-1 py-10 pt-8.5 flex-col justify-between w-full px-10 sm:px-0 sm:pt-7.5">
          {children}

          <Footer />
        </div>
      </div>
    </div>
  </div>
);
