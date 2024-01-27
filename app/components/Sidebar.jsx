'use client';
import React, { useEffect, useState } from "react";
import Logo from "../../public/next.svg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;
  const [mainsidebarOpen, setMainSidebarOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(width < 600);
  console.log(isScreenSmall);
  
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(width <= 600);
    };

    if (isScreenSmall) {
      setMainSidebarOpen(false);
    } else {
      setMainSidebarOpen(true);
    }
    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isScreenSmall, setSidebarOpen,width]);
  return (
    <div className="relative">
      <div className="absolute top-16 md:top-0 md:relative max-h-full z-20 md:z-40">
        <div
          className={`${mainsidebarOpen || sidebarOpen
              ? "active w-80 md:w-[360px]"
              : "hidden md:block w-20"
            } dark:bg-darkbg dark:text-white bg-white overflow-auto shadow-lg relative`}
        >
          <div
            className={`py-4 px-4 fixed h-screen top-16 md:top-0 bg-white flex flex-col ${mainsidebarOpen || sidebarOpen ? "gap-0" : "gap-2"
              }  `}
          >
            <div className="w-full h-24 hidden md:flex justify-between items-center">
              <div className="w-full">
                <Image
                  className={`${!mainsidebarOpen ? "hidden" : "w-20 h-20 object-fit"
                    }`}
                  src={Logo}
                  alt=""
                />
              </div>
              {mainsidebarOpen || sidebarOpen ? (
                <div className="w-full flex justify-end items-center">
                  <button
                    onClick={() => setMainSidebarOpen(false)}
                    className="w-12 h-12 rounded-md bg-gray-300  dark:bg-white dark:hover:bg-primarycl hover:bg-primarycl group group-hover:text-white"
                  >
                    <DoubleArrowIcon className="text-4xl text-black group-hover:text-white  dark:text-black dark:hover:text-white rotate-180" />
                  </button>
                </div>
              ) : (
                <div className="h-full w-full flex justify-center items-center">
                  <button
                    onClick={() => setMainSidebarOpen(true)}
                    className="w-12 h-12 rounded-md bg-gray-300 dark:hover:bg-primarycl hover:bg-primarycl group group-hover:text-white  dark:bg-white"
                  >
                    <DoubleArrowIcon className="text-4xl text-black group-hover:text-white  dark:text-black dark:hover:text-white" />
                  </button>
                </div>
              )}
            </div>
            <Link
              onClick={isScreenSmall && (() => setMainSidebarOpen(false))}
              href="/dashboard"
              className="text-3xl hover:bg-primarycl group rounded-md h-12"
            >
              <div className="flex items-center gap-2 h-full px-1">
                <button
                  onClick={() => setMainSidebarOpen(true)}
                  className="w-12 h-12"
                >
                  <DashboardIcon className="text-black dark:text-white group-hover:text-white text-4xl" />
                </button>
                {(mainsidebarOpen || sidebarOpen) && (
                  <span className="text-black dark:text-white  group-hover:text-white">
                    <h1 className="text-lg font-medium">Dashboard</h1>
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
                  className="cursor-pointer hidden md:flex justify-center items-center w-full h-12"
                >
                  <AdminPanelSettingsIcon className="text-black dark:text-white text-4xl" />
                </div>
              )}

              {(mainsidebarOpen || sidebarOpen) && (
                <div className="!border-none !shadow-none rounded-md">
                  <Accordion className="bg-transparent dark:bg-darkbg !shadow-none !border-none !rounded-md">
                    <AccordionSummary
                      className=" text-black group dark:bg-darkbg dark:text-white hover:bg-primarycl !rounded-md dark:!rounded-md  dark:hover:bg-primarycl"
                      expandIcon={
                        <ExpandMoreIcon
                          className={`
                        text-black dark:text-white  group-hover:text-white text-4xl`}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center gap-4 text-black dark:text-white group-hover:text-white">
                        <AdminPanelSettingsIcon className="text-black dark:text-white text-4xl group-hover:text-white" />
                        <h1 className="text-lg font-medium text-black dark:text-white group-hover:text-white">
                          Admin User
                        </h1>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-white dark:bg-darkbg dark:text-white flex rounded-md w-full dark:!rounded-none dark:!border-none">
                      <ul className="flex flex-col justify-center items-center gap-3 text-black dark:text-white w-full">
                        <li
                          onClick={
                            isScreenSmall &&
                            (() => {
                              setSidebarOpen(false);
                              setMainSidebarOpen(false);
                            })
                          }
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <PersonAddIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base dark:text-white font-semibold w-full"
                            href="/adminuser/newadmin"
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
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <SupervisorAccountIcon className="text-4xl text-black dark:text-white w-1/4 " />
                          <Link
                            className="text-black text-base font-semibold dark:text-white w-full"
                            href="/adminuser/admin"
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
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <AddModeratorIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base font-semibold w-full dark:text-white"
                            href="/adminuser/mainadminuser"
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
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <PersonAddIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base font-semibold w-full dark:text-white"
                            href="/adminuser/coadmin"
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
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <CategoryIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base font-semibold w-full dark:text-white"
                            href="/adminuser/addcategory"
                          >
                            Add Category
                          </Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
            <div className="w-full border-none">
              {(!mainsidebarOpen || sidebarOpen) && (
                <div
                  onClick={() => setMainSidebarOpen(true)}
                  className="cursor-pointer hidden md:flex justify-center items-center w-full h-12"
                >
                  <SupervisorAccountIcon className="text-black dark:text-white text-4xl" />
                </div>
              )}

              {(mainsidebarOpen || sidebarOpen) && (
                <div className="!border-none !shadow-none rounded-md">
                  <Accordion className="bg-transparent dark:bg-darkbg !shadow-none !border-none !rounded-md">
                    <AccordionSummary
                      className=" text-black group  dark:bg-darkbg dark:text-white hover:bg-primarycl !rounded-md dark:!rounded-md dark:hover:bg-primarycl "
                      expandIcon={
                        <ExpandMoreIcon
                          className={`
                        text-black dark:text-white group-hover:text-white text-4xl`}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center gap-4 text-black dark:text-white group-hover:text-white">
                        <PersonIcon className="text-black dark:text-white text-4xl group-hover:text-white" />
                        <h1 className="text-lg font-medium text-black dark:text-white group-hover:text-white">
                          Website User
                        </h1>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-white  dark:bg-darkbg dark:text-white flex rounded-md w-full dark:!rounded-none">
                      <ul className="flex flex-col justify-center items-center gap-3 text-black dark:text-white w-full">
                        <li
                          onClick={
                            isScreenSmall &&
                            (() => {
                              setSidebarOpen(false);
                              setMainSidebarOpen(false);
                            })
                          }
                          className="dark:hover:bg-gray-500 text-black dark:bg-darkbg group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <PersonAddIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black  dark:text-white text-base font-semibold w-full"
                            href="/websiteuser/alluser"
                          >
                            All User
                          </Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
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
              className="text-3xl hover:bg-primarycl group rounded-md h-12"
            >
              <div className="flex items-center gap-2 h-full px-1">
                <button
                  onClick={() => setMainSidebarOpen(true)}
                  className="w-12 h-12"
                >
                  <AddCardIcon className="text-black dark:text-white group-hover:text-white text-4xl" />
                </button>
                {(mainsidebarOpen || sidebarOpen) && (
                  <span className="text-black dark:text-white  group-hover:text-white">
                    <h1 className="text-lg font-medium">
                      Advertisement Management
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
              className="text-3xl hover:bg-primarycl group rounded-md h-12"
            >
              <div className="flex items-center gap-2 h-full px-1">
                <button
                  onClick={() => setMainSidebarOpen(true)}
                  className="w-12 h-12"
                >
                  <DynamicFormIcon className="text-black dark:text-white group-hover:text-white text-4xl" />
                </button>
                {(mainsidebarOpen || sidebarOpen) && (
                  <span className="text-black dark:text-white  group-hover:text-white">
                    <h1 className="text-lg font-medium">Form Management</h1>
                  </span>
                )}
              </div>
            </Link>
            <div className="w-full border-none">
              {(!mainsidebarOpen || sidebarOpen) && (
                <div
                  onClick={() => setMainSidebarOpen(true)}
                  className="cursor-pointer  hidden md:flex justify-center items-center w-full h-12 "
                >
                  <ArticleIcon className="text-black dark:text-white text-4xl" />
                </div>
              )}

              {(mainsidebarOpen || sidebarOpen) && (
                <div className="!border-none !shadow-none rounded-md">
                  <Accordion className="bg-transparent dark:bg-darkbg !shadow-none !border-none !rounded-md">
                    <AccordionSummary
                      className=" text-black group  dark:bg-darkbg dark:text-white hover:bg-primarycl !rounded-md dark:!rounded-md dark:hover:bg-primarycl "
                      expandIcon={
                        <ExpandMoreIcon
                          className={`
                        text-black dark:text-white group-hover:text-white text-4xl`}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center gap-4 text-black dark:text-white group-hover:text-white">
                        <ArticleIcon className="text-black dark:text-white text-4xl group-hover:text-white" />
                        <h1 className="text-lg font-medium text-black dark:text-white group-hover:text-white">
                          Page Setting
                        </h1>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-white dark:bg-darkbg dark:text-white flex rounded-md w-full dark:!rounded-none">
                      <ul className="flex flex-col justify-center items-center gap-3 text-black dark:text-white w-full">
                        <li
                          onClick={
                            isScreenSmall &&
                            (() => {
                              setSidebarOpen(false);
                              setMainSidebarOpen(false);
                            })
                          }
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <ArticleIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base  dark:text-white font-semibold w-full"
                            href="/pagesettings/mainpagesettings"
                          >
                            Page Setting
                          </Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
            <div className="w-full border-none">
              {(!mainsidebarOpen || sidebarOpen) && (
                <div
                  onClick={() => setMainSidebarOpen(true)}
                  className="cursor-pointer hidden md:flex justify-center items-center w-full h-12"
                >
                  <SettingsIcon className="text-black dark:text-white text-4xl" />
                </div>
              )}

              {(mainsidebarOpen || sidebarOpen) && (
                <div className="!border-none !shadow-none rounded-md">
                  <Accordion className="bg-transparent dark:bg-darkbg !shadow-none !border-none !rounded-md">
                    <AccordionSummary
                      className=" text-black group  dark:bg-darkbg dark:text-white hover:bg-primarycl !rounded-md dark:!rounded-md dark:hover:bg-primarycl "
                      expandIcon={
                        <ExpandMoreIcon
                          className={`
                        text-black dark:text-white group-hover:text-white text-4xl`}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center gap-4 text-black dark:text-white group-hover:text-white">
                        <SettingsIcon className="text-black dark:text-white text-4xl group-hover:text-white" />
                        <h1 className="text-lg font-medium text-black  dark:text-white group-hover:text-white">
                          General Settings
                        </h1>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-white dark:bg-darkbg dark:text-white flex rounded-md w-full dark:!rounded-none">
                      <ul className="flex flex-col justify-center items-center gap-3 text-black dark:text-white w-full">
                        <li
                          onClick={
                            isScreenSmall &&
                            (() => {
                              setSidebarOpen(false);
                              setMainSidebarOpen(false);
                            })
                          }
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <LanguageIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base  dark:text-white font-semibold w-full"
                            href="/generalsettings/sitesetting"
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
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <WebIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base  dark:text-white font-semibold w-full"
                            href="/generalsettings/thirdpartysettings"
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
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <DonutSmallIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base font-semibold  dark:text-white w-full"
                            href="/generalsettings/smtpsettings"
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
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <EmailIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base font-semibold  dark:text-white w-full"
                            href="/generalsettings/emailsettings"
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
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <EmailIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base  dark:text-white font-semibold w-full"
                            href="/generalsettings/emailtemplates"
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
                          className="dark:hover:bg-gray-500 text-black  group hover:bg-gray-300 px-4 py-2 flex justify-center items-center gap-4 w-full rounded-md"
                        >
                          <FlagIcon className="text-4xl text-black dark:text-white w-1/4" />
                          <Link
                            className="text-black text-base font-semibold  dark:text-white w-full"
                            href="/generalsettings/countrysettings"
                          >
                            Country Settings
                          </Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
