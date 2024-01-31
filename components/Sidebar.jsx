'use client';
import React, { useEffect, useState } from "react";
import Logo from "../public/next.svg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";
import AccordionComp from "../components/Accordion";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import PersonIcon from "@mui/icons-material/Person";
import AddCardIcon from "@mui/icons-material/AddCard";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import WebIcon from "@mui/icons-material/Web";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import EmailIcon from "@mui/icons-material/Email";
import FlagIcon from "@mui/icons-material/Flag";
import Image from "next/image";

const Sidebar = ({ sidebarOpen, setSidebarOpen, setMainSidebarOpen, mainsidebarOpen }) => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;
  const [isScreenSmall, setIsScreenSmall] = useState(width < 600);
  console.log(isScreenSmall);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(width <= 600);
    };
    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isScreenSmall, setSidebarOpen, setMainSidebarOpen, width]);
  return (
    <aside className={`${mainsidebarOpen || sidebarOpen ? "active md:w-64" : "hidden md:block w-14"} dark:bg-darkbg dark:text-white bg-white fixed top-16 md:top-0 z-20 md:z-50 h-full overflow-auto shadow-lg`}>
      <div className={`py-2 bg-white dark:bg-darkbg flex flex-col ${mainsidebarOpen || sidebarOpen ? "gap-1 px-4" : "gap-2 px-2"
          }  `}>
        <div className="w-full h-16 hidden md:flex justify-between items-center">
          <div className="w-full">
            <Image
              className={`${!mainsidebarOpen ? "hidden" : "w-16 h-16 object-fit"
                }`}
              src={Logo}
              alt=""
            />
          </div>
          {mainsidebarOpen || sidebarOpen ? (
            <div className="w-full flex justify-end items-center">
              <button
                onClick={() => setMainSidebarOpen(false)}
                className="w-10 h-10 rounded-md bg-gray-300 dark:bg-white dark:hover:bg-primarycl hover:bg-primarycl group group-hover:text-white"
              >
                <DoubleArrowIcon className="text-2xl text-black group-hover:text-white dark:text-black dark:hover:text-white rotate-180" />
              </button>
            </div>
          ) : (
            <div className="h-full w-full flex justify-center items-center">
              <button
                onClick={() => setMainSidebarOpen(true)}
                className="w-10 h-10 rounded-md bg-gray-300 dark:hover:bg-primarycl hover:bg-primarycl group group-hover:text-white  dark:bg-white"
              >
                <DoubleArrowIcon className="text-2xl text-black group-hover:text-white  dark:text-black dark:hover:text-white" />
              </button>
            </div>
          )}
        </div>
        <Link
          onClick={isScreenSmall && (() => setMainSidebarOpen(false))}
          href="/"
          className="hover:bg-primarycl group rounded-md h-10"
        >
          <div className="flex items-center gap-1 h-full px-1">
            <button
              onClick={() => setMainSidebarOpen(true)}
              className="w-10 h-10"
            >
              <DashboardIcon className="text-black dark:text-white group-hover:text-white text-2xl" />
            </button>
            {(mainsidebarOpen || sidebarOpen) && (
              <span className="text-black dark:text-white  group-hover:text-white">
                <h1 className="text-base font-medium pt-1">Dashboard</h1>
              </span>
            )}
          </div>
        </Link>
        <div className="w-full border-none">
          {(!mainsidebarOpen || sidebarOpen) && (
            <div
              onClick={() => {
                setMainSidebarOpen(true);
              }}
              className="cursor-pointer hidden md:flex justify-center items-center w-full h-10  hover:bg-primarycl rounded-md group"
            >
              <AdminPanelSettingsIcon className="text-black dark:text-white text-2xl group-hover:text-white" />
            </div>
          )}

          {(mainsidebarOpen || sidebarOpen) && (
            <AccordionComp title='Admin User' icon={<AdminPanelSettingsIcon />} >
              <ul className="flex flex-col justify-center items-center gap-0 text-black dark:text-white w-full">
                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <PersonAddIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base dark:text-white font-medium w-full"
                    href="/newadmin"
                  >
                    New Admin
                  </Link>
                </li>

                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <SupervisorAccountIcon className="text-2xl text-black dark:text-white w-1/4 " />
                  <Link
                    className="text-black text-base font-medium dark:text-white w-full"
                    href="/admin"
                  >
                    Admin
                  </Link>
                </li>

                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <AddModeratorIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base font-medium w-full dark:text-white"
                    href="/mainadminuser"
                  >
                    Admin Role
                  </Link>
                </li>
                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <PersonAddIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base font-medium w-full dark:text-white"
                    href="/coadmin"
                  >
                    Co Admin
                  </Link>
                </li>
                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <CategoryIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base font-medium w-full dark:text-white"
                    href="/addcategory"
                  >
                    Add Category
                  </Link>
                </li>
              </ul>
            </AccordionComp>
          )}
        </div>
        <div className="w-full border-none">
          {(!mainsidebarOpen || sidebarOpen) && (
            <div
              onClick={() => setMainSidebarOpen(true)}
              className="cursor-pointer hidden md:flex justify-center items-center w-full h-10  hover:bg-primarycl group rounded-md"
            >
              <SupervisorAccountIcon className="text-black dark:text-white text-2xl group-hover:text-white" />
            </div>
          )}

          {(mainsidebarOpen || sidebarOpen) && (
            <AccordionComp title='Website User' icon={<PersonIcon />} >
              <ul className="flex flex-col justify-center items-center gap-0 text-black dark:text-white w-full">
                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <PersonIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base dark:text-white font-semibold w-full"
                    href="/alluser"
                  >
                    All Users
                  </Link>
                </li>

              </ul>
            </AccordionComp>
          )}
        </div>
        <Link
          onClick={
            isScreenSmall &&
            (() => {
              setSidebarOpen(false);
              setMainSidebarOpen(false);
            })
          }
          href="/advertisementmanagement"
          className="hover:bg-primarycl group rounded-md h-10"
        >
          <div className="flex items-center gap-1 h-full px-1">
            <button
              onClick={() => setMainSidebarOpen(true)}
              className="w-10 h-10"
            >
              <AddCardIcon className="text-black dark:text-white group-hover:text-white text-2xl" />
            </button>
            {(mainsidebarOpen || sidebarOpen) && (
              <span className="text-black dark:text-white group-hover:text-white">
                <h1 className="text-base font-medium pt-1">
                  Advertisement
                </h1>
              </span>
            )}
          </div>
        </Link>
        <Link
          onClick={
            isScreenSmall &&
            (() => {
              setSidebarOpen(false);
              setMainSidebarOpen(false);
            })
          }
          href="/formmanagement"
          className="hover:bg-primarycl group rounded-md h-10"
        >
          <div className="flex items-center gap-1 h-full px-1">
            <button
              onClick={() => setMainSidebarOpen(true)}
              className="w-10 h-10"
            >
              <DynamicFormIcon className="text-black dark:text-white group-hover:text-white text-2xl" />
            </button>
            {(mainsidebarOpen || sidebarOpen) && (
              <span className="text-black dark:text-white  group-hover:text-white">
                <h1 className="text-base font-medium pt-1">Form Management</h1>
              </span>
            )}
          </div>
        </Link>
        <div className="w-full border-none">
          {(!mainsidebarOpen || sidebarOpen) && (
            <div
              onClick={() => setMainSidebarOpen(true)}
              className="cursor-pointer hidden md:flex justify-center items-center w-full h-10  hover:bg-primarycl rounded-md group:"
            >
              <ArticleIcon className="text-black dark:text-white text-2xl group-hover:text-white" />
            </div>
          )}

          {(mainsidebarOpen || sidebarOpen) && (
            <AccordionComp title='Page Settings' icon={<ArticleIcon />} >
              <ul className="flex flex-col justify-center items-center gap-0 text-black dark:text-white w-full">
                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <ArticleIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base dark:text-white font-medium w-full"
                    href="/mainpagesettings"
                  >
                    Page Settings
                  </Link>
                </li>

              </ul>
            </AccordionComp>
          )}
        </div>
        <div className="w-full border-none">
          {(!mainsidebarOpen || sidebarOpen) && (
            <div
              onClick={() => setMainSidebarOpen(true)}
              className="cursor-pointer hidden md:flex justify-center items-center w-full h-10 hover:bg-primarycl rounded-md group"
            >
              <SettingsIcon className="text-black dark:text-white text-2xl group-hover:text-white" />
            </div>
          )}

          {(mainsidebarOpen || sidebarOpen) && (
            <AccordionComp title='General Settings' icon={<SettingsIcon />} >
              <ul className="flex flex-col justify-center items-center gap-0 text-black dark:text-white w-full">
                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <LanguageIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base  dark:text-white font-medium w-full"
                    href="/sitesetting"
                  >
                    Site Settings
                  </Link>
                </li>

                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <WebIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base  dark:text-white font-medium w-full"
                    href="/thirdpartysettings"
                  >
                    Third Party
                  </Link>
                </li>

                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <DonutSmallIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base font-medium  dark:text-white w-full"
                    href="/smtpsettings"
                  >
                    SMTP Settings
                  </Link>
                </li>
                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <EmailIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base font-medium dark:text-white w-full"
                    href="/emailsettings"
                  >
                    Email Settings
                  </Link>
                </li>
                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-3 flex justify-center items-center gap-2 w-full h-10"
                >
                  <EmailIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base  dark:text-white font-medium w-full"
                    href="/emailtemplates"
                  >
                    Email Templates
                  </Link>
                </li>
                <li
                  onClick={
                    isScreenSmall &&
                    (() => {
                      setSidebarOpen(false);
                      setMainSidebarOpen(false);
                    })
                  }
                  className="dark:hover:bg-gray-500 text-black group hover:bg-gray-300 px-2 flex justify-center items-center gap-2 w-full h-10"
                >
                  <FlagIcon className="text-2xl text-black dark:text-white w-1/4" />
                  <Link
                    className="text-black text-base font-medium  dark:text-white w-full"
                    href="/countrysettings"
                  >
                    Country Settings
                  </Link>
                </li>
              </ul>
            </AccordionComp>

          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
