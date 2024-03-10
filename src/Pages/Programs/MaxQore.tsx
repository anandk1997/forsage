import ProgramsLayout from "src/Layout/ProgramsLayout";

const MaxQore = () => {
  return (
    <ProgramsLayout>
      <div>
        <div className="h-[50px] relative">
          <div className="w-full h-[70px] flex justify-between absolute bottom-[-20px]">
            <button className="bg-black-light flex items-start justify-center w-full pt-3 rounded-t-[20px]">
              <span className="relative font-normal text-white text-xl">
                MaxQore
              </span>
            </button>
            <button className="bg-main flex items-start justify-center w-full pt-3 rounded-t-[20px]">
              <span className="relative font-light text-white text-[#3FDE7E] animate-pulse font-medium text-xl">
                Game
              </span>
            </button>
          </div>
        </div>
        <div
          className="flex overflow-hidden relative w-full flex-col bg-black-light rounded p-7.5 pb-5 sm:p-5 sm:pl-2.5 sm:pr-2.5 sm:rounded-none"
          //   style='
          //   background-image: url("/blurs/program/green-blur.png");
          //   background-repeat: round;
          //   background-size: cover;
          // '
        >
          <div className="flex z-10 flex-wrap -m-2 sm:-mx-px mb-7.5 sm:justify-around">
            <a href="/dashboard/maxQore/1?user=1&amp;cycle=23">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 1
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    0.044
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 130.112px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            14
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      470
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      22
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/2?user=1&amp;cycle=9">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 2
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    0.055
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 20.0606px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            25
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      243
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      8
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/3?user=1&amp;cycle=7">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 3
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    0.088
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 20.0606px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            25
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      182
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      6
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/4?user=1&amp;cycle=6">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 4
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    0.122
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 100.098px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            17
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      149
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      5
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/5?user=1&amp;cycle=5">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 5
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    0.177
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 110.103px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            16
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      120
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      4
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/6?user=1&amp;cycle=8">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 6
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    0.26
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 260.172px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            1
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      58
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      7
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/7?user=1&amp;cycle=5">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 7
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    0.38
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 270.177px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            0
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 200.37px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    2
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      41
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      4
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/8?user=1&amp;cycle=3">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 8
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    0.54
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 90.0932px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            18
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      26
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      2
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/9?user=1&amp;cycle=3">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 9
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    0.78
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 260.172px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            1
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 200.37px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    2
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      17
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      2
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/10?user=1&amp;cycle=2">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 10
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    1.15
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 30.0653px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            24
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      13
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/11?user=1&amp;cycle=1">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 11
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    1.7
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 20.0606px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            25
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      7
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/12?user=1&amp;cycle=1">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 12
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    2.4
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 120.107px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            15
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      4
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/13?user=1&amp;cycle=1">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 13
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    3.5
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 160.126px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            11
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0.0257611px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    9
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      4
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/14?user=1&amp;cycle=1">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 14
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    5.5
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 210.149px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            6
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 57.2668px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    7
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      4
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/maxQore/15?user=1&amp;cycle=1">
              <div className="relative overflow-hidden flex flex-col w-180px min-h-[190px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                <div className="flex w-full justify-between !mb-1.5">
                  <div className="flex space-x-1.5 items-center">
                    <span className="text-white-500 text-base sm:text-sm">
                      Lvl 15
                    </span>
                  </div>
                  <span className="flex items-center text-white text-base sm:text-sm">
                    <svg
                      className="w-3 h-3 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F3BA2F"
                      ></rect>
                      <path
                        d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                        fill="#fff"
                        stroke="#F0B90B"
                      ></path>
                    </svg>
                    7.5
                  </span>
                </div>
                <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                  <div className="relative ml-auto mr-auto w-[90px] h-[90px] mb-2.5">
                    <div data-test-id="CircularProgressbarWithChildren">
                      <div
                      //   style="position: relative; width: 100%; height: 100%"
                      >
                        <svg
                          className="CircularProgressbar"
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(93, 129, 255);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 0px;
                            //   "
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
      M 50,50
      m 0,-43
      a 43,43 0 1 1 0,86
      a 43,43 0 1 1 0,-86
    "
                            stroke-width="14"
                            fill-opacity="0"
                            //     style="
                            //     stroke: rgb(178, 191, 239);
                            //     stroke-dasharray: 270.177px, 270.177px;
                            //     stroke-dashoffset: 230.158px;
                            //   "
                          ></path>
                        </svg>
                        <div
                          data-test-id="CircularProgressbarWithChildren__children"
                          //   style="
                          //   position: absolute;
                          //   width: 100%;
                          //   height: 100%;
                          //   margin-top: -100%;
                          //   display: flex;
                          //   flex-direction: column;
                          //   justify-content: center;
                          //   align-items: center;
                          // "
                        >
                          <div className="absolute text-main-blue text-[10px] top-0">
                            4
                          </div>
                          <div className="w-[62px] h-[62px]">
                            <div data-test-id="CircularProgressbarWithChildren">
                              <div
                              //     style="
                              //     position: relative;
                              //     width: 100%;
                              //     height: 100%;
                              //   "
                              >
                                <svg
                                  className="CircularProgressbar"
                                  viewBox="0 0 100 100"
                                  data-test-id="CircularProgressbar"
                                >
                                  <path
                                    className="CircularProgressbar-trail"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(93, 129, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 0px;
                                    //   "
                                  ></path>
                                  <path
                                    className="CircularProgressbar-path"
                                    d="
      M 50,50
      m 0,-41
      a 41,41 0 1 1 0,82
      a 41,41 0 1 1 0,-82
    "
                                    stroke-width="18"
                                    fill-opacity="0"
                                    //     style="
                                    //     stroke: rgb(255, 255, 255);
                                    //     stroke-dasharray: 257.611px, 257.611px;
                                    //     stroke-dashoffset: 171.749px;
                                    //   "
                                  ></path>
                                </svg>
                                <div
                                  data-test-id="CircularProgressbarWithChildren__children"
                                  //   style="
                                  //   position: absolute;
                                  //   width: 100%;
                                  //   height: 100%;
                                  //   margin-top: -100%;
                                  //   display: flex;
                                  //   flex-direction: column;
                                  //   justify-content: center;
                                  //   align-items: center;
                                  // "
                                >
                                  <div className="absolute text-main-blue text-[9px] top-[-0.75px]">
                                    3
                                  </div>
                                  <div className="w-[36px] h-[36px]">
                                    <div data-test-id="CircularProgressbarWithChildren">
                                      <div
                                      //     style="
                                      //     position: relative;
                                      //     width: 100%;
                                      //     height: 100%;
                                      //   "
                                      >
                                        <svg
                                          className="CircularProgressbar"
                                          viewBox="0 0 100 100"
                                          data-test-id="CircularProgressbar"
                                        >
                                          <path
                                            className="CircularProgressbar-trail"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(93, 129, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0px;
                                            //   "
                                          ></path>
                                          <path
                                            className="CircularProgressbar-path"
                                            d="
      M 50,50
      m 0,-35
      a 35,35 0 1 1 0,70
      a 35,35 0 1 1 0,-70
    "
                                            stroke-width="30"
                                            fill-opacity="0"
                                            //     style="
                                            //     stroke: rgb(223, 230, 255);
                                            //     stroke-dasharray: 219.911px,
                                            //       219.911px;
                                            //     stroke-dashoffset: 0.0219911px;
                                            //   "
                                          ></path>
                                        </svg>
                                        <div
                                          data-test-id="CircularProgressbarWithChildren__children"
                                          //   style="
                                          //   position: absolute;
                                          //   width: 100%;
                                          //   height: 100%;
                                          //   margin-top: -100%;
                                          //   display: flex;
                                          //   flex-direction: column;
                                          //   justify-content: center;
                                          //   align-items: center;
                                          // "
                                        >
                                          <div className="absolute text-main-blue text-[7px] top-[-1.25px]">
                                            3
                                          </div>
                                          <div className="flex rounded-[50%] w-[20px] h-[20px] bg-sky-blue-2 text-[7px] items-center justify-center text-white">
                                            YOU
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                        stroke-width="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      1
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <svg
                      className="w-5 h-5 stroke-current text-white-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="text-sm text-white font-normal sm:text-sm">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="flex items-center flex-wrap z-10">
            <div className="flex items-center text-white-500 mb-5 mr-7.5 sm:items-start sm:mb-2.5 sm:pr-2.5 sm:mr-0 sm:w-1/2 sm:order-2">
              <div className="w-5 h-5 flex-shrink-0 mr-2.5 rounded-full bg-white"></div>
              <span className="text-base sm:text-sm">Direct partner</span>
            </div>
            <div className="flex items-center text-white-500 mb-5 mr-7.5 sm:items-start sm:mb-2.5 sm:pr-2.5 sm:mr-0 sm:w-1/2 sm:order-4">
              <div className="w-5 h-5 flex-shrink-0 mr-2.5 rounded-full bg-yellow"></div>
              <span className="text-base sm:text-sm">Spillover from above</span>
            </div>
            <div className="flex items-center text-white-500 mb-5 mr-7.5 sm:items-start sm:mb-2.5 sm:pr-2.5 sm:mr-0 sm:w-1/2 sm:order-6">
              <div className="w-5 h-5 flex-shrink-0 mr-2.5 rounded-full bg-orange"></div>
              <span className="text-base sm:text-sm">Spillover from below</span>
            </div>
            <div className="flex items-center text-white-500 mb-5 mr-7.5 sm:items-start sm:mb-2.5 sm:pr-2.5 sm:mr-0 sm:w-1/2 sm:order-7">
              <div className="w-5 h-5 flex-shrink-0 mr-2.5 rounded-full bg-light-blue"></div>
              <span className="text-base sm:text-sm">Gift</span>
            </div>
            <div className="flex items-center text-white-500 mb-5 mr-7.5 sm:items-start sm:mb-2.5 sm:pr-2.5 sm:mr-0 sm:w-1/2 sm:order-1">
              <svg
                className="w-5 h-5 mr-2.5 stroke-current text-white"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                  stroke-width="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="text-base sm:text-sm">Partners on level</span>
            </div>
            <div className="flex items-center text-white-500 mb-5 mr-7.5 sm:items-start sm:mb-2.5 sm:pr-2.5 sm:mr-0 sm:w-1/2 sm:order-3">
              <svg
                className="w-5 h-5 mr-2.5 stroke-current text-white"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#2CFF4E"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                ></path>
              </svg>
              <span className="text-base sm:text-sm">Level Cycle</span>
            </div>
            <div className="flex items-center text-white-500 mb-5 mr-7.5 sm:items-start sm:mb-2.5 sm:pr-2.5 sm:mr-0 sm:w-1/2 sm:order-5">
              <svg
                className="w-5 h-5 mr-2.5 stroke-current text-white"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 6.667 6.667 10M10 6.667v6.666M13.333 10 10 6.667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="text-base sm:text-sm">Send to upline</span>
            </div>
            <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue font-normal mb-5 mr-7.5 sm:items-start sm:mb-2.5 sm:pr-2.5 sm:mr-0 sm:items-center py-1 !order-8 sm:!order-8">
              <svg
                className="w-5 h-5 mr-1.5"
                viewBox="0 0 20 20"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.07 1.15c.04.04.09.06.15.06h.99c.073 0 .13-.02.17-.06a.547.547 0 0 0 .11-.19c.007-.06.023-.173.05-.34a1.4 1.4 0 0 1 .23-.52c.12-.167.287-.363.5-.59.293-.32.513-.603.66-.85.153-.247.23-.537.23-.87a1.61 1.61 0 0 0-.25-.85c-.16-.273-.42-.497-.78-.67-.353-.18-.807-.27-1.36-.27-.533 0-.997.1-1.39.3-.393.193-.697.45-.91.77-.207.32-.317.663-.33 1.03 0 .073.02.133.06.18.047.047.103.07.17.07h.87c.147 0 .243-.077.29-.23.133-.647.523-.97 1.17-.97.287 0 .53.08.73.24.207.16.297.377.27.65a.864.864 0 0 1-.19.46 5.091 5.091 0 0 1-.5.56c-.293.293-.523.56-.69.8-.167.24-.267.517-.3.83-.007.073-.01.18-.01.32 0 .053.02.1.06.14Zm-.05 2.25c.047.047.103.07.17.07h.99a.244.244 0 0 0 .18-.07.231.231 0 0 0 .07-.17v-.89a.218.218 0 0 0-.08-.17.231.231 0 0 0-.17-.07h-.99a.231.231 0 0 0-.17.07.231.231 0 0 0-.07.17v.89c0 .067.023.123.07.17Z"
                ></path>
              </svg>
              <span className="text-base sm:text-sm"> Marketing legend </span>
            </button>
          </div>
        </div>
      </div>
    </ProgramsLayout>
  );
};

export default MaxQore;
