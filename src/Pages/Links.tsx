const Links = () => {
  return (
    <main className="flex flex-1 w-full">
      <div className="flex flex-col w-full space-y-10 sm:space-y-7.5">
        <div className="flex flex-col flex-wrap w-full sm:px-5">
          <div className="notranslate"></div>
          <div className="flex items-center mb-1.5 sm:mb-2.5"></div>
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex flex-wrap items-center">
              <span className="text-two-half text-white font-medium mr-2 sm:text-2xl whitespace-nowrap">
                Links
              </span>
              <a
                className="inline-flex px-2.5 !leading-30px bg-blue-100 notranslate hover:bg-main-blue-300 text-main-blue rounded text-xl w-max sm:text-base"
                href="/dashboard?user=1"
              >
                ID 1
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between xl:justify-start space-x-5 xl:flex-col sm:px-5 xl:space-x-0">
          <div className="flex flex-col p-7.5 sm:p-5 rounded bg-black-light w-full max-w-470px xl:max-w-full xl:mb-10 sm:mb-5">
            <div className="flex w-full justify-between items-center sm:flex-col sm:items-start sm:space-y-2.5">
              <div className="flex items-center">
                <span className="text-white-500 text-base">
                  New partners by{" "}
                </span>
                <div className="flex relative">
                  <div className="flex">
                    <div className="flex ml-1 items-center w-20 cursor-pointer">
                      <span className="text-white text-base">month</span>
                      <svg
                        className="ml-1 flex-shrink-0"
                        width="11"
                        height="7"
                        viewBox="0 0 8 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m1 1 3 3 3-3" stroke="#fff"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex relative">
                  <div className="flex">
                    <div className="inline-flex cursor-pointer px-2.5 bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded text-base !leading-8 w-max sm:text-base">
                      February
                    </div>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex">
                    <div className="inline-flex cursor-pointer px-2.5 bg-blue-100 text-main-blue rounded text-base !leading-8 w-max sm:text-base hover:bg-main-blue-300">
                      2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-shrink w-full h-full max-h-52 sm:h-40 mt-5 max-w-470px xl:max-w-700px lg:max-w-full sm:mt-5">
              <div className="flex flex-shrink w-full h-full max-h-52 sm:h-40 mt-8 max-w-470px xl:max-w-700px lg:max-w-full">
                <div
                  className="recharts-responsive-container"
                  style={{ width: "100%", height: "100%" }}
                  // width="700"
                  // height="0"
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden space-y-10 sm:space-y-5 xl:w-full">
            <div className="flex space-x-2 overflow-auto sm:space-x-5">
              <div className="xl:flex-grow sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                  <div className="flex items-center z-[10]">
                    <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                      Link clicks
                    </span>
                    <div className="relative group">
                      <button
                        className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none ml-1.5"
                        data-tip="true"
                        data-for="Link clicks"
                        // currentitem="false"
                      >
                        <span></span>
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.07 1.15c.04.04.09.06.15.06h.99c.073 0 .13-.02.17-.06a.547.547 0 0 0 .11-.19c.007-.06.023-.173.05-.34a1.4 1.4 0 0 1 .23-.52c.12-.167.287-.363.5-.59.293-.32.513-.603.66-.85.153-.247.23-.537.23-.87a1.61 1.61 0 0 0-.25-.85c-.16-.273-.42-.497-.78-.67-.353-.18-.807-.27-1.36-.27-.533 0-.997.1-1.39.3-.393.193-.697.45-.91.77-.207.32-.317.663-.33 1.03 0 .073.02.133.06.18.047.047.103.07.17.07h.87c.147 0 .243-.077.29-.23.133-.647.523-.97 1.17-.97.287 0 .53.08.73.24.207.16.297.377.27.65a.864.864 0 0 1-.19.46 5.091 5.091 0 0 1-.5.56c-.293.293-.523.56-.69.8-.167.24-.267.517-.3.83-.007.073-.01.18-.01.32 0 .053.02.1.06.14Zm-.05 2.25c.047.047.103.07.17.07h.99a.244.244 0 0 0 .18-.07.231.231 0 0 0 .07-.17v-.89a.218.218 0 0 0-.08-.17.231.231 0 0 0-.17-.07h-.99a.231.231 0 0 0-.17.07.231.231 0 0 0-.07.17v.89c0 .067.023.123.07.17Z"
                          ></path>
                        </svg>
                      </button>
                      <div
                        className="__react_component_tooltip t7c74018c-d5f3-42b1-b414-a4ff6c3f7121 place-bottom type-dark"
                        id="Link clicks"
                        data-id="tooltip"
                      >
                        {/* <!-- <style aria-hidden="true">
                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121 {
                            color: #fff;
                            background: #222;
                            border: 1px solid transparent;
                          }

                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-top {
                            margin-top: -10px;
                          }
                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-top::before {
                            border-top: 8px solid transparent;
                          }
                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-top::after {
                            border-left: 8px solid transparent;
                            border-right: 8px solid transparent;
                            bottom: -6px;
                            left: 50%;
                            margin-left: -8px;
                            border-top-color: #222;
                            border-top-style: solid;
                            border-top-width: 6px;
                          }

                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-bottom {
                            margin-top: 10px;
                          }
                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-bottom::before {
                            border-bottom: 8px solid transparent;
                          }
                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-bottom::after {
                            border-left: 8px solid transparent;
                            border-right: 8px solid transparent;
                            top: -6px;
                            left: 50%;
                            margin-left: -8px;
                            border-bottom-color: #222;
                            border-bottom-style: solid;
                            border-bottom-width: 6px;
                          }

                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-left {
                            margin-left: -10px;
                          }
                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-left::before {
                            border-left: 8px solid transparent;
                          }
                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-left::after {
                            border-top: 5px solid transparent;
                            border-bottom: 5px solid transparent;
                            right: -6px;
                            top: 50%;
                            margin-top: -4px;
                            border-left-color: #222;
                            border-left-style: solid;
                            border-left-width: 6px;
                          }

                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-right {
                            margin-left: 10px;
                          }
                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-right::before {
                            border-right: 8px solid transparent;
                          }
                          .t7c74018c-d5f3-42b1-b414-a4ff6c3f7121.place-right::after {
                            border-top: 5px solid transparent;
                            border-bottom: 5px solid transparent;
                            left: -6px;
                            top: 50%;
                            margin-top: -4px;
                            border-right-color: #222;
                            border-right-style: solid;
                            border-right-width: 6px;
                          }</style
                        > --> */}
                        {/* Total number of visitors by your link and last 24 hours
                        change */}
                      </div>
                    </div>
                  </div>
                  <span className="text-white text-2xl font-bold notranslate sm:text-xl !mt-1 !sm:mt-2.5 mt-5 sm:mt-2.5">
                    58471
                  </span>
                </div>
                <div className="flex p-2.5 w-full">
                  <div className="w-full bg-white-100 text-white rounded p-2 flex text-base items-center justify-between notranslate sm:text-sm">
                    <div className="flex items-center justify-start">
                      <svg
                        className="stroke-current mr-1.5"
                        width="8"
                        height="11"
                        stroke="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 10V1m0 0L1 4m3-3 3 3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      0
                    </div>
                    <img
                      src="/icons/activity_white.png"
                      className="ml-2.5 w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              <div className="xl:flex-grow sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                <img
                  className="h-[70%] sm:h-3/4 absolute bottom-0 right-0 z-[-11] sm:h-3/4 absolute bottom-0 right-0 z-[-11]"
                  src="/Partners.png"
                />
                <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                  <div className="flex items-center z-[10]">
                    <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                      Partners
                    </span>
                  </div>
                  <span className="text-white text-2xl font-bold notranslate sm:text-xl !mt-1 !sm:mt-2.5 mt-5 sm:mt-2.5">
                    22274
                  </span>
                </div>
                <div className="flex p-2.5 w-full">
                  <div className="w-full bg-green-100 text-green-light rounded p-2 flex text-base items-center justify-between notranslate sm:text-sm">
                    <div className="flex items-center justify-start">
                      <svg
                        className="stroke-current mr-1.5"
                        width="8"
                        height="11"
                        stroke="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 10V1m0 0L1 4m3-3 3 3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      1
                    </div>
                    <img
                      src="/icons/activity_green.png"
                      className="ml-2.5 w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              <div className="xl:flex-grow sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                <img
                  className="h-[70%] sm:h-3/4 absolute bottom-0 right-0 z-[-11] sm:h-3/4 absolute bottom-0 right-0 z-[-11]"
                  src="/Team.png"
                />
                <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                  <div className="flex items-center z-[10]">
                    <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                      Team
                    </span>
                  </div>
                  <span className="text-white text-2xl font-bold notranslate sm:text-xl !mt-1 !sm:mt-2.5 mt-5 sm:mt-2.5">
                    1667670
                  </span>
                </div>
                <div className="flex p-2.5 w-full">
                  <div className="w-full bg-green-100 text-green-light rounded p-2 flex text-base items-center justify-between notranslate sm:text-sm">
                    <div className="flex items-center justify-start">
                      <svg
                        className="stroke-current mr-1.5"
                        width="8"
                        height="11"
                        stroke="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 10V1m0 0L1 4m3-3 3 3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      447
                    </div>
                    <img
                      src="/icons/activity_green.png"
                      className="ml-2.5 w-6 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 overflow-hidden w-full relative justify-start items-end bg-black-light rounded desktop-infoblock-chart-base lg:!w-full lg:!max-w-full">
              <div className="flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                  <div className="flex items-center z-[10]">
                    <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                      Profits
                    </span>
                  </div>
                  <span className="text-white text-2xl font-bold notranslate sm:text-xl !mt-1 !sm:mt-2.5 mt-5 sm:mt-2.5">
                    1117001.6 BUSD
                  </span>
                </div>
                <div className="flex p-2.5 w-full">
                  <div className="w-full bg-green-100 text-green-light rounded p-2 flex text-base items-center justify-between notranslate sm:text-sm">
                    <div className="flex items-center justify-start">
                      <svg
                        className="stroke-current mr-1.5"
                        width="8"
                        height="11"
                        stroke="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 10V1m0 0L1 4m3-3 3 3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      10 BUSD
                    </div>
                    <img
                      src="/icons/activity_green.png"
                      className="ml-2.5 w-6 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:px-5">
          <div
            id="xQoreLink"
            className="flex flex-wrap sm:flex-col sm:right-5 w-full p-7 justify-between bg-dark-blue-100 rounded sm:p-5"
          >
            <div className="flex flex-col">
              <div className="flex items-center mb-2.5">
                <span className="text-base text-white-500">Personal link</span>
                <div className="relative group">
                  <button
                    className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none ml-1.5"
                    data-tip="true"
                    data-for="Personal link"
                    // currentitem="false"
                  >
                    <span></span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.07 1.15c.04.04.09.06.15.06h.99c.073 0 .13-.02.17-.06a.547.547 0 0 0 .11-.19c.007-.06.023-.173.05-.34a1.4 1.4 0 0 1 .23-.52c.12-.167.287-.363.5-.59.293-.32.513-.603.66-.85.153-.247.23-.537.23-.87a1.61 1.61 0 0 0-.25-.85c-.16-.273-.42-.497-.78-.67-.353-.18-.807-.27-1.36-.27-.533 0-.997.1-1.39.3-.393.193-.697.45-.91.77-.207.32-.317.663-.33 1.03 0 .073.02.133.06.18.047.047.103.07.17.07h.87c.147 0 .243-.077.29-.23.133-.647.523-.97 1.17-.97.287 0 .53.08.73.24.207.16.297.377.27.65a.864.864 0 0 1-.19.46 5.091 5.091 0 0 1-.5.56c-.293.293-.523.56-.69.8-.167.24-.267.517-.3.83-.007.073-.01.18-.01.32 0 .053.02.1.06.14Zm-.05 2.25c.047.047.103.07.17.07h.99a.244.244 0 0 0 .18-.07.231.231 0 0 0 .07-.17v-.89a.218.218 0 0 0-.08-.17.231.231 0 0 0-.17-.07h-.99a.231.231 0 0 0-.17.07.231.231 0 0 0-.07.17v.89c0 .067.023.123.07.17Z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className="__react_component_tooltip t1862f9e5-2e79-473d-89c3-76245e1a6e19 place-bottom type-dark"
                    id="Personal link"
                    data-id="tooltip"
                  >
                    {/* <!-- <style aria-hidden="true">
                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19 {
                        color: #fff;
                        background: #222;
                        border: 1px solid transparent;
                      }

                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-top {
                        margin-top: -10px;
                      }
                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-top::before {
                        border-top: 8px solid transparent;
                      }
                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-top::after {
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        bottom: -6px;
                        left: 50%;
                        margin-left: -8px;
                        border-top-color: #222;
                        border-top-style: solid;
                        border-top-width: 6px;
                      }

                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-bottom {
                        margin-top: 10px;
                      }
                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-bottom::before {
                        border-bottom: 8px solid transparent;
                      }
                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-bottom::after {
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        top: -6px;
                        left: 50%;
                        margin-left: -8px;
                        border-bottom-color: #222;
                        border-bottom-style: solid;
                        border-bottom-width: 6px;
                      }

                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-left {
                        margin-left: -10px;
                      }
                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-left::before {
                        border-left: 8px solid transparent;
                      }
                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-left::after {
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        right: -6px;
                        top: 50%;
                        margin-top: -4px;
                        border-left-color: #222;
                        border-left-style: solid;
                        border-left-width: 6px;
                      }

                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-right {
                        margin-left: 10px;
                      }
                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-right::before {
                        border-right: 8px solid transparent;
                      }
                      .t1862f9e5-2e79-473d-89c3-76245e1a6e19.place-right::after {
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        left: -6px;
                        top: 50%;
                        margin-top: -4px;
                        border-right-color: #222;
                        border-right-style: solid;
                        border-right-width: 6px;
                      }</style
                    > --> */}
                    {/* Invite your friends to Forsage BUSD and build your team by
                    sharing your link */}
                  </div>
                </div>
              </div>
              <span className="text-3xl font-bold text-main-blue sm:text-xl sm:mb-5">
                forsage.io/b/xqg1z8
              </span>
            </div>
            <div className="flex items-end space-x-7 sm:space-x-2.5 mt-2.5">
              <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-blue text-white hover:bg-hover-main-blue active:bg-active-main-blue rounded-mini sm:rounded sm:py-0 sm:px-2.5 sm:leading-30px">
                Copy
                <svg
                  className="w-5 h-5 ml-2.5 stroke-current text-white sm:hidden"
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
            </div>
          </div>
        </div>
        <div className="w-full sm:px-5">
          <div className="flex flex-wrap sm:flex-col sm:right-5 w-full p-7 justify-between bg-green-100 rounded sm:p-5">
            <div className="flex flex-col">
              <div className="flex items-center mb-2.5">
                <span className="text-base text-white-500">
                  Personal link{" "}
                  <span className="text-program-green">MaxQore</span>
                </span>
                <div className="relative group">
                  <button
                    className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none ml-1.5"
                    data-tip="true"
                    data-for="Personal link"
                    // currentitem="false"
                  >
                    <span></span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.07 1.15c.04.04.09.06.15.06h.99c.073 0 .13-.02.17-.06a.547.547 0 0 0 .11-.19c.007-.06.023-.173.05-.34a1.4 1.4 0 0 1 .23-.52c.12-.167.287-.363.5-.59.293-.32.513-.603.66-.85.153-.247.23-.537.23-.87a1.61 1.61 0 0 0-.25-.85c-.16-.273-.42-.497-.78-.67-.353-.18-.807-.27-1.36-.27-.533 0-.997.1-1.39.3-.393.193-.697.45-.91.77-.207.32-.317.663-.33 1.03 0 .073.02.133.06.18.047.047.103.07.17.07h.87c.147 0 .243-.077.29-.23.133-.647.523-.97 1.17-.97.287 0 .53.08.73.24.207.16.297.377.27.65a.864.864 0 0 1-.19.46 5.091 5.091 0 0 1-.5.56c-.293.293-.523.56-.69.8-.167.24-.267.517-.3.83-.007.073-.01.18-.01.32 0 .053.02.1.06.14Zm-.05 2.25c.047.047.103.07.17.07h.99a.244.244 0 0 0 .18-.07.231.231 0 0 0 .07-.17v-.89a.218.218 0 0 0-.08-.17.231.231 0 0 0-.17-.07h-.99a.231.231 0 0 0-.17.07.231.231 0 0 0-.07.17v.89c0 .067.023.123.07.17Z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className="__react_component_tooltip td8f7d021-c154-4891-bf19-a2f41f1d11b0 place-bottom type-dark"
                    id="Personal link"
                    data-id="tooltip"
                  >
                    {/* <!-- <style aria-hidden="true">
                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0 {
                        color: #fff;
                        background: #222;
                        border: 1px solid transparent;
                      }

                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-top {
                        margin-top: -10px;
                      }
                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-top::before {
                        border-top: 8px solid transparent;
                      }
                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-top::after {
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        bottom: -6px;
                        left: 50%;
                        margin-left: -8px;
                        border-top-color: #222;
                        border-top-style: solid;
                        border-top-width: 6px;
                      }

                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-bottom {
                        margin-top: 10px;
                      }
                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-bottom::before {
                        border-bottom: 8px solid transparent;
                      }
                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-bottom::after {
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        top: -6px;
                        left: 50%;
                        margin-left: -8px;
                        border-bottom-color: #222;
                        border-bottom-style: solid;
                        border-bottom-width: 6px;
                      }

                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-left {
                        margin-left: -10px;
                      }
                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-left::before {
                        border-left: 8px solid transparent;
                      }
                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-left::after {
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        right: -6px;
                        top: 50%;
                        margin-top: -4px;
                        border-left-color: #222;
                        border-left-style: solid;
                        border-left-width: 6px;
                      }

                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-right {
                        margin-left: 10px;
                      }
                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-right::before {
                        border-right: 8px solid transparent;
                      }
                      .td8f7d021-c154-4891-bf19-a2f41f1d11b0.place-right::after {
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        left: -6px;
                        top: 50%;
                        margin-top: -4px;
                        border-right-color: #222;
                        border-right-style: solid;
                        border-right-width: 6px;
                      }</style
                    > --> */}
                    {/* Invite your friends to Forsage BUSD and build your team by
                    sharing your link */}
                  </div>
                </div>
              </div>
              <span className="text-3xl font-bold text-program-green sm:text-xl sm:mb-5">
                forsage.io/mq/xqg1z8
              </span>
            </div>
            <div className="flex items-end space-x-7 sm:space-x-2.5 mt-2.5">
              <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-blue text-white hover:bg-hover-main-blue active:bg-active-main-blue rounded-mini sm:rounded sm:py-0 sm:px-2.5 sm:leading-30px">
                Copy
                <svg
                  className="w-5 h-5 ml-2.5 stroke-current text-white sm:hidden"
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
            </div>
          </div>
        </div>
        <div className="w-full sm:px-5">
          <div className="flex flex-wrap sm:flex-col sm:right-5 w-full p-7 justify-between bg-cyan-150 rounded sm:p-5">
            <div className="flex flex-col">
              <div className="flex items-center mb-2.5">
                <span className="text-base text-white-500">
                  Personal link <span className="text-cyan-500">xQore</span>
                </span>
                <div className="relative group">
                  <button
                    className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none ml-1.5"
                    data-tip="true"
                    data-for="Personal link"
                    // currentitem="false"
                  >
                    <span></span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.07 1.15c.04.04.09.06.15.06h.99c.073 0 .13-.02.17-.06a.547.547 0 0 0 .11-.19c.007-.06.023-.173.05-.34a1.4 1.4 0 0 1 .23-.52c.12-.167.287-.363.5-.59.293-.32.513-.603.66-.85.153-.247.23-.537.23-.87a1.61 1.61 0 0 0-.25-.85c-.16-.273-.42-.497-.78-.67-.353-.18-.807-.27-1.36-.27-.533 0-.997.1-1.39.3-.393.193-.697.45-.91.77-.207.32-.317.663-.33 1.03 0 .073.02.133.06.18.047.047.103.07.17.07h.87c.147 0 .243-.077.29-.23.133-.647.523-.97 1.17-.97.287 0 .53.08.73.24.207.16.297.377.27.65a.864.864 0 0 1-.19.46 5.091 5.091 0 0 1-.5.56c-.293.293-.523.56-.69.8-.167.24-.267.517-.3.83-.007.073-.01.18-.01.32 0 .053.02.1.06.14Zm-.05 2.25c.047.047.103.07.17.07h.99a.244.244 0 0 0 .18-.07.231.231 0 0 0 .07-.17v-.89a.218.218 0 0 0-.08-.17.231.231 0 0 0-.17-.07h-.99a.231.231 0 0 0-.17.07.231.231 0 0 0-.07.17v.89c0 .067.023.123.07.17Z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className="__react_component_tooltip t9ee9ae55-62ae-428c-9d2f-cee33f37b485 place-bottom type-dark"
                    id="Personal link"
                    data-id="tooltip"
                  >
                    {/* <!-- <style aria-hidden="true">
                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485 {
                        color: #fff;
                        background: #222;
                        border: 1px solid transparent;
                      }

                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-top {
                        margin-top: -10px;
                      }
                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-top::before {
                        border-top: 8px solid transparent;
                      }
                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-top::after {
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        bottom: -6px;
                        left: 50%;
                        margin-left: -8px;
                        border-top-color: #222;
                        border-top-style: solid;
                        border-top-width: 6px;
                      }

                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-bottom {
                        margin-top: 10px;
                      }
                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-bottom::before {
                        border-bottom: 8px solid transparent;
                      }
                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-bottom::after {
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        top: -6px;
                        left: 50%;
                        margin-left: -8px;
                        border-bottom-color: #222;
                        border-bottom-style: solid;
                        border-bottom-width: 6px;
                      }

                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-left {
                        margin-left: -10px;
                      }
                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-left::before {
                        border-left: 8px solid transparent;
                      }
                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-left::after {
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        right: -6px;
                        top: 50%;
                        margin-top: -4px;
                        border-left-color: #222;
                        border-left-style: solid;
                        border-left-width: 6px;
                      }

                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-right {
                        margin-left: 10px;
                      }
                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-right::before {
                        border-right: 8px solid transparent;
                      }
                      .t9ee9ae55-62ae-428c-9d2f-cee33f37b485.place-right::after {
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        left: -6px;
                        top: 50%;
                        margin-top: -4px;
                        border-right-color: #222;
                        border-right-style: solid;
                        border-right-width: 6px;
                      }</style
                    > --> */}
                    {/* Invite your friends to Forsage BUSD and build your team by */}
                    sharing your link
                  </div>
                </div>
              </div>
              <span className="text-3xl font-bold text-cyan-500 sm:text-xl sm:mb-5">
                forsage.io/q/xqg1z8
              </span>
            </div>
            <div className="flex items-end space-x-7 sm:space-x-2.5 mt-2.5">
              <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-blue text-white hover:bg-hover-main-blue active:bg-active-main-blue rounded-mini sm:rounded sm:py-0 sm:px-2.5 sm:leading-30px">
                Copy
                <svg
                  className="w-5 h-5 ml-2.5 stroke-current text-white sm:hidden"
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
            </div>
          </div>
        </div>
        <div className="w-full sm:px-5">
          <div className="w-full custom_invite_pdf_bg h-[200px] sm:h-full rounded-[20px] py-10 px-7.5 relative sm:py-2.5 overflow-hidden">
            <div className="flex flex-col justify-between h-full sm:items-center">
              <span className="text-white text-3xl font-semibold z-[1] sm:text-lg sm:font-medium">
                Create custom invite PDF
              </span>
              <img
                className="absolute right-0 top-[-80px] rounded-[20px] z-[0] sm:relative sm:top-0"
                src="/customInvitePdf/links/programs.png"
              />
              <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none w-full creat_PDF_button_bg w-[300px] py-3 z-[1] sm:w-full">
                <span className="">Create PDF</span>
              </button>
            </div>
            <img
              className="absolute top-[35px] left-[250px] sm:left-[-30px] sm:top-auto sm:bottom-[-100px]"
              src="/customInvitePdf/links/binance.png"
            />
            <img
              className="absolute top-[-95px] right-[-100px]"
              src="/customInvitePdf/links/binance.png"
            />
          </div>
        </div>
        <div className="infinite-scroll-component__outerdiv">
          <div
            className="infinite-scroll-component"
            style={{ height: "auto", overflow: "auto" }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "0px",
                  right: "0px",
                  top: "-24px",
                }}
              >
                <h3 style={{ textAlign: "center" }}>↓ Pull down to refresh</h3>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col px-5">
                <span className="text-white text-3xl mb-2.5 sm:text-2xl">
                  Custom links
                </span>
                <span className="text-white-500 text-base w-full sm:w-full sm:text-sm">
                  Promote different teams by using cutom links, Create and set
                  up custom links for your team. Include as many participants in
                  your link as you want and set up how the new registrations
                  will be distributed within the group.
                </span>
              </div>
              <div className="grid grid-cols-2 w-full gap-10 xl:grid-cols-1 lg:gap-5 mt-7.5">
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #1
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/c4pk5kx4c
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t9895ced3-b499-47bc-9c70-1db50a9a12c6 place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-top {
                                  margin-top: -10px;
                                }
                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-bottom {
                                  margin-top: 10px;
                                }
                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-left {
                                  margin-left: -10px;
                                }
                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-right {
                                  margin-left: 10px;
                                }
                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t9895ced3-b499-47bc-9c70-1db50a9a12c6.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          50
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip te07acdf5-7aad-4c08-91a1-69fcd25c9e89 place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-top {
                                  margin-top: -10px;
                                }
                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-bottom {
                                  margin-top: 10px;
                                }
                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-left {
                                  margin-left: -10px;
                                }
                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-right {
                                  margin-left: 10px;
                                }
                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .te07acdf5-7aad-4c08-91a1-69fcd25c9e89.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t30093072-de9b-476f-a125-de634911c673 place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t30093072-de9b-476f-a125-de634911c673 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t30093072-de9b-476f-a125-de634911c673.place-top {
                                  margin-top: -10px;
                                }
                                .t30093072-de9b-476f-a125-de634911c673.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t30093072-de9b-476f-a125-de634911c673.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t30093072-de9b-476f-a125-de634911c673.place-bottom {
                                  margin-top: 10px;
                                }
                                .t30093072-de9b-476f-a125-de634911c673.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t30093072-de9b-476f-a125-de634911c673.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t30093072-de9b-476f-a125-de634911c673.place-left {
                                  margin-left: -10px;
                                }
                                .t30093072-de9b-476f-a125-de634911c673.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t30093072-de9b-476f-a125-de634911c673.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t30093072-de9b-476f-a125-de634911c673.place-right {
                                  margin-left: 10px;
                                }
                                .t30093072-de9b-476f-a125-de634911c673.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t30093072-de9b-476f-a125-de634911c673.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 1
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #2
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/rf3pz38rs
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t2510c138-c247-48ea-b941-22cb9a374f17 place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t2510c138-c247-48ea-b941-22cb9a374f17 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-top {
                                  margin-top: -10px;
                                }
                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-bottom {
                                  margin-top: 10px;
                                }
                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-left {
                                  margin-left: -10px;
                                }
                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-right {
                                  margin-left: 10px;
                                }
                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t2510c138-c247-48ea-b941-22cb9a374f17.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          23
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tfaad49f5-3cb4-4707-bff7-91a6d0b80b47 place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-top {
                                  margin-top: -10px;
                                }
                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-bottom {
                                  margin-top: 10px;
                                }
                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-left {
                                  margin-left: -10px;
                                }
                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-right {
                                  margin-left: 10px;
                                }
                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tfaad49f5-3cb4-4707-bff7-91a6d0b80b47.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t09a25788-5070-498d-83e1-29db7f0381d1 place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t09a25788-5070-498d-83e1-29db7f0381d1 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-top {
                                  margin-top: -10px;
                                }
                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-bottom {
                                  margin-top: 10px;
                                }
                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-left {
                                  margin-left: -10px;
                                }
                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-right {
                                  margin-left: 10px;
                                }
                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t09a25788-5070-498d-83e1-29db7f0381d1.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 1
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #3
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/o6qht9rog
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9 place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-top {
                                  margin-top: -10px;
                                }
                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-bottom {
                                  margin-top: 10px;
                                }
                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-left {
                                  margin-left: -10px;
                                }
                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-right {
                                  margin-left: 10px;
                                }
                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tb3ed1fa1-1ddb-4e26-8759-5e8a782b47d9.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          4
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tfa58b91b-4cce-47cd-87e6-40e87f075038 place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tfa58b91b-4cce-47cd-87e6-40e87f075038 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-top {
                                  margin-top: -10px;
                                }
                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-bottom {
                                  margin-top: 10px;
                                }
                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-left {
                                  margin-left: -10px;
                                }
                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-right {
                                  margin-left: 10px;
                                }
                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tfa58b91b-4cce-47cd-87e6-40e87f075038.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tc23a65f2-faf8-4cf5-b61b-c1868cad6040 place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-top {
                                  margin-top: -10px;
                                }
                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-bottom {
                                  margin-top: 10px;
                                }
                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-left {
                                  margin-left: -10px;
                                }
                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-right {
                                  margin-left: 10px;
                                }
                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tc23a65f2-faf8-4cf5-b61b-c1868cad6040.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 1
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #4
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/bncb3ao3s
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t4a793110-ea4b-4315-97a8-f1aa71777922 place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t4a793110-ea4b-4315-97a8-f1aa71777922 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-top {
                                  margin-top: -10px;
                                }
                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-bottom {
                                  margin-top: 10px;
                                }
                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-left {
                                  margin-left: -10px;
                                }
                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-right {
                                  margin-left: 10px;
                                }
                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t4a793110-ea4b-4315-97a8-f1aa71777922.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          4
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t32075980-ecb3-4552-923b-0de0730cc9a1 place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t32075980-ecb3-4552-923b-0de0730cc9a1 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-top {
                                  margin-top: -10px;
                                }
                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-bottom {
                                  margin-top: 10px;
                                }
                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-left {
                                  margin-left: -10px;
                                }
                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-right {
                                  margin-left: 10px;
                                }
                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t32075980-ecb3-4552-923b-0de0730cc9a1.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t549dcd5f-ee47-43b2-9ced-848497c18f73 place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t549dcd5f-ee47-43b2-9ced-848497c18f73 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-top {
                                  margin-top: -10px;
                                }
                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-bottom {
                                  margin-top: 10px;
                                }
                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-left {
                                  margin-left: -10px;
                                }
                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-right {
                                  margin-left: 10px;
                                }
                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t549dcd5f-ee47-43b2-9ced-848497c18f73.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 1
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #5
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/v88gbq888
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t37e326a7-774a-4aad-9ff1-14660c9d5e3b place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-top {
                                  margin-top: -10px;
                                }
                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-bottom {
                                  margin-top: 10px;
                                }
                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-left {
                                  margin-left: -10px;
                                }
                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-right {
                                  margin-left: 10px;
                                }
                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t37e326a7-774a-4aad-9ff1-14660c9d5e3b.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          6
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tc90e672f-1c4f-4692-9d91-1e7a203588ab place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-top {
                                  margin-top: -10px;
                                }
                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-bottom {
                                  margin-top: 10px;
                                }
                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-left {
                                  margin-left: -10px;
                                }
                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-right {
                                  margin-left: 10px;
                                }
                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tc90e672f-1c4f-4692-9d91-1e7a203588ab.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t8c7a60ae-602f-4822-8641-029907beb6b2 place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t8c7a60ae-602f-4822-8641-029907beb6b2 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-top {
                                  margin-top: -10px;
                                }
                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-bottom {
                                  margin-top: 10px;
                                }
                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-left {
                                  margin-left: -10px;
                                }
                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-right {
                                  margin-left: 10px;
                                }
                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t8c7a60ae-602f-4822-8641-029907beb6b2.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 1
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #6
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/may8ax
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-top {
                                  margin-top: -10px;
                                }
                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-bottom {
                                  margin-top: 10px;
                                }
                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-left {
                                  margin-left: -10px;
                                }
                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-right {
                                  margin-left: 10px;
                                }
                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tbcd08bf2-e4b9-4c60-86be-42af9d6fc05c.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          24
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t3f94b640-61f4-49c1-9db2-454b4d615a38 place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t3f94b640-61f4-49c1-9db2-454b4d615a38 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-top {
                                  margin-top: -10px;
                                }
                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-bottom {
                                  margin-top: 10px;
                                }
                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-left {
                                  margin-left: -10px;
                                }
                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-right {
                                  margin-left: 10px;
                                }
                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t3f94b640-61f4-49c1-9db2-454b4d615a38.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t9d317e30-9427-40bc-b6c8-d5c902cb6239 place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-top {
                                  margin-top: -10px;
                                }
                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-bottom {
                                  margin-top: 10px;
                                }
                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-left {
                                  margin-left: -10px;
                                }
                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-right {
                                  margin-left: 10px;
                                }
                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t9d317e30-9427-40bc-b6c8-d5c902cb6239.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 91
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #7
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/p51fz9
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tdef6555e-bf7f-4183-a764-ef9bbefeeb80 place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-top {
                                  margin-top: -10px;
                                }
                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-bottom {
                                  margin-top: 10px;
                                }
                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-left {
                                  margin-left: -10px;
                                }
                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-right {
                                  margin-left: 10px;
                                }
                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tdef6555e-bf7f-4183-a764-ef9bbefeeb80.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          3
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9 place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-top {
                                  margin-top: -10px;
                                }
                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-bottom {
                                  margin-top: 10px;
                                }
                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-left {
                                  margin-left: -10px;
                                }
                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-right {
                                  margin-left: 10px;
                                }
                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t84d78bae-a49c-4bdd-86b7-5ec38f1e8ff9.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t5db8253f-fcb6-4552-8de7-5ae4eef175ad place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-top {
                                  margin-top: -10px;
                                }
                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-bottom {
                                  margin-top: 10px;
                                }
                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-left {
                                  margin-left: -10px;
                                }
                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-right {
                                  margin-left: 10px;
                                }
                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t5db8253f-fcb6-4552-8de7-5ae4eef175ad.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 105951
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #8
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/77htib
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t6b5b7f67-abea-43c9-8c64-160efa60dfc1 place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-top {
                                  margin-top: -10px;
                                }
                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-bottom {
                                  margin-top: 10px;
                                }
                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-left {
                                  margin-left: -10px;
                                }
                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-right {
                                  margin-left: 10px;
                                }
                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t6b5b7f67-abea-43c9-8c64-160efa60dfc1.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          10
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tf79edc8f-b942-4ffd-9743-4a22efb47c69 place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-top {
                                  margin-top: -10px;
                                }
                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-bottom {
                                  margin-top: 10px;
                                }
                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-left {
                                  margin-left: -10px;
                                }
                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-right {
                                  margin-left: 10px;
                                }
                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tf79edc8f-b942-4ffd-9743-4a22efb47c69.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t5651f3b9-3bd9-4a1e-8742-53ae059d2e04 place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-top {
                                  margin-top: -10px;
                                }
                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-bottom {
                                  margin-top: 10px;
                                }
                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-left {
                                  margin-left: -10px;
                                }
                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-right {
                                  margin-left: 10px;
                                }
                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t5651f3b9-3bd9-4a1e-8742-53ae059d2e04.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 125324
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #9
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/ke9bpo
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t759fe17a-a064-4268-bbed-c46d573a1450 place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t759fe17a-a064-4268-bbed-c46d573a1450 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-top {
                                  margin-top: -10px;
                                }
                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-bottom {
                                  margin-top: 10px;
                                }
                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-left {
                                  margin-left: -10px;
                                }
                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-right {
                                  margin-left: 10px;
                                }
                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t759fe17a-a064-4268-bbed-c46d573a1450.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          2
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t152528f1-6509-43b8-b080-8ad92ac4a434 place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t152528f1-6509-43b8-b080-8ad92ac4a434 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-top {
                                  margin-top: -10px;
                                }
                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-bottom {
                                  margin-top: 10px;
                                }
                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-left {
                                  margin-left: -10px;
                                }
                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-right {
                                  margin-left: 10px;
                                }
                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t152528f1-6509-43b8-b080-8ad92ac4a434.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip ta7645ce4-f29c-44ac-bb59-91b009dfaf72 place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-top {
                                  margin-top: -10px;
                                }
                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-bottom {
                                  margin-top: 10px;
                                }
                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-left {
                                  margin-left: -10px;
                                }
                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-right {
                                  margin-left: 10px;
                                }
                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .ta7645ce4-f29c-44ac-bb59-91b009dfaf72.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 210708
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:max-w-full max-w-1/2 flex flex-col bg-black-light rounded sm:rounded-none p-7.5 sm:p-5 relative">
                  <span className="text-white text-2xl mb-7 sm:mb-5 sm:text-xl">
                    Custom link #10
                  </span>
                  <div className="flex sm:flex-col w-full bg-blue-100 justify-between items-center rounded-lg py-2 px-2.5 mb-7 sm:p-5 sm:mb-5 sm:items-start">
                    <span className="text-main-blue text-base font-bold sm:mb-2.5">
                      forsage.io/br/hd5c1q
                    </span>
                    <div className="flex space-x-2.5">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue sm:leading-30px">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-auto space-x-3 w-full">
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Clicks
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip t0469ef7b-0fcd-4279-a852-707dd724c674 place-bottom type-dark"
                              id="Clicks"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .t0469ef7b-0fcd-4279-a852-707dd724c674 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-top {
                                  margin-top: -10px;
                                }
                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-bottom {
                                  margin-top: 10px;
                                }
                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-left {
                                  margin-left: -10px;
                                }
                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-right {
                                  margin-left: 10px;
                                }
                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .t0469ef7b-0fcd-4279-a852-707dd724c674.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          2
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Registrations
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tbad76e34-80b5-48b5-891e-9376ede29c2f place-bottom type-dark"
                              id="Registrations"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tbad76e34-80b5-48b5-891e-9376ede29c2f {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-top {
                                  margin-top: -10px;
                                }
                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-bottom {
                                  margin-top: 10px;
                                }
                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-left {
                                  margin-left: -10px;
                                }
                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-right {
                                  margin-left: 10px;
                                }
                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tbad76e34-80b5-48b5-891e-9376ede29c2f.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                    <div className="!bg-white-100 justify-between !w-130px !min-w-0 sm:!min-w-118px sm:flex-shrink-0 sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                      <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                        <div className="flex items-center z-[10]">
                          <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                            Revenue
                          </span>
                          <div className="relative group">
                            <div
                              className="__react_component_tooltip tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42 place-bottom type-dark"
                              id="Revenue"
                              data-id="tooltip"
                            >
                              {/* <!-- <style aria-hidden="true">
                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42 {
                                  color: #fff;
                                  background: #222;
                                  border: 1px solid transparent;
                                }

                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-top {
                                  margin-top: -10px;
                                }
                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-top::before {
                                  border-top: 8px solid transparent;
                                }
                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-top::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  bottom: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-top-color: #222;
                                  border-top-style: solid;
                                  border-top-width: 6px;
                                }

                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-bottom {
                                  margin-top: 10px;
                                }
                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-bottom::before {
                                  border-bottom: 8px solid transparent;
                                }
                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-bottom::after {
                                  border-left: 8px solid transparent;
                                  border-right: 8px solid transparent;
                                  top: -6px;
                                  left: 50%;
                                  margin-left: -8px;
                                  border-bottom-color: #222;
                                  border-bottom-style: solid;
                                  border-bottom-width: 6px;
                                }

                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-left {
                                  margin-left: -10px;
                                }
                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-left::before {
                                  border-left: 8px solid transparent;
                                }
                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-left::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  right: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-left-color: #222;
                                  border-left-style: solid;
                                  border-left-width: 6px;
                                }

                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-right {
                                  margin-left: 10px;
                                }
                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-right::before {
                                  border-right: 8px solid transparent;
                                }
                                .tfec44900-eaa5-4fd0-ad8f-09bb7cba5a42.place-right::after {
                                  border-top: 5px solid transparent;
                                  border-bottom: 5px solid transparent;
                                  left: -6px;
                                  top: 50%;
                                  margin-top: -4px;
                                  border-right-color: #222;
                                  border-right-style: solid;
                                  border-right-width: 6px;
                                }
                              </style> --> */}
                            </div>
                          </div>
                        </div>
                        <span className="text-white text-2xl font-bold notranslate sm:text-xl false false">
                          0
                        </span>
                      </div>
                      <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                        +0
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2.5 justify-between mt-7.5">
                    <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Owner
                      </span>
                      <div className="flex">
                        <span className="text-white-900 text-base sm:text-sm">
                          ID 211755
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end space-x-2.5 sm:space-x-0 sm:space-y-1">
                      <span className="block text-white-500 text-base sm:text-sm">
                        Participants
                      </span>
                      <div className="flex">
                        <span className="block text-white text-base sm:text-sm">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="h-20 w-20 mt-4 ml-auto mr-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              stroke="#fff"
            >
              <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx="22" cy="22" r="1">
                  <animate
                    attributeName="r"
                    begin="0s"
                    dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="strokeOpacity"
                    begin="0s"
                    dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
                <circle cx="22" cy="22" r="1">
                  <animate
                    attributeName="r"
                    begin="-0.9s"
                    dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="strokeOpacity"
                    begin="-0.9s"
                    dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Links;
