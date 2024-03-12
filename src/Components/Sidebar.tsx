import { useReducer } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  DropdownIcon,
  InfoIcon,
  InstructionsIcon,
  PartnersIcon,
  DashboardIcon,
  TeamIcon,
} from "src/Assets/Icons";

import { useNavContext } from "src/Contexts/useNavContext";
import { cm } from "src/Hooks/useClassesMerge";
import { Social } from "./Social";

export const Sidebar = () => {
  const [isTeam, setIsTeam] = useReducer((open) => !open, false);
  const [isInfo, setIsInfo] = useReducer((open) => !open, false);

  const { isNavBar } = useNavContext();

  const { pathname } = useLocation();

  return (
    <div className="relative w-full max-w-desktop-left-bar flex-shrink-0 border-r border-white-100 lg:hidden">
      <div className="fixed top-0 max-w-desktop-left-bar w-full flex h-screen z-10 pt-4">
        <div
          className={cm(
            "flex flex-col min-h-screen w-full flex-shrink-0 pl-10 pr-5 overflow-auto",
            isNavBar ? "pt-22" : "",
          )}
        >
          <div className="flex-1 lg:pr-0 lg:pl-10 sm:pl-5">
            <div className="flex flex-1 flex-col h-full w-full overflow-y-auto space-y-2.5 lg:space-y-0">
              <div className="flex flex-1 flex-col w-full h-full overflow-y-auto space-y-2.5 lg:space-y-0 lg:mb-5 sm:mb-[50px]">
                <NavLink to="/dashboard">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent bg-black-light lg:bg-transparent lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <DashboardIcon />

                      <span
                        className={cm(
                          "text-white-500 text-base ml-2.5",
                          pathname === "/dashboard"
                            ? "text-white-900"
                            : "text-white-500",
                        )}
                      >
                        Dashboard
                      </span>
                    </div>
                  </button>
                </NavLink>

                <div className=" bg-black-light lg:bg-transparent lg:!pb-0 min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
                  <div
                    className="flex p-2.5 lg:px-0 lg:py-5 cursor-pointer"
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
                        <NavigateButton
                          title="Partners"
                          icon={PartnersIcon}
                          to="partners"
                          path={pathname}
                        />

                        {/* <NavigateButton
                          title="Links"
                          icon={LinksIcon}
                          to="links"
                          path={pathname}
                        />

                        <NavigateButton
                          title="Stats"
                          icon={StatsIcon}
                          to="stats"
                          path={pathname}
                        /> */}
                      </div>
                    </>
                  )}
                </div>

                <>
                  {/* <NavLink to="MaxQoreMarathon">
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
                </NavLink> */}
                </>

                <div className=" bg-black-light lg:bg-transparent lg:!pb-0 min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
                  <div
                    className="flex p-2.5 lg:px-0 lg:py-5"
                    onClick={setIsInfo}
                  >
                    <InfoIcon />

                    <span className="text-[#8B8C8C] text-base ml-2.5 lg:text-white-500">
                      Statement
                    </span>

                    <DropdownIcon show={isInfo} />
                  </div>

                  {isInfo && (
                    <>
                      <Devider />

                      <div className="flex flex-col p-2.5 lg:py-0 lg:pr-0">
                        <NavigateButton
                          title="Referal Income"
                          icon={InstructionsIcon}
                          to="referal-income"
                          path={pathname}
                        />

                        <NavigateButton
                          title="Level Income"
                          icon={InstructionsIcon}
                          to="level-income"
                          path={pathname}
                        />

                        <NavigateButton
                          title="Non-Working Income"
                          icon={InstructionsIcon}
                          to="non-working-income"
                          path={pathname}
                        />

                        <NavigateButton
                          title="Royalty Income"
                          icon={InstructionsIcon}
                          to="royalty-income"
                          path={pathname}
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* <NavLink to="promo">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <PromoIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        Promo &amp; PDFs
                      </span>
                    </div>
                  </button>
                </NavLink> */}
              </div>
            </div>
          </div>

          <Social />
        </div>
      </div>
    </div>
  );
};

export const Devider = () => (
  <div className="border-solid border-[1px] border-[#363738] lg:hidden mx-2.5" />
);

const NavigateButton = ({
  title,
  icon: Icon,
  to,
  path,
  latest,
}: {
  title: string;
  icon: () => JSX.Element;
  to: string;
  path: string;
  latest?: boolean;
}) => {
  console.log(path === to);
  return (
    <NavLink to={to}>
      <button
        className={cm(
          "relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent",
        )}
      >
        <div className="flex items-center text-left">
          <Icon />

          <span
            className={cm(
              "text-white-500 text-base ml-2.5 false",
              path.includes(to) ? "text-white-900" : "",
            )}
          >
            {title}
          </span>

          {latest && (
            <span className="absolute top-1 right-1.5 text-green text-sm lg:bg-green-200 lg:px-2.5 lg:py-1 lg:rounded lg:top-1/2 lg:-translate-y-1/2 lg:right-5">
              New
            </span>
          )}
        </div>
      </button>
    </NavLink>
  );
};
