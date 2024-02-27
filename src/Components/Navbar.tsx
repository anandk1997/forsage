import { useReducer } from "react";
import { NavLink } from "react-router-dom";
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
import { useNavContext } from "src/Contexts/useNavContext";
import { Devider } from "./Sidebar";

export const Navbar = () => {
  const { hideNavbar } = useNavContext();

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
                  <svg
                    className="block mr-2.5"
                    width="45"
                    height="30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.68 5.851a.482.482 0 0 1 .615.296l.43 1.247s-1.852-.59-2.818-.777l1.773-.766Zm6.055 3.336c-.004 0-.195-.131-.297-.186l-3.111-1.586c-.965-.46-.752-.82-1.118-1.826a6.228 6.228 0 0 0-.549-1.127C36.884 3.62 31.836 3.817 31.354 0c0 0-1.884 1.236-2.227 3.5C9.227 1.98 0 12.96 0 12.96c3.706-1.476 7.705-2.176 11.704-2.362-7.603 5.851-9.997 14.666-9.997 14.666s6.16-5.982 15.419-9.318C14.702 19.37 13.298 23.963 13.872 30c0 0 4.763-18.177 27.361-13.78 0 0 .827-2.417 2.962-4.89.135-.152.211-.382.227-.645a1.735 1.735 0 0 0-.687-1.498Z"
                      fill="#fff"
                    ></path>
                  </svg>
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
            <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-black-500 whitespace-nowrap lg:hidden">
              Connect wallet
            </button>
          </div>
          <div className="flex lg:justify-end lg:ml-auto lg:pr-10 sm:pr-5">
            <button
              className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 rounded-full lg:hidden w-10 h-10 !p-0 ml-5"
              onClick={hideNavbar}
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
                <NavLink className="undefined undefined" to="/dashboard">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent bg-black-light lg:bg-transparent lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <DashboardIcon />

                      <span className="text-white-500 text-base ml-2.5 text-white-900">
                        Dashboard
                      </span>
                    </div>
                  </button>
                </NavLink>
                <div className="undefined bg-black-light lg:bg-transparent lg:!pb-0 min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
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
                        <NavLink className="undefined undefined" to="/partners">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <PartnersIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Partners
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink className="undefined undefined" to="/links">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <LinksIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Links
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink className="undefined undefined" to="/stats">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
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

                <NavLink to="/MaxQoreMarathon">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <MarathonIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        Marathon
                      </span>
                    </div>
                  </button>
                </NavLink>

                <NavLink className="undefined undefined" to="/social">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
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
                <NavLink className="undefined undefined" to="/nft">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <NftsIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        NFTs
                      </span>
                    </div>
                  </button>
                </NavLink>

                <div className="undefined bg-black-light lg:bg-transparent lg:!pb-0  min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
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
                        <NavLink to="/instruction">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <InstructionsIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Instruction
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink to="/calculator">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
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

                        <NavLink to="/smartTools">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <ToolsIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Smart tools
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink className="undefined undefined" to="/ideas">
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
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

                <NavLink className="undefined undefined" to="/promo">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
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
