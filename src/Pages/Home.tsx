import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-0 flex flex-col items-center w-full z-50 bg-darkGray">
        {/* <div className="flex justify-center border-b border-white-200 w-full bg-black">
              <div className="flex justify-center items-center py-3 space-x-5 max-w-desktop-full w-full px-5 text-[12px] leading-[14px] overflow-auto sm:max-w-auto">
                <svg
                  className="w-[18px] h-[18px]"
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
            </div> */}
        <div className="flex justify-between items-center max-w-desktop-full w-full py-5 px-5">
          <div className="flex items-center space-x-20 lg:space-x-5">
            <NavLink to="/">
              <img src="https://thecryptoglobal.io/stake/uploads/logo-new.png" />
            </NavLink>
            <div className="flex flex-start space-x-10 lg:space-x-5 font-medium sm:hidden">
              <a
                className="hover:text-white"
                target="_blank"
                href="https://support.cryptoglobal.io/"
              >
                Documentation
              </a>
            </div>
          </div>
          {/* <div className="relative group min-w-[175px] lg:min-w-max sm:hidden">
              <div className="flex justify-between items-center cursor-pointer p-4 group-hover:text-white">
                <div className="flex items-center space-x-2">
                  <img
                    src="flags/en.svg"
                    className="w-5 h-5 lg:mr-2.5"
                    alt=""
                  />
                  <span className="lg:hidden">English</span>
                </div>
                <svg
                  className="fill-current w-2.5 transition all easy-out group-hover:rotate-180"
                  viewBox="0 0 8 4"
                  fill="#8B8C8C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0H0l4 4 4-4Z"></path>
                </svg>
              </div>
              <ul className="w-full absolute bg-lightGray rounded-[15px] hidden group-hover:flex flex-col overflow-hidden drop-shadow-lg top-[50px]">
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/en.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">English</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/de.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">German</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/es.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">Spanish</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/ru.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">Русский</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/fr.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">French</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/es.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">Spanish</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/it.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">Italian</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/az.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">AZƏRBAYCAN</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/ar.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">العربية</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/he.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">עִבְרִית</span>
                </li>
              </ul>
            </div> */}
          <div className="flex justify-end space-x-10 lg:space-x-0 sm:hidden">
            <NavLink
              to="/login"
              className="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] !px-4 !py-2.5 rounded-[40px] bg-transparent hover:bg-purple font-bold"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] !px-4 !py-2.5 rounded-[40px] bg-transparent hover:bg-purple font-bold"
            >
              Registration
            </NavLink>
          </div>
          <button className="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] !w-10 !h-10 !p-0 !max-w-none rounded-full hidden relative sm:flex flex-col justify-center">
            <span className="absolute top-3.5 left-1/2 -translate-x-1/2 w-5 border-b-2 border-white transition-all duration-150 ease-in-out false"></span>
            <span className="absolute top-6 left-1/2 -translate-x-1/2 w-5 border-b-2 border-white transition-all duration-150 ease-in-out false"></span>
          </button>
        </div>
      </div>
      <div className="relative mb-32 flex items-center flex-col h-[calc(100vh-150px)] first-overflow-wrapper">
        <img
          src="img/logo/maxqore/left_ellipse.png"
          className="z-0 absolute top-1/2 left-0 -translate-y-1/2 sm:-left-1/3 sm:top-2/3 max-w-[50vw] sm:max-w-[90vw]"
          alt=""
        />
        <img
          src="img/logo/maxqore/right_ellipse.png"
          className="z-0 absolute top-1/2 right-0 -translate-y-1/2 sm:-right-1/3 sm:top-1/3 max-w-[50vw] sm:max-w-[90vw]"
          alt=""
        />
        <div className="w-full flex flex-col items-center justify-center flex-1 max-w-desktop-full w-full pt-5 sm:pt-0 sm:px-5">
          <div className="flex flex-col items-center">
            <img
              src="https://thecryptoglobal.io/stake/uploads/firstImage.png"
              className="z-0 max-w-[457px] sm:max-w-[300px] w-full mb-[-25px] sm:mb-[-15px]"
            />
            <div className="relative flex flex-col items-center">
              <img
                src="https://thecryptoglobal.io/stake/uploads/secondImage.png"
                className="sm:hidden z-10 max-h-[200px] h-full sm:h-auto"
                alt=""
              />
              <img
                src="https://thecryptoglobal.io/stake/uploads/secondImage.png"
                className="hidden sm:block z-10 max-h-[250px] h-full sm:h-auto"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:space-y-2.5 sm:mt-10">
            <NavLink
              className="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] bg-purple hover:bg-lightPurple active:bg-lightPurple z-10 hidden sm:flex sm:max-w-full sm:w-full"
              to="/login"
            >
              signIn
            </NavLink>

            <NavLink
              to="/register"
              className="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] bg-purple hover:bg-lightPurple active:bg-lightPurple mt-[50px] z-10 sm:max-w-full sm:w-full"
            >
              Registration
              <svg
                className="h-5 w-5 ml-2.5 sm:h-4 sm:w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  clipPath="url(#a)"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="rotate(90 12 12)"
                      d="M0 0h24v24H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="pb-40 relative flex justify-center w-full px-5 sm:pb-8">
        <img
          src="img/planet.png"
          className="absolute right-0 -top-44 z-0 sm:hidden"
          alt="cryptoglobalPlanet"
        />
        <div className="w-full flex flex-col max-w-desktop-full space-y-28">
          <div className="text-white text-[24px] leading-[40px] max-w-525px text-2xl z-10 sm:text-[20px] sm:leading-[30px]">
            decentralizedNetworkPlatform
            <span className="text-gradient mx-1.5">bringsPeopleTogether</span>
            fromAllTheWorld
            <span className="text-gradient mx-1.5">opensUpEndless</span>
            newEconomicFinancial systems
          </div>
          <div className="relative flex w-full z-10">
            <img
              src="img/planet_mobile.png"
              className="absolute -top-24 left-1/2 -translate-x-1/2 z-0 hidden sm:block"
              alt="cryptoglobalPlanet"
            />
            <div className="flex w-full lg:hidden">
              <a
                className="w-full flex justify-center items-center px-2.5 sm:px-0"
                target="_blank"
                href="https://support.cryptoglobal.io/"
              ></a>
              <div className="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                <a
                  className="w-full flex justify-center items-center px-2.5 sm:px-0"
                  target="_blank"
                  href="https://support.cryptoglobal.io/"
                >
                  <div className="flex flex-col items-start text-left flex-1 space-y-2.5">
                    <span className="text-white text-2xl">Documentation</span>
                    <span>participantLearningPlatform</span>
                  </div>{" "}
                </a>
                <a className="flex items-center text-white" href="#">
                  <span>startLearning</span>
                  <svg
                    className="ml-1 w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      clipPath="url(#a)"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path
                          fill="#fff"
                          transform="rotate(90 12 12)"
                          d="M0 0h24v24H0z"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <img
                  src="img/cards/book.png"
                  className="absolute right-1.5 bottom-1.5 !w-40 !h-40"
                />
              </div>
              <a
                className="w-full flex justify-center items-center px-2.5 sm:px-0"
                target="_blank"
                href="https://t.me/smartpeoplechat/"
              ></a>
              <div className="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                <a
                  className="w-full flex justify-center items-center px-2.5 sm:px-0"
                  target="_blank"
                  href="https://t.me/smartpeoplechat/"
                >
                  <div className="flex flex-col items-start text-left flex-1 space-y-2.5">
                    <span className="text-white text-2xl">liveChat</span>
                    <span>platformWhereYouCanAsk</span>
                  </div>{" "}
                </a>
                <a className="flex items-center text-white" href="#">
                  <span>findMentor</span>
                  <svg
                    className="ml-1 w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      clipPath="url(#a)"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path
                          fill="#fff"
                          transform="rotate(90 12 12)"
                          d="M0 0h24v24H0z"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <img
                  src="img/cards/chat.png"
                  className="absolute right-1.5 bottom-1.5 !w-40 !h-40"
                />
              </div>
            </div>
            <div className="margin-item-carousel w-full hidden lg:flex lg:pb-8">
              <div className="carousel-root">
                <div
                  className="carousel carousel-slider"
                  // style="width: 100%"
                >
                  <ul className="control-dots">
                    <li
                      className="dot selected"
                      value="0"
                      role="button"
                      //   tabindex="0"
                      aria-label="slide item 1"
                    ></li>
                    <li
                      className="dot"
                      value="1"
                      role="button"
                      //   tabindex="0"
                      aria-label="slide item 2"
                    ></li>
                  </ul>
                  <button
                    type="button"
                    aria-label="previous slide / item"
                    className="control-arrow control-prev control-disabled"
                  ></button>
                  <div className="slider-wrapper axis-horizontal">
                    <ul
                      className="slider animated"
                      //   style="
                      //     -webkit-transform: translate3d(-100%, 0, 0);
                      //     -ms-transform: translate3d(-100%, 0, 0);
                      //     -o-transform: translate3d(-100%, 0, 0);
                      //     transform: translate3d(-100%, 0, 0);
                      //     -webkit-transition-duration: 350ms;
                      //     -moz-transition-duration: 350ms;
                      //     -o-transition-duration: 350ms;
                      //     transition-duration: 350ms;
                      //     -ms-transition-duration: 350ms;
                      //   "
                    >
                      <li className="slide">
                        <a
                          className="w-full flex justify-center items-center px-2.5 sm:px-0"
                          target="_blank"
                          href="https://t.me/smartpeoplechat/"
                        ></a>
                        <div className="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                          <a
                            className="w-full flex justify-center items-center px-2.5 sm:px-0"
                            target="_blank"
                            href="https://t.me/smartpeoplechat/"
                          >
                            <div className="flex flex-col items-start text-left flex-1 space-y-2.5">
                              <span className="text-white text-2xl">
                                liveChat
                              </span>
                              <span>platformWhereYouCanAsk</span>
                            </div>{" "}
                          </a>
                          <a className="flex items-center text-white" href="#">
                            <span>findMentor</span>
                            <svg
                              className="ml-1 w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clipPath="url(#a)"
                                stroke="#fff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                              </g>
                              <defs>
                                <clipPath id="a">
                                  <path
                                    fill="#fff"
                                    transform="rotate(90 12 12)"
                                    d="M0 0h24v24H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                          <img
                            src="img/cards/chat.png"
                            className="absolute right-1.5 bottom-1.5 !w-40 !h-40"
                          />
                        </div>
                      </li>
                      <li className="slide selected previous">
                        <a
                          className="w-full flex justify-center items-center px-2.5 sm:px-0"
                          target="_blank"
                          href="https://support.cryptoglobal.io/"
                        ></a>
                        <div className="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                          <a
                            className="w-full flex justify-center items-center px-2.5 sm:px-0"
                            target="_blank"
                            href="https://support.cryptoglobal.io/"
                          >
                            <div className="flex flex-col items-start text-left flex-1 space-y-2.5">
                              <span className="text-white text-2xl">
                                Documentation
                              </span>
                              <span>participantLearningPlatform</span>
                            </div>{" "}
                          </a>
                          <a className="flex items-center text-white" href="#">
                            <span>startLearning</span>
                            <svg
                              className="ml-1 w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clipPath="url(#a)"
                                stroke="#fff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                              </g>
                              <defs>
                                <clipPath id="a">
                                  <path
                                    fill="#fff"
                                    transform="rotate(90 12 12)"
                                    d="M0 0h24v24H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                          <img
                            src="img/cards/book.png"
                            className="absolute right-1.5 bottom-1.5 !w-40 !h-40"
                          />
                        </div>
                      </li>
                      <li className="slide">
                        <a
                          className="w-full flex justify-center items-center px-2.5 sm:px-0"
                          target="_blank"
                          href="https://t.me/smartpeoplechat/"
                        ></a>
                        <div className="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                          <a
                            className="w-full flex justify-center items-center px-2.5 sm:px-0"
                            target="_blank"
                            href="https://t.me/smartpeoplechat/"
                          >
                            <div className="flex flex-col items-start text-left flex-1 space-y-2.5">
                              <span className="text-white text-2xl">
                                liveChat
                              </span>
                              <span>platformWhereYouCanAsk</span>
                            </div>{" "}
                          </a>
                          <a className="flex items-center text-white" href="#">
                            <span>findMentor</span>
                            <svg
                              className="ml-1 w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clipPath="url(#a)"
                                stroke="#fff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                              </g>
                              <defs>
                                <clipPath id="a">
                                  <path
                                    fill="#fff"
                                    transform="rotate(90 12 12)"
                                    d="M0 0h24v24H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                          <img
                            src="img/cards/chat.png"
                            className="absolute right-1.5 bottom-1.5 !w-40 !h-40"
                          />
                        </div>
                      </li>
                      <li className="slide selected previous">
                        <a
                          className="w-full flex justify-center items-center px-2.5 sm:px-0"
                          target="_blank"
                          href="https://support.cryptoglobal.io/"
                        ></a>
                        <div className="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                          <a
                            className="w-full flex justify-center items-center px-2.5 sm:px-0"
                            target="_blank"
                            href="https://support.cryptoglobal.io/"
                          >
                            <div className="flex flex-col items-start text-left flex-1 space-y-2.5">
                              <span className="text-white text-2xl">
                                Documentation
                              </span>
                              <span>participantLearningPlatform</span>
                            </div>{" "}
                          </a>
                          <a className="flex items-center text-white" href="#">
                            <span>startLearning</span>
                            <svg
                              className="ml-1 w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clipPath="url(#a)"
                                stroke="#fff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                              </g>
                              <defs>
                                <clipPath id="a">
                                  <path
                                    fill="#fff"
                                    transform="rotate(90 12 12)"
                                    d="M0 0h24v24H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                          <img
                            src="img/cards/book.png"
                            className="absolute right-1.5 bottom-1.5 !w-40 !h-40"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    aria-label="next slide / item"
                    className="control-arrow control-next control-disabled"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center w-full space-x-5 sm:space-x-0 mb-[-250px] z-[11] sm:mb-[-100px]">
        <div className="h-full absolute top-1/2 -translate-y-1/2 left-5 w-[280px] flex flex-col items-end justify-between sm:left-1">
          <div className="flex flex-col items-end space-y-10 w-full mt-4">
            <img
              className="w-[170px] sm:w-[80px] sm:mr-auto"
              src="img/schoolIcon/hat.png"
            />
            <img
              className="w-[170px] mr-auto sm:w-[80px]"
              src="img/schoolIcon/magnifier.png"
            />
          </div>
          <img
            className="w-[130px] sm:w-[60px] sm:mr-auto"
            src="img/schoolIcon/bulb.png"
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-8 z-[10]">
          <div className="w-full max-w-[850px] sm:px-5">
            <span className="text-center text-[25px] text-white font-light sm:text-sm">
              <span className="purple-gradient">Crypto global School</span> is
              an exclusive training course designed specifically for those who
              want to unlock their full potential with Crypto global!
            </span>
          </div>
          <a
            className="!mt-2.5 bg-white-50 hover:bg-white-100 py-2.5 px-5 rounded-[30px] min-w-[200px] sm:min-w-[85%]"
            target="_blank"
            href="https://cryptoglobal.io/"
            rel="noreferrer"
          >
            <span className="purple-gradient">Go to school</span>
          </a>
          <iframe
            className="rounded-[30px] w-full school-box-shadow h-[510px] sm:h-[200px] max-w-[85%]"
            src="https://www.youtube.com/embed/eeKwImXmlBM"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="h-full absolute top-1/2 -translate-y-1/2 right-5 w-[280px] flex flex-col justify-between sm:right-1">
          <div className="flex flex-col justify-start space-y-10 w-full">
            <img
              className="w-[170px] sm:w-[80px] sm:ml-auto"
              src="img/schoolIcon/globe.png"
            />
            <img
              className="w-[170px] ml-auto sm:w-[80px]"
              src="img/schoolIcon/book.png"
            />
          </div>
          <img
            className="w-[130px] sm:w-[60px] sm:ml-auto"
            src="img/schoolIcon/pencil.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-center background-gradient pt-[220px] sm:pt-[250px] sm:pt-[100px]">
        <div className="py-[100px] flex flex-col max-w-desktop-full w-full lg:py-[40px]">
          <div className="flex flex-col align-middle">
            <div className="flex flex-col mb-10 items-center sm:items-start px-5 sm:mb-5">
              <span className="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[30px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">
                platformRecentActivity
              </span>
              <span className="text-white-700 text-[18px] sm:text-sm">
                realTimeGlobalEventsCryptoglobal
              </span>
            </div>
            <div className="flex flex-col mt-2.5 ml-auto mr-auto max-w-[970px] w-full z-10 px-5 sm:px-0">
              <div className="w-full max-h-[832px] overflow-hidden flex flex-col col-span-2 p-5 bg-gray rounded-[30px] h-full lg:order-2 sm:rounded-none sm:p-5 sm:max-h-[75vh]">
                <div
                  className="flex -mr-10 pr-10 flex-col flex-1 overflow-auto"
                  id="yourContainerId"
                >
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0xaae543622526800c4d0a8e03e474f75a69ea45686fda760f708f465f4e53f3a2
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0xaae543622526800c4d0a8e03e474f75a69ea45686fda760f708f465f4e53f3a2"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            1 hour ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0xf3884aa59ebed56781cf331a90ec5681141017fb25a09db332f045e22473bf57
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0xf3884aa59ebed56781cf331a90ec5681141017fb25a09db332f045e22473bf57"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            1 hour ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0x145ff6331e5a0af5cce6a4b5ca186d2966541c9c5e22480ceb5165b39d2704f7
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0x145ff6331e5a0af5cce6a4b5ca186d2966541c9c5e22480ceb5165b39d2704f7"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            1 hour ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0x58fb1918450c4588b48f59ce08e795095f316b5f2825bbfd11c53d3bdf8269c6
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0x58fb1918450c4588b48f59ce08e795095f316b5f2825bbfd11c53d3bdf8269c6"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            4 hours ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0x40bdd628677321d59a212abdd3df01c7815cae6db28aed3ea196eededc66f597
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0x40bdd628677321d59a212abdd3df01c7815cae6db28aed3ea196eededc66f597"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            4 hours ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0x50af95f3a6dbe2b0da0ab8e96c60cb731a603d84aa71df2928fb9fdd2fdeb492
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0x50af95f3a6dbe2b0da0ab8e96c60cb731a603d84aa71df2928fb9fdd2fdeb492"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            5 hours ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0xe6753ffa3b26e96d3ac6b259f49539a8d905a8d3ddae099800d44e3221ce0f6c
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0xe6753ffa3b26e96d3ac6b259f49539a8d905a8d3ddae099800d44e3221ce0f6c"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            5 hours ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0x48e05b8e5ae0ee11f5b56d7938b81d51e491ebec1b5e0f7ae68de29900c021d1
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0x48e05b8e5ae0ee11f5b56d7938b81d51e491ebec1b5e0f7ae68de29900c021d1"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            5 hours ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0xa76ef7cb1ec0faf224b758a15283e7f5f61791604dc2ee4da509b5d77228a710
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0xa76ef7cb1ec0faf224b758a15283e7f5f61791604dc2ee4da509b5d77228a710"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            5 hours ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <svg
                          className="fill-current text-green w-7 h-7 mr-5 sm:mr-2.5"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.97 1 2.47 2.53-6.22 6.22-2.47-2.47L10.97 1ZM14.72 4.75l2.47 2.53-9.97 9.97-2.47-2.47 9.97-10.03ZM3.47 8.5l2.47 2.53-2.47 2.47L1 11.03 3.47 8.5ZM18.47 8.5l2.47 2.53L10.97 21 8.5 18.53 18.47 8.5Z"
                            fill="#D2A927"
                            stroke="#F0B90B"
                            strokeWidth=".097"
                          ></path>
                        </svg>
                        <div className="bg-green-200 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <svg
                            className="fill-current text-green w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="#ffff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                              fill-opacity=".5"
                            ></path>
                            <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center px-[10px] py-[5px] sm:py-[2.5px] leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded-[20px] font-medium text-base sm:text-[12px] w-max false"
                            target="_blank"
                            href="#"
                          >
                            0x8c89e2ee32cd94b79caf71a4b9abbd0764000212f92717e390342ea9f786e95d
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 sm:text-[12px] false">
                            <span className="text-white-500 text-base sm:text-[12px] sm:leading-30px"></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-end whitespace-nowrap h-full">
                          <a
                            className="sm:order-2"
                            target="_blank"
                            href="https://bscscan.com/tx/0x8c89e2ee32cd94b79caf71a4b9abbd0764000212f92717e390342ea9f786e95d"
                          >
                            <svg
                              className="w-6 h-6 sm:h-4 sm:w-4"
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
                          <span className="ml-2.5 text-white-500 text-base sm:text-[12px] sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                            5 hours ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-5 mt-[100px] sm:mt-10">
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
              <span className="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[30px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">
                Partner results
              </span>
              <span className="font-light text-white-700 text-[18px] leading-[30px] font-semibold max-w-[770px] sm:text-[14px] sm:leading-[22px]">
                All data is stored in the blockchain in the public domain and
                can be verified!
              </span>
            </div>
            <div className="flex flex-col w-full items-center mb-5 sm:items-start sm:mt-2.5 sm:mb-2.5">
              <div className="flex space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
                <span>
                  Contract address
                  <span className="text-white font-semibold">bscscan :</span>
                </span>
                <span className="text-white cursor-pointer hover:text-white-800 sm:hidden">
                  0xf6be8847ab503fe3a09e3526a04f62d8482d9edf
                </span>
                <div className="justify-start items-center hidden sm:flex">
                  <span className="text-white mr-2.5">
                    0xf6be8847ab5...04f62d8482d9edf
                  </span>
                  <button
                    // onclick="copyText('contract')"
                    className="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] !p-0 !max-w-none"
                  >
                    <svg
                      className="w-5 h-5"
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

              <div className="flex space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
                <span>
                  Contract address
                  <span className="text-white font-semibold">USDT :</span>
                </span>
                <span className="text-white cursor-pointer hover:text-white-800 sm:hidden">
                  0x55d398326f99059ff775485246999027b3197955
                </span>
                <div className="justify-start items-center hidden sm:flex">
                  <span className="text-white mr-2.5">
                    0x55d398326f9...7b3197955
                  </span>
                  <button
                    // onclick="copyText('usdt')"
                    className="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] !p-0 !max-w-none"
                  >
                    <svg
                      className="w-5 h-5"
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
            <div className="relative flex flex-col justify-center items-center w-full">
              <div className="flex flex-col items-center w-full">
                <div className="flex bg-white-200 rounded-[40px] p-1.5 w-max mb-16 sm:mb-10 sm:w-full">
                  <div
                    // onclick="UpdateClass(this,'all')"
                    id="all"
                    className="flex flex-1 justify-center font-bold rounded-[40px] w-max px-5 py-1.5 cursor-pointer uppercase sm:px-2.5 bg-white text-black"
                  >
                    Total
                  </div>
                  <div
                    // onclick="UpdateClass(this,'usdt')"
                    id="usdt"
                    className="flex flex-1 justify-center font-bold rounded-[40px] w-max px-5 py-1.5 cursor-pointer uppercase sm:px-2.5"
                  >
                    USDT
                  </div>
                </div>
                <div className="flex justify-start w-full sm:h-[300px]">
                  <div
                    className="flex items-center justify-evenly flex-wrap w-full sm:flex-col sm:space-y-5 sm:items-start sm:w-full"
                    id="allText"
                  >
                    <div className="flex flex-col items-center flex-1 sm:justify-center sm:items-center sm:w-full">
                      <div className="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span className="text-white text-[42px] leading-[50px] num-bold-style">
                          3 174 455
                        </span>
                        <span className="text-green text-[24px] leading-[50px] num-bold-style">
                          +548
                        </span>
                      </div>
                      <span className="text-white-700 font-semibold">
                        Accounts count
                      </span>
                    </div>
                    <div className="flex flex-col items-center flex-1 sm:justify-center sm:items-center sm:w-full">
                      <div className="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span className="text-white text-[42px] leading-[50px] num-bold-style">
                          1 464 928 936
                        </span>
                        <span className="text-green text-[24px] leading-[50px] num-bold-style">
                          +11 262
                        </span>
                      </div>
                      <span className="text-white-700 font-semibold">
                        Total result, USD
                      </span>
                    </div>
                  </div>
                  <div
                    className="hidden items-center justify-evenly flex-wrap w-full sm:flex-col sm:space-y-5 sm:items-start sm:w-full"
                    id="usdtText"
                  >
                    <div className="flex flex-col items-center flex-1 sm:justify-center sm:items-center sm:w-full">
                      <div className="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span className="text-white text-[42px] leading-[50px] num-bold-style">
                          1 056 961
                        </span>
                      </div>
                      <span className="text-white-700 font-semibold">
                        Accounts count
                      </span>
                    </div>
                    <div className="flex flex-col items-center flex-1 sm:justify-center sm:items-center sm:w-full">
                      <div className="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span className="text-white text-[42px] leading-[50px] num-bold-style">
                          1 162 559 598
                        </span>
                      </div>
                      <span className="text-white-700 font-semibold">
                        Total result, USD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="py-[100px] flex flex-col max-w-desktop-full w-full lg:py-[40px] px-5">
          <div className="flex flex-col text-center space-y-[50px] lg:space-y-5">
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
              <span className="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[30px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">
                technologyOfSmartContracts
              </span>
              <span className="font-light text-white-700 text-[18px] leading-[30px] font-semibold max-w-[770px] sm:text-[14px] sm:leading-[22px]">
                decentralizedMarketing
              </span>
            </div>
            <div className="">
              <div className="flex justify-center space-x-[50px] lg:space-x-0 lg:hidden">
                <div className="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                  <div className="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                    <svg
                      className="w-[30px] h-[30px]"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 4.75C9.34 4.75 4.75 9.339 4.75 15c0 5.66 4.59 10.25 10.25 10.25S25.25 20.66 25.25 15c0-5.661-4.59-10.25-10.25-10.25zM2.75 15C2.75 8.234 8.235 2.75 15 2.75S27.25 8.234 27.25 15c0 6.765-5.485 12.25-12.25 12.25S2.75 21.765 2.75 15z"
                        fill="#fff"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.25 12.5a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm7.5 0a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm-6.575 5.535a1 1 0 0 1 1.414.015 3.375 3.375 0 0 0 4.822 0 1 1 0 0 1 1.428 1.4 5.375 5.375 0 0 1-7.678 0 1 1 0 0 1 .014-1.415z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                    <span className="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">
                      Autonomy
                    </span>
                    <span className="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">
                      CryptoglobalEcosystemAroundTechnology
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full max-w-[330px] space-y-1.5 lg:hidden">
                  <div className="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer border-white-200 bg-white-200 text-white">
                    Autonomy
                  </div>
                  <div className="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                    unchangingConditions
                  </div>
                  <div className="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                    Transparency
                  </div>
                  <div className="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                    fullAutomation
                  </div>
                  <div className="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                    Decentralization
                  </div>
                  <div className="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                    100%Online
                  </div>
                </div>
              </div>
              <div className="margin-item-carousel hidden lg:flex">
                <div className="carousel-root">
                  <div
                    className="carousel carousel-slider"
                    //   style="width: 100%"
                  >
                    <ul className="control-dots">
                      <li
                        className="dot selected"
                        value="0"
                        role="button"
                        // tabindex="0"
                        aria-label="slide item 1"
                      ></li>
                      <li
                        className="dot"
                        value="1"
                        role="button"
                        // tabindex="0"
                        aria-label="slide item 2"
                      ></li>
                      <li
                        className="dot"
                        value="2"
                        role="button"
                        // tabindex="0"
                        aria-label="slide item 3"
                      ></li>
                      <li
                        className="dot"
                        value="3"
                        role="button"
                        // tabindex="0"
                        aria-label="slide item 4"
                      ></li>
                      <li
                        className="dot"
                        value="4"
                        role="button"
                        // tabindex="0"
                        aria-label="slide item 5"
                      ></li>
                      <li
                        className="dot"
                        value="5"
                        role="button"
                        // tabindex="0"
                        aria-label="slide item 6"
                      ></li>
                    </ul>
                    <button
                      type="button"
                      aria-label="previous slide / item"
                      className="control-arrow control-prev control-disabled"
                    ></button>
                    <div className="slider-wrapper axis-horizontal">
                      <ul
                        className="slider animated"
                        // style="
                        //   -webkit-transform: translate3d(-100%, 0, 0);
                        //   -ms-transform: translate3d(-100%, 0, 0);
                        //   -o-transform: translate3d(-100%, 0, 0);
                        //   transform: translate3d(-100%, 0, 0);
                        //   -webkit-transition-duration: 350ms;
                        //   -moz-transition-duration: 350ms;
                        //   -o-transition-duration: 350ms;
                        //   transition-duration: 350ms;
                        //   -ms-transition-duration: 350ms;
                        // "
                      >
                        <li className="slide">
                          <div className="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                            <div className="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                              <svg
                                className="w-[30px] h-[30px]"
                                viewBox="0 0 31 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.986 11.003a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm0-2a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 1 1-7 0v-5a3.5 3.5 0 0 1 3.5-3.5z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.986 4.753c-5.66 0-10.25 4.59-10.25 10.25 0 5.661 4.59 10.25 10.25 10.25 5.661 0 10.25-4.589 10.25-10.25 0-5.66-4.589-10.25-10.25-10.25zm-12.25 10.25c0-6.765 5.485-12.25 12.25-12.25 6.766 0 12.25 5.485 12.25 12.25 0 6.766-5.484 12.25-12.25 12.25-6.765 0-12.25-5.484-12.25-12.25z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                              <span className="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">
                                100%Online
                              </span>
                              <span className="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">
                                hiddenCostsOrServiceFees
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="slide selected previous">
                          <div className="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                            <div className="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                              <svg
                                className="w-[30px] h-[30px]"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15 4.75C9.34 4.75 4.75 9.339 4.75 15c0 5.66 4.59 10.25 10.25 10.25S25.25 20.66 25.25 15c0-5.661-4.59-10.25-10.25-10.25zM2.75 15C2.75 8.234 8.235 2.75 15 2.75S27.25 8.234 27.25 15c0 6.765-5.485 12.25-12.25 12.25S2.75 21.765 2.75 15z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.25 12.5a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm7.5 0a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm-6.575 5.535a1 1 0 0 1 1.414.015 3.375 3.375 0 0 0 4.822 0 1 1 0 0 1 1.428 1.4 5.375 5.375 0 0 1-7.678 0 1 1 0 0 1 .014-1.415z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                              <span className="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">
                                Autonomy
                              </span>
                              <span className="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">
                                Crypto global Ecosystem Around Technology
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="slide">
                          <div className="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                            <div className="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                              <svg
                                className="w-[30px] h-[30px]"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17.5 2.75a1 1 0 0 1 1 1v5a.25.25 0 0 0 .25.25h5a1 1 0 1 1 0 2h-5a2.25 2.25 0 0 1-2.25-2.25v-5a1 1 0 0 1 1-1z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.75 4.75a1.5 1.5 0 0 0-1.5 1.5V10a1 1 0 1 1-2 0V6.25a3.5 3.5 0 0 1 3.5-3.5h8.75a1 1 0 0 1 .707.293l6.25 6.25a1 1 0 0 1 .293.707v13.75a3.5 3.5 0 0 1-3.5 3.5H15a1 1 0 1 1 0-2h6.25a1.5 1.5 0 0 0 1.5-1.5V10.414L17.086 4.75H8.75z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.5 14.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM2.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.912 20.292a1 1 0 0 1 .67 1.245l-1.21 4.034 1.68-.84a1 1 0 0 1 .895 0l1.68.84-1.21-4.034a1 1 0 1 1 1.916-.574l1.875 6.25a1 1 0 0 1-1.405 1.181L7.5 26.745l-3.303 1.65a1 1 0 0 1-1.405-1.181l1.875-6.25a1 1 0 0 1 1.245-.67z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                              <span className="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">
                                unchangingConditions
                              </span>
                              <span className="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">
                                algorithmStoredBlockchain
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="slide">
                          <div className="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                            <div className="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                              <svg
                                className="w-[30px] h-[30px]"
                                viewBox="0 0 30 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15 13.503a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.658 15.003c3.02 5.055 6.604 7.51 10.714 7.733a1 1 0 0 1-.108 1.998c-5.154-.28-9.35-3.491-12.632-9.234a1 1 0 0 1 0-.993C5.074 8.484 9.52 5.253 15 5.253s9.926 3.23 13.368 9.254a1 1 0 0 1 0 .992 27.71 27.71 0 0 1-1.7 2.636 1 1 0 1 1-1.614-1.18c.44-.602.87-1.252 1.288-1.951-3.168-5.301-6.957-7.75-11.342-7.75-4.385 0-8.174 2.449-11.342 7.75z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M26.957 20.546a1 1 0 0 1 0 1.415l-5 5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.415l1.793 1.793 4.293-4.293a1 1 0 0 1 1.414 0z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                              <span className="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">
                                Transparency
                              </span>
                              <span className="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">
                                smartContractCodeIsStored
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="slide">
                          <div className="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                            <div className="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                              <svg
                                className="w-[30px] h-[30px]"
                                viewBox="0 0 31 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.011 5.029a3.5 3.5 0 0 1 2.475-1.026h12.5a2.25 2.25 0 0 1 2.25 2.25v2.75h.25a2.25 2.25 0 0 1 2.25 2.25v3.75a1 1 0 1 1-2 0v-3.75a.25.25 0 0 0-.25-.25h-15a3.5 3.5 0 0 1-1.5-.337v11.837a1.5 1.5 0 0 0 1.5 1.5h15a.25.25 0 0 0 .25-.25v-3.75a1 1 0 1 1 2 0v3.75a2.25 2.25 0 0 1-2.25 2.25h-15a3.5 3.5 0 0 1-3.5-3.5v-15A3.5 3.5 0 0 1 6.011 5.03zm.975 2.474a1.5 1.5 0 0 0 1.5 1.5h12.75v-2.75a.25.25 0 0 0-.25-.25h-12.5a1.5 1.5 0 0 0-1.5 1.5z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M20.986 16.003a1.5 1.5 0 0 0 0 3h4v-3h-4zm-2.474-.975a3.5 3.5 0 0 1 2.474-1.025h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a3.5 3.5 0 0 1-2.474-5.975z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                              <span className="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">
                                fullAutomation
                              </span>
                              <span className="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">
                                transactionsBetweenCommunityMembers
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="slide">
                          <div className="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                            <div className="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                              <svg
                                className="w-[30px] h-[30px]"
                                viewBox="0 0 30 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.25 21.003a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm21-16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M23.75 9.003a1 1 0 0 1 1 1v6.25a7.25 7.25 0 0 1-7.25 7.25h-1.336l2.043 2.043a1 1 0 0 1-1.414 1.415l-3.75-3.75a1 1 0 0 1 0-1.415l3.75-3.75a1 1 0 0 1 1.414 1.415l-2.043 2.042H17.5a5.25 5.25 0 0 0 5.25-5.25v-6.25a1 1 0 0 1 1-1zM11.793 3.046a1 1 0 0 1 1.414 0l3.75 3.75a1 1 0 0 1 0 1.415l-3.75 3.75a1 1 0 0 1-1.414-1.415l2.043-2.043H12.5a5.25 5.25 0 0 0-5.25 5.25v6.25a1 1 0 1 1-2 0v-6.25a7.25 7.25 0 0 1 7.25-7.25h1.336l-2.043-2.042a1 1 0 0 1 0-1.415z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                              <span className="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">
                                Decentralization
                              </span>
                              <span className="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">
                                notEvenCreators
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="slide">
                          <div className="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                            <div className="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                              <svg
                                className="w-[30px] h-[30px]"
                                viewBox="0 0 31 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.986 11.003a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm0-2a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 1 1-7 0v-5a3.5 3.5 0 0 1 3.5-3.5z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.986 4.753c-5.66 0-10.25 4.59-10.25 10.25 0 5.661 4.59 10.25 10.25 10.25 5.661 0 10.25-4.589 10.25-10.25 0-5.66-4.589-10.25-10.25-10.25zm-12.25 10.25c0-6.765 5.485-12.25 12.25-12.25 6.766 0 12.25 5.485 12.25 12.25 0 6.766-5.484 12.25-12.25 12.25-6.765 0-12.25-5.484-12.25-12.25z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                              <span className="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">
                                100%Online
                              </span>
                              <span className="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">
                                hiddenCostsOrServiceFees
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="slide selected previous">
                          <div className="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                            <div className="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                              <svg
                                className="w-[30px] h-[30px]"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15 4.75C9.34 4.75 4.75 9.339 4.75 15c0 5.66 4.59 10.25 10.25 10.25S25.25 20.66 25.25 15c0-5.661-4.59-10.25-10.25-10.25zM2.75 15C2.75 8.234 8.235 2.75 15 2.75S27.25 8.234 27.25 15c0 6.765-5.485 12.25-12.25 12.25S2.75 21.765 2.75 15z"
                                  fill="#fff"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.25 12.5a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm7.5 0a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm-6.575 5.535a1 1 0 0 1 1.414.015 3.375 3.375 0 0 0 4.822 0 1 1 0 0 1 1.428 1.4 5.375 5.375 0 0 1-7.678 0 1 1 0 0 1 .014-1.415z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                              <span className="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">
                                Autonomy
                              </span>
                              <span className="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">
                                Crypto global Ecosystem Around Technology
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      aria-label="next slide / item"
                      className="control-arrow control-next control-disabled"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="py-[100px] flex flex-col max-w-desktop-full w-full lg:py-[40px] px-5">
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
            <span className="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[30px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">
              convenientOffice
            </span>
            <span className="font-light text-white-700 text-[18px] leading-[30px] font-semibold max-w-[770px] sm:text-[14px] sm:leading-[22px]">
              interactiveOnlineVisualization
            </span>
          </div>
          <div className="relative flex justify-center items-center bg-gradient sm:mt-5">
            <img
              src="img/cabinet_preview.png"
              className="max-w-full sm:max-w-[90vw]"
              alt="cabinet_preview_image"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="py-[100px] flex flex-col max-w-desktop-full w-full lg:py-[40px] px-5">
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
            <span className="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[60px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">
              frequentlyAskedQuestions
            </span>
          </div>
          <div data-accordion-component="Accordion" className="accordion">
            <div className="relative flex flex-col w-full">
              <svg
                className="absolute top-1/3 -left-10 h-40 sm:left-5 sm:top-10"
                viewBox="0 0 60 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.551 63.978c0-2.69.187-5.239.561-7.65.467-2.41 1.495-4.682 3.084-6.815 1.589-2.225 4.066-4.219 7.43-5.98a146.221 146.221 0 0 1 4.346-2.226 47.366 47.366 0 0 0 5.888-3.338c1.962-1.298 3.598-2.735 4.906-4.311 1.402-1.67 2.103-3.477 2.103-5.424 0-2.133-.841-3.802-2.523-5.007-1.682-1.298-3.645-1.947-5.888-1.947s-4.112.556-5.607 1.668a14.35 14.35 0 0 0-3.505 3.617c-.841 1.298-1.636 2.41-2.383 3.338L0 17.942c2.43-5.656 6.262-10.06 11.495-13.213C16.73 1.576 22.71 0 29.44 0c3.552 0 7.103.51 10.654 1.53a30.12 30.12 0 0 1 9.954 4.868c2.99 2.225 5.374 5.146 7.15 8.762C59.064 18.776 60 23.18 60 28.373c0 4.45-.841 8.53-2.523 12.239-1.683 3.616-4.58 6.815-8.692 9.597a53.935 53.935 0 0 1-8.411 4.728c-2.804 1.299-5.187 2.643-7.15 4.034-1.962 1.298-2.944 2.967-2.944 5.007H8.551ZM8.972 100V77.19h21.729V100H8.972Z"
                  fill="#fff"
                  fill-opacity=".1"
                ></path>
              </svg>
              <svg
                className="absolute bottom-4 right-14 h-36 rotate-180"
                viewBox="0 0 60 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.551 63.978c0-2.69.187-5.239.561-7.65.467-2.41 1.495-4.682 3.084-6.815 1.589-2.225 4.066-4.219 7.43-5.98a146.221 146.221 0 0 1 4.346-2.226 47.366 47.366 0 0 0 5.888-3.338c1.962-1.298 3.598-2.735 4.906-4.311 1.402-1.67 2.103-3.477 2.103-5.424 0-2.133-.841-3.802-2.523-5.007-1.682-1.298-3.645-1.947-5.888-1.947s-4.112.556-5.607 1.668a14.35 14.35 0 0 0-3.505 3.617c-.841 1.298-1.636 2.41-2.383 3.338L0 17.942c2.43-5.656 6.262-10.06 11.495-13.213C16.73 1.576 22.71 0 29.44 0c3.552 0 7.103.51 10.654 1.53a30.12 30.12 0 0 1 9.954 4.868c2.99 2.225 5.374 5.146 7.15 8.762C59.064 18.776 60 23.18 60 28.373c0 4.45-.841 8.53-2.523 12.239-1.683 3.616-4.58 6.815-8.692 9.597a53.935 53.935 0 0 1-8.411 4.728c-2.804 1.299-5.187 2.643-7.15 4.034-1.962 1.298-2.944 2.967-2.944 5.007H8.551ZM8.972 100V77.19h21.729V100H8.972Z"
                  fill="#fff"
                  fill-opacity=".1"
                ></path>
              </svg>
              <div
                data-accordion-component="AccordionItem"
                className="accordion__item"
              >
                <div className="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5">
                  {/* <div
                    data-accordion-component="AccordionItemHeading"
                    role="heading"
                    className="accordion__heading"
                    aria-level="3"
                  >
                    <div
                      className="accordion__button"
                      id="accordion__heading-raa-7"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="accordion__panel-raa-7"
                      role="button"
                    //   tabindex="0"
                      data-accordion-component="AccordionItemButton"
                    >
                      <div
                        className="flex items-center justify-between space-x-2.5"
                      >
                        <span
                          className="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]"
                          >why Is Crypto global The Best Alternative To
                          Trading</span
                        >
                        <div
                          className="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500 sm:w-[30px] sm:h-[30px]"
                        >
                          <svg
                            className="w-3.5 sm:w-2.5"
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m1 1 6 6 6-6"
                              stroke="#fff"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    data-accordion-component="AccordionItemPanel"
                    className="accordion__panel"
                    aria-hidden="true"
                    id="accordion__panel-raa-7"
                    // hidden=""
                  >
                    <div className="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                      <span className="transition-opacity duration-500 ease-in-out">
                        <div className="space-y-1.5">
                          theCryptocurrencyRateHasNoEffectOnTheSustainabilityOfTheRewards
                          <ul className="space-y-1.5">
                            <li>
                              theMinimumEntryThresholdIsEqualToJustACoupleOfCupsOfCoffee
                            </li>
                            <li>
                              thereIsNoNeedToWaitForPayoutsFundsComeInstantlyToYourWallet
                            </li>
                            <li>
                              rewardsAlwaysDependOnlyOnTheActionsOfTheParticipant
                            </li>
                            <li>
                              theParticipantCanReceiveTheRewardIndefinitelyAsLongAsHeExpandsHisTeam
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-accordion-component="AccordionItem"
                className="accordion__item"
              >
                <div className="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5">
                  {/* <div
                    data-accordion-component="AccordionItemHeading"
                    role="heading"
                    className="accordion__heading"
                    aria-level="3"
                  >
                    <div
                      className="accordion__button"
                      id="accordion__heading-raa-8"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="accordion__panel-raa-8"
                      role="button"
                    //   tabindex="0"
                      data-accordion-component="AccordionItemButton"
                    >
                      <div
                        className="flex items-center justify-between space-x-2.5"
                      >
                        <span
                          className="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]"
                          >Is Crypto global Safe</span
                        >
                        <div
                          className="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500 sm:w-[30px] sm:h-[30px]"
                        >
                          <svg
                            className="w-3.5 sm:w-2.5"
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m1 1 6 6 6-6"
                              stroke="#fff"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    data-accordion-component="AccordionItemPanel"
                    className="accordion__panel"
                    aria-hidden="true"
                    id="accordion__panel-raa-8"
                    // hidden=""
                  >
                    <div className="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                      <span className="transition-opacity duration-500 ease-in-out">
                        <span>Is Crypto global Safe Description</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-accordion-component="AccordionItem"
                className="accordion__item"
              >
                <div className="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5">
                  {/* <div
                    data-accordion-component="AccordionItemHeading"
                    role="heading"
                    className="accordion__heading"
                    aria-level="3"
                  >
                    <div
                      className="accordion__button"
                      id="accordion__heading-raa-9"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="accordion__panel-raa-9"
                      role="button"
                    //   tabindex="0"
                      data-accordion-component="AccordionItemButton"
                    >
                      <div
                        className="flex items-center justify-between space-x-2.5"
                      >
                        <span
                          className="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]"
                          >how Much Does It Cost To Participate In Crypto
                          global USDT</span
                        >
                        <div
                          className="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500 sm:w-[30px] sm:h-[30px]"
                        >
                          <svg
                            className="w-3.5 sm:w-2.5"
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m1 1 6 6 6-6"
                              stroke="#fff"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    data-accordion-component="AccordionItemPanel"
                    className="accordion__panel"
                    aria-hidden="true"
                    id="accordion__panel-raa-9"
                    // hidden=""
                  >
                    <div className="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                      <span className="transition-opacity duration-500 ease-in-out">
                        <span>
                          how Much Does It Cost To Participate In Crypto global
                          USDT Description
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-accordion-component="AccordionItem"
                className="accordion__item"
              >
                <div className="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5">
                  {/* <div
                    data-accordion-component="AccordionItemHeading"
                    role="heading"
                    className="accordion__heading"
                    aria-level="3"
                  >
                    <div
                      className="accordion__button"
                      id="accordion__heading-raa-10"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="accordion__panel-raa-10"
                      role="button"
                    //   tabindex="0"
                      data-accordion-component="AccordionItemButton"
                    >
                      <div
                        className="flex items-center justify-between space-x-2.5"
                      >
                        <span
                          className="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]"
                          >what Do I Need To Get Started In Crypto global
                          USDT</span
                        >
                        <div
                          className="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500 sm:w-[30px] sm:h-[30px]"
                        >
                          <svg
                            className="w-3.5 sm:w-2.5"
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m1 1 6 6 6-6"
                              stroke="#fff"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    data-accordion-component="AccordionItemPanel"
                    className="accordion__panel"
                    aria-hidden="true"
                    id="accordion__panel-raa-10"
                    // hidden=""
                  >
                    <div className="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                      <span className="transition-opacity duration-500 ease-in-out">
                        <span>
                          what Do I Need To Get Started In Crypto global USDT
                          Description
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-accordion-component="AccordionItem"
                className="accordion__item"
              >
                <div className="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5">
                  {/* <div
                    data-accordion-component="AccordionItemHeading"
                    role="heading"
                    className="accordion__heading"
                    aria-level="3"
                  >
                    <div
                      className="accordion__button"
                      id="accordion__heading-raa-11"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="accordion__panel-raa-11"
                      role="button"
                    //   tabindex="0"
                      data-accordion-component="AccordionItemButton"
                    >
                      <div
                        className="flex items-center justify-between space-x-2.5"
                      >
                        <span
                          className="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]"
                          >howDoIStart</span
                        >
                        <div
                          className="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500 sm:w-[30px] sm:h-[30px]"
                        >
                          <svg
                            className="w-3.5 sm:w-2.5"
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m1 1 6 6 6-6"
                              stroke="#fff"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    data-accordion-component="AccordionItemPanel"
                    className="accordion__panel"
                    aria-hidden="true"
                    id="accordion__panel-raa-11"
                    // hidden=""
                  >
                    <div className="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                      <span className="transition-opacity duration-500 ease-in-out">
                        <div className="space-y-1.5">
                          Register On The Website To Gain Access To The Crypto
                          global Academy And Community
                          <ul className="space-y-1.5">
                            <li>
                              Study The Instructions Guides And Articles On
                              Marketing So Youre Ready To Go
                              <a
                                className="underline"
                                target="_blank"
                                href="https://t.me/smartpeoplechat"
                              >
                                t.me/smartpeoplechat
                              </a>
                            </li>
                            <li>
                              activateNFTHeroesAndUseThemToMakeProgressWithYourTeam
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-accordion-component="AccordionItem"
                className="accordion__item"
              >
                <div className="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5">
                  {/* <div
                    data-accordion-component="AccordionItemHeading"
                    role="heading"
                    className="accordion__heading"
                    aria-level="3"
                  >
                    <div
                      className="accordion__button"
                      id="accordion__heading-raa-12"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="accordion__panel-raa-12"
                      role="button"
                    //   tabindex="0"
                      data-accordion-component="AccordionItemButton"
                    >
                      <div
                        className="flex items-center justify-between space-x-2.5"
                      >
                        <span
                          className="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]"
                          >whereWillMyProfitComeFrom</span
                        >
                        <div
                          className="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500 sm:w-[30px] sm:h-[30px]"
                        >
                          <svg
                            className="w-3.5 sm:w-2.5"
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m1 1 6 6 6-6"
                              stroke="#fff"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    data-accordion-component="AccordionItemPanel"
                    className="accordion__panel"
                    aria-hidden="true"
                    id="accordion__panel-raa-12"
                    // hidden=""
                  >
                    <div className="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                      <span className="transition-opacity duration-500 ease-in-out">
                        <span>
                          allEarningsToYourWalletWillOnlyComeFromTheActivityOfOtherMembersWhoOpenNFTCards
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-accordion-component="AccordionItem"
                className="accordion__item"
              >
                <div className="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5">
                  {/* <div
                    data-accordion-component="AccordionItemHeading"
                    role="heading"
                    className="accordion__heading"
                    aria-level="3"
                  >
                    <div
                      className="accordion__button"
                      id="accordion__heading-raa-13"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-controls="accordion__panel-raa-13"
                      role="button"
                    //   tabindex="0"
                      data-accordion-component="AccordionItemButton"
                    >
                      <div
                        className="flex items-center justify-between space-x-2.5"
                      >
                        <span
                          className="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]"
                          >whatRoleDoNFTTokensPlayInCrypto global</span
                        >
                        <div
                          className="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500 sm:w-[30px] sm:h-[30px]"
                        >
                          <svg
                            className="w-3.5 sm:w-2.5"
                            viewBox="0 0 14 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m1 1 6 6 6-6"
                              stroke="#fff"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    data-accordion-component="AccordionItemPanel"
                    className="accordion__panel"
                    aria-hidden="true"
                    id="accordion__panel-raa-13"
                    // hidden=""
                  >
                    <div className="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                      <span className="transition-opacity duration-500 ease-in-out">
                        <span>
                          NFTTokensAreCombinedIntoCollectionsWithSeveralMillionUniqueCharacters
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="py-[100px] flex flex-col max-w-desktop-full w-full lg:py-[40px] px-5">
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
            <span className="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[60px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">
              officialChannels
            </span>
          </div>
          <div className="flex items-start w-full justify-evenly lg:flex-wrap sm:justify-around">
            <a
              className="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"
              target="_blank"
              href="https://t.me/#"
            >
              <div className="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 32 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.788.94 1.102 11.92a1 1 0 0 0 .074 1.886l6.978 2.16 2.83 8.758a1 1 0 0 0 1.632.426l4.1-3.808 7.778 5.724a1 1 0 0 0 1.566-.578l5.414-23.234A2 2 0 0 0 28.788.941V.94ZM12.58 17.79l-.864 5.18-2-7.253 19.54-12.75-16.676 14.82v.002Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <span className="max-w-[90px] group-hover:text-white">
                Telegram channel
              </span>{" "}
            </a>
            <a
              className="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"
              target="_blank"
              href="https://t.me/#"
            >
              <div className="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 32 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.788.94 1.102 11.92a1 1 0 0 0 .074 1.886l6.978 2.16 2.83 8.758a1 1 0 0 0 1.632.426l4.1-3.808 7.778 5.724a1 1 0 0 0 1.566-.578l5.414-23.234A2 2 0 0 0 28.788.941V.94ZM12.58 17.79l-.864 5.18-2-7.253 19.54-12.75-16.676 14.82v.002Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <span className="max-w-[90px] group-hover:text-white">
                Telegram chat
              </span>{" "}
            </a>
            <a
              className="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"
              target="_blank"
              href="https://twitter.com/#"
            >
              <div className="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.494 2.845c-1.104.488-2.275.81-3.474.956a6.074 6.074 0 0 0 2.66-3.35c-1.168.694-2.46 1.2-3.842 1.468a6.052 6.052 0 0 0-10.312 5.52A17.148 17.148 0 0 1 2.05 1.107a6.058 6.058 0 0 0 1.88 8.088 5.93 5.93 0 0 1-2.75-.756v.074a6.056 6.056 0 0 0 4.856 5.938 6.11 6.11 0 0 1-1.592.212c-.388 0-.768-.036-1.138-.112a6.062 6.062 0 0 0 5.658 4.206A12.134 12.134 0 0 1 0 21.263a16.918 16.918 0 0 0 9.262 2.738c11.144 0 17.232-9.23 17.232-17.238 0-.262-.008-.524-.02-.78a12.32 12.32 0 0 0 3.02-3.138Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <span className="max-w-[90px] group-hover:text-white">
                Twitter
              </span>{" "}
            </a>
            <a
              className="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"
              target="_blank"
              href="https://www.instagram.com/#/"
            >
              <div className="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.756 0c2.497.004 2.987.022 4.206.078 1.383.063 2.328.283 3.155.604.855.333 1.58.777 2.303 1.5a6.372 6.372 0 0 1 1.5 2.303c.32.826.54 1.772.604 3.155.06 1.303.076 1.772.078 4.752v1.217c-.002 2.98-.019 3.449-.078 4.751-.063 1.384-.283 2.33-.605 3.156a6.372 6.372 0 0 1-1.5 2.303 6.373 6.373 0 0 1-2.302 1.5c-.827.32-1.772.54-3.155.604-1.261.057-1.742.075-4.471.078h-1.779c-2.73-.003-3.21-.02-4.47-.078-1.385-.063-2.33-.283-3.156-.604a6.374 6.374 0 0 1-2.303-1.5 6.373 6.373 0 0 1-1.5-2.303c-.321-.827-.54-1.772-.604-3.155-.056-1.22-.074-1.709-.077-4.206v-2.31C.605 9.348.623 8.86.679 7.64c.063-1.383.283-2.329.604-3.155a6.373 6.373 0 0 1 1.5-2.303 6.372 6.372 0 0 1 2.303-1.5C5.912.361 6.857.142 8.24.078 9.46.022 9.95.004 12.446 0h2.31Zm5.946 4.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm-7.1 1.5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <span className="max-w-[90px] group-hover:text-white">
                Instagram
              </span>{" "}
            </a>
            <a
              className="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"
              target="_blank"
              href="https://www.youtube.com/watch?v=NCc3ODAG8zk"
            >
              <div className="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 34 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.82 3.755c-.38-1.468-1.495-2.626-2.908-3.021C27.329 0 17 0 17 0S6.67 0 4.088.706c-1.386.395-2.528 1.581-2.908 3.05C.5 6.437.5 12 .5 12s0 5.59.68 8.245c.38 1.468 1.494 2.625 2.908 3.02C6.698 24 17 24 17 24s10.33 0 12.912-.706c1.413-.395 2.528-1.553 2.909-3.021.679-2.683.679-8.245.679-8.245s.027-5.59-.68-8.273ZM13.71 17.14V6.86L22.3 12l-8.59 5.139Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <span className="max-w-[90px] group-hover:text-white">
                YouTube
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full text-[15px] leading-[25px] text-white-500">
        <div className="flex justify-center bg-lightGray w-full">
          <div className="flex justify-between items-center max-w-desktop-full w-full pt-[40px] pb-[40px] px-5 lg:pt-10 lg:flex-col lg:items-start lg:pb-5">
            <div className="flex items-center space-x-[50px] lg:space-x-0 lg:flex-col">
              <div className="flex flex-col space-y-[5px] max-w-[250px] w-full lg:order-2">
                <span>© 2024 All Rights Reserved </span>
                <a
                  className="text-white hover:text-white-900 hover:underline"
                  href="docs/cryptoglobal.pdf"
                >
                  Disclaimer
                </a>
              </div>
              <div className="flex space-x-3 lg:mb-10">
                <a
                  className="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"
                  target="_blank"
                  href="https://t.me/#/"
                >
                  <svg
                    className="h-4"
                    viewBox="0 0 32 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.788.94 1.102 11.92a1 1 0 0 0 .074 1.886l6.978 2.16 2.83 8.758a1 1 0 0 0 1.632.426l4.1-3.808 7.778 5.724a1 1 0 0 0 1.566-.578l5.414-23.234A2 2 0 0 0 28.788.941V.94ZM12.58 17.79l-.864 5.18-2-7.253 19.54-12.75-16.676 14.82v.002Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"
                  target="_blank"
                  href="https://t.me/#/"
                >
                  <svg
                    className="h-4"
                    viewBox="0 0 32 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.788.94 1.102 11.92a1 1 0 0 0 .074 1.886l6.978 2.16 2.83 8.758a1 1 0 0 0 1.632.426l4.1-3.808 7.778 5.724a1 1 0 0 0 1.566-.578l5.414-23.234A2 2 0 0 0 28.788.941V.94ZM12.58 17.79l-.864 5.18-2-7.253 19.54-12.75-16.676 14.82v.002Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"
                  target="_blank"
                  href="https://twitter.com/#/"
                >
                  <svg
                    className="h-4"
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.494 2.845c-1.104.488-2.275.81-3.474.956a6.074 6.074 0 0 0 2.66-3.35c-1.168.694-2.46 1.2-3.842 1.468a6.052 6.052 0 0 0-10.312 5.52A17.148 17.148 0 0 1 2.05 1.107a6.058 6.058 0 0 0 1.88 8.088 5.93 5.93 0 0 1-2.75-.756v.074a6.056 6.056 0 0 0 4.856 5.938 6.11 6.11 0 0 1-1.592.212c-.388 0-.768-.036-1.138-.112a6.062 6.062 0 0 0 5.658 4.206A12.134 12.134 0 0 1 0 21.263a16.918 16.918 0 0 0 9.262 2.738c11.144 0 17.232-9.23 17.232-17.238 0-.262-.008-.524-.02-.78a12.32 12.32 0 0 0 3.02-3.138Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"
                  target="_blank"
                  href="https://www.instagram.com/#/"
                >
                  <svg
                    className="h-4"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.756 0c2.497.004 2.987.022 4.206.078 1.383.063 2.328.283 3.155.604.855.333 1.58.777 2.303 1.5a6.372 6.372 0 0 1 1.5 2.303c.32.826.54 1.772.604 3.155.06 1.303.076 1.772.078 4.752v1.217c-.002 2.98-.019 3.449-.078 4.751-.063 1.384-.283 2.33-.605 3.156a6.372 6.372 0 0 1-1.5 2.303 6.373 6.373 0 0 1-2.302 1.5c-.827.32-1.772.54-3.155.604-1.261.057-1.742.075-4.471.078h-1.779c-2.73-.003-3.21-.02-4.47-.078-1.385-.063-2.33-.283-3.156-.604a6.374 6.374 0 0 1-2.303-1.5 6.373 6.373 0 0 1-1.5-2.303c-.321-.827-.54-1.772-.604-3.155-.056-1.22-.074-1.709-.077-4.206v-2.31C.605 9.348.623 8.86.679 7.64c.063-1.383.283-2.329.604-3.155a6.373 6.373 0 0 1 1.5-2.303 6.372 6.372 0 0 1 2.303-1.5C5.912.361 6.857.142 8.24.078 9.46.022 9.95.004 12.446 0h2.31Zm5.946 4.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm-7.1 1.5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=NCc3ODAG8zk"
                >
                  <svg
                    className="h-4"
                    viewBox="0 0 34 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.82 3.755c-.38-1.468-1.495-2.626-2.908-3.021C27.329 0 17 0 17 0S6.67 0 4.088.706c-1.386.395-2.528 1.581-2.908 3.05C.5 6.437.5 12 .5 12s0 5.59.68 8.245c.38 1.468 1.494 2.625 2.908 3.02C6.698 24 17 24 17 24s10.33 0 12.912-.706c1.413-.395 2.528-1.553 2.909-3.021.679-2.683.679-8.245.679-8.245s.027-5.59-.68-8.273ZM13.71 17.14V6.86L22.3 12l-8.59 5.139Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative group min-w-[175px] lg:min-w-max sm:hidden">
              <div className="flex justify-between items-center cursor-pointer p-4 group-hover:text-white">
                <div className="flex items-center space-x-2">
                  <img
                    src="flags/en.svg"
                    className="w-5 h-5 lg:mr-2.5"
                    alt=""
                  />
                  <span className="lg:hidden">English</span>
                </div>
                <svg
                  className="fill-current w-2.5 transition all easy-out group-hover:rotate-180"
                  viewBox="0 0 8 4"
                  fill="#8B8C8C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0H0l4 4 4-4Z"></path>
                </svg>
              </div>
              <ul className="w-full absolute bg-lightGray rounded-[15px] hidden group-hover:flex flex-col overflow-hidden drop-shadow-lg bottom-full !right-0">
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/en.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">English</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/de.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">German</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/es.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">Spanish</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/ru.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">Русский</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/fr.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">French</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/es.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">Spanish</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/it.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">Italian</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/az.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">AZƏRBAYCAN</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/ar.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">العربية</span>
                </li>
                <li className="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="flags/he.svg" className="w-5 h-5" alt="" />
                  <span className="lg:hidden">עִבְרִית</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
