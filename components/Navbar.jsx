"use client";
import ThemeSwitch from "./ThemeSwitch";
import ClearIcon from "@mui/icons-material/Clear";
import ReorderIcon from "@mui/icons-material/Reorder";
import avatarimg from "../public/useravatar.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 600);
    };

    // Initial check on mount
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative">
      {" "}
      <header className="h-16 flex justify-between items-center sticky top-0 z-40 md:z-30 shadow-xl dark:bg-darkbg dark:text-white bg-white w-full py-2 px-4">
        <div className="w-full">
          {isScreenSmall && (
            <button onClick={toggleSidebar} className="block md:hidden">
              {sidebarOpen ? (
                <ClearIcon className="text-2xl text-black dark:text-white cursor-pointer" />
              ) : (
                <ReorderIcon className="text-2xl text-black dark:text-white cursor-pointer" />
              )}
            </button>
          )}
        </div>
        <div className="flex justify-end items-center gap-2 w-full">
          <div className="w-10 h-10 rounded-full">
            <Image
              src={avatarimg}
              alt=""
              className="w-full h-full object-fit"
            />
          </div>
          <ThemeSwitch />
        </div>
      </header>
      {isScreenSmall && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
    </div>
  );
};

export default Navbar;
