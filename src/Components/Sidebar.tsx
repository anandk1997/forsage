import { useReducer } from "react";
import { NavLink } from "react-router-dom";

import {
  CalculatorIcon,
  DropdownIcon,
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
  ToolsIcon,
  DashboardIcon,
  TeamIcon,
  DiscordIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "src/Assets/Icons";

export const Sidebar = () => {
  const [isTeam, setIsTeam] = useReducer((open) => !open, false);
  const [isInfo, setIsInfo] = useReducer((open) => !open, false);

  return (
    <div className="relative w-full max-w-desktop-left-bar flex-shrink-0 border-r border-white-100 lg:hidden">
      <div className="fixed top-0 max-w-desktop-left-bar w-full flex h-screen z-10 pt-4">
        <div className="flex flex-col min-h-screen w-full flex-shrink-0 pl-10 pr-5 pt-22 overflow-auto">
          <div className="flex-1 lg:pr-0 lg:pl-10 sm:pl-5">
            <div className="flex flex-1 flex-col h-full w-full overflow-y-auto space-y-2.5 lg:space-y-0">
              <div className="flex flex-1 flex-col w-full h-full overflow-y-auto space-y-2.5 lg:space-y-0 lg:mb-5 sm:mb-[50px]">
                <NavLink className=" " to="/">
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
                          to="/partners"
                        />

                        <NavigateButton
                          title="Links"
                          icon={LinksIcon}
                          to="/links"
                        />

                        <NavigateButton
                          title="Links"
                          icon={LinksIcon}
                          to="/links"
                        />

                        <NavigateButton
                          title="Stats"
                          icon={StatsIcon}
                          to="/stats"
                        />
                      </div>
                    </>
                  )}
                </div>

                <a className=" " href="/MaxQoreMarathon?user=1">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <MarathonIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        Marathon
                      </span>
                    </div>
                  </button>
                </a>

                <a className=" " href="/social?user=1">
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
                </a>

                <a className=" " href="/nft?user=1">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <NftsIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        NFTs
                      </span>
                    </div>
                  </button>
                </a>

                <div className=" bg-black-light lg:bg-transparent lg:!pb-0 min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
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
                        <NavigateButton
                          title="Instruction"
                          icon={InstructionsIcon}
                          to="/instruction"
                        />

                        <NavigateButton
                          title="Calculator"
                          icon={CalculatorIcon}
                          to="/calculator"
                          latest
                        />

                        <NavigateButton
                          title="Smart tools"
                          icon={ToolsIcon}
                          to="/smartTools"
                        />

                        <NavigateButton
                          title="Ideas"
                          icon={IdeasIcon}
                          to="/ideas"
                        />
                      </div>
                    </>
                  )}
                </div>
                <a className=" " href="/promo?user=1">
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <PromoIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        Promo &amp; PDFs
                      </span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="pt-5 pb-10 w-full flex flex-col items-center justify-center">
              <div className="flex space-x-4 w-full">
                <a
                  className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/forsage/"
                >
                  <DiscordIcon />
                </a>

                <a
                  className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/forsageio_official/"
                >
                  <TelegramIcon />
                </a>

                <a
                  className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/@FORSAGECommunity/"
                >
                  <YoutubeIcon />
                </a>

                <a
                  className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/forsageofficial/"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Devider = () => (
  <div className="border-solid border-[1px] border-[#363738] lg:hidden mx-2.5" />
);

const NavigateButton = ({
  title,
  icon: Icon,
  to,
  latest,
}: {
  title: string;
  icon: () => JSX.Element;
  to: string;
  latest?: boolean;
}) => {
  return (
    <NavLink className=" " to={to}>
      <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
        <div className="flex items-center text-left">
          <Icon />

          <span className="text-white-500 text-base ml-2.5 false">{title}</span>

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
