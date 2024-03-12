import { useReducer } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  CalculatorIcon,
  DashboardIcon,
  DropdownIcon,
  ForsageIcon,
  IdeasIcon,
  InfoIcon,
  InstructionsIcon,
  LinksIcon,
  MarathonIcon,
  NftsIcon,
  PartnersIcon,
  PromoIcon,
  SocialIcon,
  StatsIcon,
  TeamIcon,
  ToolsIcon,
} from "src/Assets/Icons";
import { Devider } from "./Sidebar";

import { LogoGreen } from "src/Assets/Svg";

export const Navbar = () => {
  const navigate = useNavigate();

  const [isNavSm, setIsNavSm] = useReducer((open) => !open, false);


  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-center w-full px-10 py-2.5 z-40 lg:p-0 lg:max-h-screen z-999999">
      {isNavSm ? (
        <NavbarSm {...{ close: setIsNavSm }} />
      ) : (
        <div className="flex justify-between items-center rounded-mini max-w-desktop-preview-bar w-full bg-main-blue px-5 py-2 shadow-preview-bar lg:pl-10 sm:pl-5 lg:py-2.5 lg:rounded-none lg:rounded-b-mini lg:pr-0 false">
          <div className="flex w-full overflow-hidden items-center justify-between space-x-2.5 lg:items-start">
            <div className="w-full flex justify-start items-center space-x-5 lg:flex-col lg:h-full lg:items-start lg:space-x-0 lg:space-y-7.5">
              <div className="flex items-center false lg:w-full lg:pr-10 sm:pr-5">
                <NavLink to="/">
                  <img src={LogoGreen} height={"10px"} width="40px" />
                </NavLink>
                <span className="text-base text-white whitespace-nowrap mr-5 notranslate lg:mr-0 false">
                  Preview ID
                  <span className="hidden lg:inline ml-1.5">1</span>
                </span>
                <div className="flex justify-between items-center space-x-2.5 lg:space-x-5 lg:w-full lg:hidden">
                  <input className="px-4 py-3 rounded-mini leading-5 bg-white-100 text-white text-base outline-none false" />
                  <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none bg-white-100 py-3 px-5 cursor-not-allowed">
                    Go
                  </button>
                </div>
              </div>
            </div>
            <NavLink
              to={"/login"}
              className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-black-500 whitespace-nowrap lg:hidden"
            >
              {"Connect Wallet"}
            </NavLink>
          </div>
          <div className="flex lg:justify-end lg:ml-auto lg:pr-10 sm:pr-5">
            <button
              className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 rounded-full lg:hidden w-10 h-10 !p-0 ml-5"
              // onClick={hideNavbar}
              onClick={() => navigate("/login")}
            >
              <svg
                className="w-6 h-6 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6 6 18M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="">
              <button
                className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 flex-col rounded-full w-10 h-10 !p-0 hidden lg:flex"
                onClick={setIsNavSm}
              >
                <span className="w-4 border-t border-white mb-2"></span>
                <span className="w-4 border-t border-white"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

const NavbarSm = ({ close }: { close: () => void }) => {
  const [isTeam, setIsTeam] = useReducer((open) => !open, false);
  const [isInfo, setIsInfo] = useReducer((open) => !open, false);

  return (
    <div className="flex justify-between items-center rounded-mini max-w-desktop-preview-bar w-full bg-main-blue px-5 py-2 shadow-preview-bar lg:pl-10 sm:pl-5 lg:py-2.5 lg:rounded-none lg:rounded-b-mini lg:pr-0 lg:flex-col lg:pb-5 lg:h-screen lg:max-h-screen lg:rounded-b-none lg:justify-start">
      <div className="flex w-full overflow-hidden items-center justify-between space-x-2.5 lg:items-start lg:order-2 lg:flex-col lg:pt-10 lg:items-start lg:space-y-7.5 lg:flex-1 lg:h-full">
        <div className="w-full flex justify-start items-center space-x-5 lg:flex-col lg:h-full lg:items-start lg:space-x-0 lg:space-y-7.5">
          <div className="flex items-center lg:flex-col lg:items-start lg:w-full lg:pr-10 sm:pr-5">
            <NavLink to="/">
              <ForsageIcon />
            </NavLink>

            <span className="text-base text-white whitespace-nowrap mr-5 notranslate lg:mr-0 lg:text-2xl lg:text-medium lg:mb-7.5">
              Preview ID<span className="hidden lg:inline ml-1.5">1</span>
            </span>
            <div className="flex justify-between items-center space-x-2.5 lg:space-x-5 lg:w-full lg:flex">
              <input
                className="px-4 py-3 rounded-mini leading-5 bg-white-100 text-white text-base outline-none lg:w-full lg:flex-1"
                value="1"
              />
              <button
                // disabled=""
                className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none bg-white-100 py-3 px-5 cursor-not-allowed lg:px-10"
              >
                Go
              </button>
            </div>
          </div>
          <div className="w-full pr-5 lg:pr-10 sm:pr-5 !mt-4">
            <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-black-500 whitespace-nowrap hidden lg:flex w-full">
              Exit preview mode
            </button>
          </div>
          <div className="overflow-auto w-full hidden lg:flex">
            <div className="flex flex-1 flex-col h-full w-full overflow-y-auto space-y-2.5 lg:space-y-0">
              <div className="flex flex-1 flex-col w-full h-full overflow-y-auto space-y-2.5 lg:space-y-0 lg:mb-5 sm:mb-[50px]">
                <NavLink to="/dashboard">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent bg-black-light lg:bg-transparent lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <DashboardIcon />

                      <span className="text-white-500 text-base ml-2.5 text-white-900">
                        Dashboard
                      </span>
                    </div>
                  </button>
                </NavLink>
                <div className=" bg-black-light lg:bg-transparent lg:!pb-0 min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
                  <div
                    className="flex p-2.5 lg:px-0 lg:py-5"
                    onClick={setIsTeam}
                  >
                    <TeamIcon />

                    <span className="text-[#8B8C8C] text-base ml-2.5 lg:text-white-500">
                      Team
                    </span>

                    <DropdownIcon show={isTeam} />
                  </div>

                  {isTeam && (
                    <>
                      <Devider />

                      <div className="flex flex-col p-2.5 lg:py-0 lg:pr-0">
                        <NavLink to="partners">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <PartnersIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Partners
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink to="links">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <LinksIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Links
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink to="stats">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <StatsIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Stats
                              </span>
                            </div>
                          </button>
                        </NavLink>
                      </div>
                    </>
                  )}
                </div>

                <NavLink to="MaxQoreMarathon">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <MarathonIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        Marathon
                      </span>
                    </div>
                  </button>
                </NavLink>

                <NavLink to="social">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <SocialIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        Social
                      </span>
                      <span className="absolute top-1 right-1.5 text-green text-sm lg:bg-green-200 lg:px-2.5 lg:py-1 lg:rounded lg:top-1/2 lg:-translate-y-1/2 lg:right-5">
                        New
                      </span>
                    </div>
                  </button>
                </NavLink>
                <NavLink to="nft">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <NftsIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        NFTs
                      </span>
                    </div>
                  </button>
                </NavLink>

                <div className=" bg-black-light lg:bg-transparent lg:!pb-0  min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
                  <div
                    className="flex p-2.5 lg:px-0 lg:py-5"
                    onClick={setIsInfo}
                  >
                    <InfoIcon />

                    <span className="text-[#8B8C8C] text-base ml-2.5 lg:text-white-500">
                      Information
                    </span>

                    <DropdownIcon show={isInfo} />
                  </div>

                  {isInfo && (
                    <>
                      <Devider />

                      <div className="flex flex-col p-2.5 lg:py-0 lg:pr-0">
                        <NavLink to="instructions">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <InstructionsIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Instruction
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink to="calculator">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <CalculatorIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Calculator
                              </span>

                              <span className="absolute top-1 right-1.5 text-green text-sm lg:bg-green-200 lg:px-2.5 lg:py-1 lg:rounded lg:top-1/2 lg:-translate-y-1/2 lg:right-5">
                                New
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink to="smartTools">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <ToolsIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Smart tools
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink to="ideas">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <IdeasIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Ideas
                              </span>
                            </div>
                          </button>
                        </NavLink>
                      </div>
                    </>
                  )}
                </div>

                <NavLink to="promo">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <PromoIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        Promo &amp; PDFs
                      </span>
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-black-500 whitespace-nowrap lg:hidden">
          Connect wallet
        </button>
      </div>
      <div className="flex lg:justify-end lg:ml-auto lg:pr-10 sm:pr-5">
        <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 rounded-full lg:hidden w-10 h-10 !p-0 ml-5">
          <svg
            className="w-6 h-6 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6 6 18M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="">
          <button
            className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 flex-col rounded-full w-10 h-10 !p-0 hidden lg:flex"
            onClick={close}
          >
            <div className="">
              <svg
                className="w-6 h-6 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6 6 18M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
