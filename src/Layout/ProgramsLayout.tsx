import { ReactNode, useReducer } from "react";

const ProgramsLayout = ({ children }: { children: ReactNode }) => {
  const [isFs, setIsFs] = useReducer((open) => !open, false);
  return (
    <main className="flex flex-col space-y-10 sm:space-y-7.5">
      <div className="flex flex-wrap justify-between notranslate">
        {!isFs && (
          <div className="fixed flex items-center justify-center z-[1111] left-[35%] lg:left-[20%] sm:left-0 sm:px-3 sm:w-full transition-all duration-1000 top-3">
            <div className="bg-main-bg w-full h-[70px] rounded flex items-center p-2 space-x-5 !border-[1px] !border-solid !border-white-100 justify-between">
              <a
                className="bg-[#3EF6A2] flex items-center justify-center h-full rounded-[15px] px-4 space-x-2 sm:px-2 sm:justify-between"
                target="_blank"
                href="https://school.forsage.io/course2"
              >
                <svg
                  width="45"
                  height="30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.68 5.851a.482.482 0 0 1 .615.296l.43 1.247s-1.852-.59-2.818-.777l1.773-.766Zm6.055 3.336c-.004 0-.195-.131-.297-.186l-3.111-1.586c-.965-.46-.752-.82-1.118-1.826a6.228 6.228 0 0 0-.549-1.127C36.884 3.62 31.836 3.817 31.354 0c0 0-1.884 1.236-2.227 3.5C9.227 1.98 0 12.96 0 12.96c3.706-1.476 7.705-2.176 11.704-2.362-7.603 5.851-9.997 14.666-9.997 14.666s6.16-5.982 15.419-9.318C14.702 19.37 13.298 23.963 13.872 30c0 0 4.763-18.177 27.361-13.78 0 0 .827-2.417 2.962-4.89.135-.152.211-.382.227-.645a1.735 1.735 0 0 0-.687-1.498Z"
                    fill="#18191A"
                  ></path>
                </svg>
                <span className="text-lg font-montserrat font-bold sm:text-sm">
                  Forsage <br className="hidden sm:flex" />
                  School
                </span>
              </a>
              <div className="">
                <span className="text-white text-sm leading-none flex flex-col space-y-1 sm:hidden">
                  <span>Go to Forsage School and learn more</span>
                  <span>about how programs work</span>{" "}
                </span>
                <span className="text-white text-xs leading-none flex flex-col space-y-2.5 hidden sm:flex">
                  <span className="whitespace-nowrap">Learn more about</span>
                  <span className="whitespace-nowrap"> how programs work</span>
                </span>
              </div>

              <button onClick={setIsFs}>
                <div className="bg-white-100 w-[40px] h-[40px] sm:w-[20px] sm:h-[20px] rounded-full flex items-center justify-center mx-4">
                  <svg
                    className="h-[25px] w-[25px] sm:h-[15px] sm:w-[15px]"
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
        )}

        <div className="flex flex-col flex-wrap w-full sm:px-5">
          <div className="notranslate"></div>
          <div className="flex items-center mb-1.5 sm:mb-2.5">
            <div className="flex">
              <a
                className="mr-1.5 text text-white-300 sm:text-sm"
                href="/dashboard?user=1"
              >
                <span className="hover:text-white-500">ID 1</span> /
              </a>
            </div>
            <span className="text text-white whitespace-nowrap sm:text-sm">
              Forsage x3
            </span>
            <span className="text text-white whitespace-nowrap ml-1.5 sm:text-sm">
              (<span className="inline sm:hidden">12 out of 12 levels</span>
              <span className="hidden sm:inline">12/12</span>)
            </span>
          </div>
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex flex-wrap items-center">
              <span className="text-two-half text-white font-medium mr-2 sm:text-2xl sm:max-w-[170px]">
                Forsage x3
              </span>
            </div>
            <div className="flex flex-col items-end">
              <div className="self-end text-two-half text-white font-bold sm:text-2xl whitespace-nowrap">
                369245 BUSD
              </div>
            </div>
          </div>
        </div>
      </div>

      {children}

      <div className="sm:px-5">
        <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none banners-notifybot-wrapper relative w-full flex sm:flex-col justify-between sm:items-center bg-[#0B0316] rounded px-7.5 pb-3 sm:pb-0 pt-5 min-h-[143px] sm:min-h-[359px]">
          <svg
            className="absolute top-2.5 right-2.5"
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.52 5.48a.5.5 0 0 1 0 .707L6.187 14.52a.5.5 0 0 1-.707-.707l8.333-8.333a.5.5 0 0 1 .707 0Z"
              fill="#fff"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.167 5.833a.5.5 0 0 1 .5-.5h7.5a.5.5 0 0 1 .5.5v7.5a.5.5 0 1 1-1 0v-7h-7a.5.5 0 0 1-.5-.5Z"
              fill="#fff"
            ></path>
          </svg>
          <div className="flex flex-col items-start space-y-1.5">
            <span className="text-left block text-3xl font-medium text-white">
              Official <span className="text-yellow">Notify Bot</span>
              <br className="sm:hidden" />
              for busd.forsage.io users
            </span>
            <span className="text-white font-light">
              Here you can get notifications about all the events in your
              account.
            </span>
          </div>
          <img
            className="absolute bottom-0 right-[10%] sm:right-auto sm:relative h-full max-h-[110%] sm:max-h-[170px]"
            src="/banners/notifybot/robot.png"
            alt=""
          />
        </button>
      </div>
      <div className="sm:rounded-none flex flex-1 flex-col w-full bg-black-light rounded overflow-hidden h-full min-h-90 sm:max-h-3/4">
        <div className="overflow-auto max-h-[80vh] sm:max-h-[75vh]">
          <table className="min-w-max w-full table-auto border-white-100">
            <thead>
              <tr className="text-white-500 text-xs border-b border-white-100">
                <th className="p-4 text-left font-normal sm:p-3">Type</th>
                <th className="p-4 text-left font-normal sm:p-3">Date</th>
                <th className="p-4 text-left font-normal notranslate sm:p-3">
                  ID
                </th>
                <th className="p-4 text-left font-normal sm:p-3">Level</th>
                <th className="p-4 text-left font-normal sm:p-3">Wallet</th>
                <th className="p-4 text-right font-normal notranslate sm:p-3">
                  BUSD
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light align-baseline">
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex w-full">
                    <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                      <svg
                        className="text-green-light h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                        ></path>
                      </svg>
                      <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">27.02.2024 04:46</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <a
                    className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                    href="/dashboard?user=1668230"
                  >
                    ID 1668230
                  </a>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm">1</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex text-white text-sm space-x-5 notranslate sm:space-x-3">
                    <span>0x5B3aA...9bD46</span>
                    <button>
                      <svg
                        className="h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </button>
                    <a
                      target="_blank"
                      href="https://bscscan.com/tx/0x8edc8cc1c6ffe458f01e905543ea1b1ad47d901f8736029a70ead7f2528f97d1"
                    >
                      <svg
                        className="w-18px h-18px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </td>
                <td
                  className="p-4 text-left whitespace-nowrap sm:p-3"
                  //   colspan="2"
                >
                  <div className="text-green-light text-right text-sm">
                    recycle
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex w-full">
                    <div className="relative flex items-center justify-center rounded-full bg-white-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                      <svg
                        className="text-white h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 8.667A3.333 3.333 0 1 0 10 2a3.333 3.333 0 0 0 0 6.667Z"
                          fill="#fff"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17"
                          fill="#fff"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17H5Z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="absolute top-0 right-0 text-mini leading-3 text-white"></span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">26.02.2024 12:21</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <a
                    className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                    href="/dashboard?user=1019574"
                  >
                    ID 1019574
                  </a>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm">1</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex text-white text-sm space-x-5 notranslate sm:space-x-3">
                    <span>0xCd0DD...8cecC</span>
                    <button>
                      <svg
                        className="h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </button>
                    <a
                      target="_blank"
                      href="https://bscscan.com/tx/0x7e6bbac2ab55f829f2d6969437984e79c0d970008ca7ffb901a7bac785c6ea63"
                    >
                      <svg
                        className="w-18px h-18px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm text-right notranslate">
                    5 BUSD
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex w-full">
                    <div className="relative flex items-center justify-center rounded-full bg-white-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                      <svg
                        className="text-white h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 8.667A3.333 3.333 0 1 0 10 2a3.333 3.333 0 0 0 0 6.667Z"
                          fill="#fff"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17"
                          fill="#fff"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17H5Z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="absolute top-0 right-0 text-mini leading-3 text-white"></span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">26.02.2024 10:30</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <a
                    className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                    href="/dashboard?user=1667933"
                  >
                    ID 1667933
                  </a>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm">1</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex text-white text-sm space-x-5 notranslate sm:space-x-3">
                    <span>0xA57a2...Ac058</span>
                    <button>
                      <svg
                        className="h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </button>
                    <a
                      target="_blank"
                      href="https://bscscan.com/tx/0xdc0ac20c2ba3ad160044654c2469f3c8758943330901f4d91afc9c0547fb87ef"
                    >
                      <svg
                        className="w-18px h-18px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm text-right notranslate">
                    5 BUSD
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex w-full">
                    <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                      <svg
                        className="text-green-light h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                        ></path>
                      </svg>
                      <span className="absolute top-0 right-0 text-mini leading-3 text-green-light">
                        8680
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">25.02.2024 14:04</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <a
                    className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                    href="/dashboard?user=1667618"
                  >
                    ID 1667618
                  </a>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm">1</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex text-white text-sm space-x-5 notranslate sm:space-x-3">
                    <span>0xfc471...8D732</span>
                    <button>
                      <svg
                        className="h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </button>
                    <a
                      target="_blank"
                      href="https://bscscan.com/tx/0xdd31f6ee8233539f0dd36f4a8e0608dfdc65561645249ee6cacab0a5b5be65e3"
                    >
                      <svg
                        className="w-18px h-18px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </td>
                <td
                  className="p-4 text-left whitespace-nowrap sm:p-3"
                  //   colspan="2"
                >
                  <div className="text-green-light text-right text-sm">
                    recycle
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex w-full">
                    <div className="relative flex items-center justify-center rounded-full bg-white-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                      <svg
                        className="text-white h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 8.667A3.333 3.333 0 1 0 10 2a3.333 3.333 0 0 0 0 6.667Z"
                          fill="#fff"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17"
                          fill="#fff"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17H5Z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="absolute top-0 right-0 text-mini leading-3 text-white"></span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">25.02.2024 07:28</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <a
                    className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                    href="/dashboard?user=1631464"
                  >
                    ID 1631464
                  </a>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm">1</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex text-white text-sm space-x-5 notranslate sm:space-x-3">
                    <span>0x944F2...c0fBE</span>
                    <button>
                      <svg
                        className="h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </button>
                    <a
                      target="_blank"
                      href="https://bscscan.com/tx/0xadec990a875c3175cc95c7437b0094923b8ee12b21cdfeab61964b1b64d703fd"
                    >
                      <svg
                        className="w-18px h-18px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm text-right notranslate">
                    5 BUSD
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex w-full">
                    <div className="relative flex items-center justify-center rounded-full bg-white-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                      <svg
                        className="text-white h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 8.667A3.333 3.333 0 1 0 10 2a3.333 3.333 0 0 0 0 6.667Z"
                          fill="#fff"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17"
                          fill="#fff"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17H5Z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="absolute top-0 right-0 text-mini leading-3 text-white"></span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">23.02.2024 15:49</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <a
                    className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                    href="/dashboard?user=785260"
                  >
                    ID 785260
                  </a>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm">1</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex text-white text-sm space-x-5 notranslate sm:space-x-3">
                    <span>0x0E4eF...E2F06</span>
                    <button>
                      <svg
                        className="h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </button>
                    <a
                      target="_blank"
                      href="https://bscscan.com/tx/0x187b5eb66390893233943db2e761cce0dbd830466f37e26fdf3f9aed026e5933"
                    >
                      <svg
                        className="w-18px h-18px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm text-right notranslate">
                    5 BUSD
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex w-full">
                    <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                      <svg
                        className="text-green-light h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                        ></path>
                      </svg>
                      <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">23.02.2024 14:22</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <a
                    className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                    href="/dashboard?user=1666666"
                  >
                    ID 1666666
                  </a>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm">1</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex text-white text-sm space-x-5 notranslate sm:space-x-3">
                    <span>0xf250D...29917</span>
                    <button>
                      <svg
                        className="h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </button>
                    <a
                      target="_blank"
                      href="https://bscscan.com/tx/0x7510538803b443d6146d44cc33f5117a5fc39bafec5c8038fa454c54ba506da0"
                    >
                      <svg
                        className="w-18px h-18px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </td>
                <td
                  className="p-4 text-left whitespace-nowrap sm:p-3"
                  //   colspan="2"
                >
                  <div className="text-green-light text-right text-sm">
                    recycle
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex w-full">
                    <div className="relative flex items-center justify-center rounded-full bg-light-blue-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                      <svg
                        className="fill-current text-light-blue h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.833 10v5.833a1.666 1.666 0 0 1-1.666 1.667H5.833a1.667 1.667 0 0 1-1.666-1.667V10"
                          fill-opacity=".5"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.167 9.5a.5.5 0 0 1 .5.5v5.833A1.167 1.167 0 0 0 5.833 17h8.334a1.166 1.166 0 0 0 1.166-1.167V10a.5.5 0 1 1 1 0v5.833A2.167 2.167 0 0 1 14.167 18H5.833a2.167 2.167 0 0 1-2.166-2.167V10a.5.5 0 0 1 .5-.5Z"
                        ></path>
                        <path d="M16.667 6.667H3.333A.833.833 0 0 0 2.5 7.5v1.667c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833V7.5a.833.833 0 0 0-.833-.833Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.333 7.167A.333.333 0 0 0 3 7.5v1.667c0 .184.15.333.333.333h13.334c.184 0 .333-.15.333-.333V7.5a.333.333 0 0 0-.333-.333H3.333ZM2 7.5c0-.736.597-1.333 1.333-1.333h13.334c.736 0 1.333.597 1.333 1.333v1.667c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 9.167V7.5Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.139 3.954C7.541 3.29 6.884 2.989 6.259 3H6.25a1.583 1.583 0 0 0 0 3.167.5.5 0 0 1 0 1A2.583 2.583 0 0 1 6.246 2c.98-.016 1.897.464 2.636 1.285.444.493.82 1.103 1.118 1.795.298-.692.674-1.302 1.118-1.795.739-.821 1.655-1.3 2.636-1.285a2.583 2.583 0 0 1-.004 5.167.5.5 0 0 1 0-1 1.583 1.583 0 0 0 0-3.167h-.009c-.625-.011-1.282.29-1.88.954-.6.667-1.088 1.647-1.375 2.83a.5.5 0 0 1-.972 0c-.287-1.183-.775-2.163-1.375-2.83Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 6.167a.5.5 0 0 1 .5.5V17.5a.5.5 0 0 1-1 0V6.667a.5.5 0 0 1 .5-.5Z"
                        ></path>
                      </svg>
                      <span className="absolute top-0 right-0 text-mini leading-3 fill-current text-light-blue"></span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">23.02.2024 10:27</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <a
                    className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                    href="/dashboard?user=1666501"
                  >
                    ID 1666501
                  </a>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm">1</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex text-white text-sm space-x-5 notranslate sm:space-x-3">
                    <span>0x15A44...B96fe</span>
                    <button>
                      <svg
                        className="h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </button>
                    <a
                      target="_blank"
                      href="https://bscscan.com/tx/0xc992525dd84ca1cfbee4059404039e9e65c5e3536105cbfd21db45d6a0fce0a5"
                    >
                      <svg
                        className="w-18px h-18px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm text-right notranslate">
                    5 BUSD
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex w-full">
                    <div className="relative flex items-center justify-center rounded-full bg-white-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                      <svg
                        className="text-white h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 8.667A3.333 3.333 0 1 0 10 2a3.333 3.333 0 0 0 0 6.667Z"
                          fill="#fff"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17"
                          fill="#fff"
                        ></path>
                        <path
                          d="M5 17v-1.667A3.333 3.333 0 0 1 8.333 12h3.334A3.333 3.333 0 0 1 15 15.333V17H5Z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="absolute top-0 right-0 text-mini leading-3 text-white"></span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">22.02.2024 22:40</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <a
                    className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                    href="/dashboard?user=1666362"
                  >
                    ID 1666362
                  </a>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm">1</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="flex text-white text-sm space-x-5 notranslate sm:space-x-3">
                    <span>0xEb264...F8939</span>
                    <button>
                      <svg
                        className="h-18px w-18px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </button>
                    <a
                      target="_blank"
                      href="https://bscscan.com/tx/0xe7b52b73e04cc00c43de484a9bb3dab94b42aaea3623c9ab2c676e42d90c19b3"
                    >
                      <svg
                        className="w-18px h-18px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white text-sm text-right notranslate">
                    5 BUSD
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex p-4 sm:p-2.5">
          <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 w-full rounded-mini flex justify-center items-center">
            <svg
              className="mr-2.5"
              width="21"
              height="20"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 15.833c3.333 0 6.11-1.944 8.333-5.833-2.222-3.89-5-5.833-8.333-5.833S4.39 6.11 2.167 10c2.222 3.889 5 5.833 8.333 5.833ZM12.167 10a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0Z"
              ></path>
            </svg>
            <span> See more </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProgramsLayout;
