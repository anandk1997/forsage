import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { LogoWhite } from "src/Assets/Svg";

const Dashboard = () => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("thecryptoglobal.io/b/xqg1z8")
      .then(() => toast.success("Text copied to clipboard!"))
      .catch((err) => {
        console.error("Could not copy text: ", err);
        toast.error("Failed to copy text to clipboard");
      });
  };

  return (
    <div className="flex flex-col w-full space-y-10 sm:space-y-5">
      <div className="flex w-full items-start justify-between space-x-10 lg:space-x-2.5 sm:space-x-0 sm:space-y-5 sm:flex-col sm:px-5">
        <div className="flex items-start flex-shrink-0 sm:flex-shrink sm:w-full">
          <div className="relative cursor-pointer rounded-full avatar_gradient p-1 sm:p-[5px] z-10">
            <div>
              <div className="z-10 flex-shrink-0 relative w-34 h-34 rounded-full bg-black-light cursor-pointer sm:w-[100px] sm:h-[100px]">
                <img
                  alt=""
                  className="max-w-full max-h-full"
                  src="https://busd.forsage.io/UnknownUser.png"
                />
              </div>
              <div className="flex justify-center items-center w-10 h-10 sm:w-7.5 sm:h-7.5 bg-status-gold rounded-full w-[36px] h-[36px] z-10 absolute right-0 bottom-2.5">
                <img
                  className="h-5 sm:h-3.5 fill-current text-gray"
                  src={LogoWhite}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start ml-6 h-full justify-center my-auto sm:w-full">
            <div className="flex justify-center items-center mb-1 sm:mb-2.5 sm:w-full sm:justify-between">
              <span className="text-white notranslate font-bold text-3xl mr-2.5 sm:text-xl cursor-pointer">
                ID 1
              </span>
            </div>
            <div className="flex flex-col items-start w-full sm:hidden">
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <div className="flex items-center mb-1">
                    <span className="text-white font-bold mr-2.5 text-base sm:text-sm">
                      0x14Dc...207F
                    </span>
                    <button>
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
            </div>
            <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-blue hover:bg-hover-main-blue active:bg-active-main-blue !w-full !py-0 !leading-[30px] !bg-[#242526] !text-[#9FA4B5] rounded-[16px] hidden sm:flex">
              <span className="min-w-[80px] mr-2.5">Show more</span>
              <svg
                className="w-2.5 h-2.5 transition-all"
                viewBox="0 0 12 10"
                stroke="#9FA4B5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 1.992 4.75 6.016L11 1.992"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col max-w-500px w-full sm:max-w-full space-y-2">
          <div className="relative flex flex-wrap flex-grow w-full h-full p-5 justify-between bg-blue-100 rounded z-10 sm:p-4">
            <div className="flex items-center mb-2 sm:justify-between sm:w-full sm:flex-wrap">
              <div className="flex items-center justify-between">
                <span className="text-white-500 text-base text-sm sm:text-xs">
                  Personal link
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
                </div>
              </div>
              <span className="hidden sm:block text-main-blue text-base font-bold notranslate">
                thecryptoglobal.io/b/xqg1z8
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-main-blue text-xl font-bold notranslate sm:hidden">
                thecryptoglobal.io/b/xqg1z8
              </span>
              <div className="flex space-x-2.5 sm:w-full">
                <button
                  className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none py-0 px-2.5 bg-main-blue text-white rounded !leading-30px hover:bg-hover-main-blue active:bg-active-main-blue !leading-30px sm:flex-1"
                  onClick={copyToClipboard}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-15 sm:mt-5 sm:px-5">
        <div className="flex w-full flex-wrap lg:flex-col">
          <div className="flex mr-2 space-x-2 lg:mr-0 lg:mt-10 sm:mt-5 sm:space-x-0 lg:order-3 sm:overflow-auto sm:w-full sm:flex-col sm:space-y-5">
            <div className="flex space-x-2 sm:space-x-5">
              <div className="lg:flex-grow sm:w-full sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                <img
                  className="h-[70%] sm:h-3/4 absolute bottom-0 right-0 z-[-11] sm:h-3/4 absolute bottom-0 right-0 z-[-11]"
                  src="https://busd.forsage.io/Partners.png"
                />
                <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                  <div className="flex items-center z-[10]">
                    <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                      Partners
                    </span>
                  </div>
                  <span className="text-white text-2xl font-bold notranslate sm:text-xl !mt-1 !sm:mt-2.5 mt-5 sm:mt-2.5">
                    22181
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
                      2
                    </div>
                    <img
                      src="https://busd.forsage.io/icons/activity_green.png"
                      className="ml-2.5 w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex-grow sm:w-full sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
                <img
                  className="h-[70%] sm:h-3/4 absolute bottom-0 right-0 z-[-11] sm:h-3/4 absolute bottom-0 right-0 z-[-11]"
                  src="https://busd.forsage.io/Team.png"
                />
                <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                  <div className="flex items-center z-[10]">
                    <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                      Team
                    </span>
                  </div>
                  <span className="text-white text-2xl font-bold notranslate sm:text-xl !mt-1 !sm:mt-2.5 mt-5 sm:mt-2.5">
                    1651994
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
                      464
                    </div>
                    <img
                      src="https://busd.forsage.io/icons/activity_green.png"
                      className="ml-2.5 w-6 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 lg:flex-0 sm:flex-0 h-full sm:max-w-full overflow-hidden w-full relative justify-start items-end bg-black-light rounded lg:max-w-full desktop-infoblock-chart-base">
            <div className="flex-shrink-0 relative flex flex-col bg-black-light rounded w-full">
              <img
                className="h-full absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
                src="https://busd.forsage.io/bnbBusd.png"
                alt=""
              />
              <div className="flex flex-col px-5 py-5 w-full">
                <div className="flex items-center mb-1">
                  <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                    Profits
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-1 w-full text-white text-2xl font-bold notranslate sm:text-xl !mt-1 !sm:mt-2.5 mt-5 sm:mt-2.5">
                    1116069 USDT
                  </div>
                  <div className="flex p-1.5">
                    <div className="w-full text-green-light flex text-base items-center justify-end notranslate sm:text-sm">
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
                        15
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden">
          <span>00:00:00:00</span>
        </div>
      </div>
      <div className="mainTreeBox">
        <h3 className="mainText2">
          Please don't refresh or go back until your transaction is Successfully
          submitted. We are not responsible for any financial lose{" "}
        </h3>
        <span className="text-white text-3xl font-bold sm:text-2xl mr-2.5">
          <span className="notranslate mr-1.5">Working Program</span>
        </span>
        <div className="min-h-[125px] mt-10 px-2.5 py-1.5 sm:pb-5 w-full rounded bg-white-30 items-center justify-between flex flex-row sm:w-full sm:flex-col sm:rounded-none relative sm:space-y-2.5">
          <div className="flex items-center justify-evenly w-full">
            <div className="tree____">
              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 20 </span>
                </button>
              </a>

              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 50 </span>
                </button>
              </a>

              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 100 </span>
                </button>
              </a>

              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 200 </span>
                </button>
              </a>

              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 500 </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <h3 className="mainText">
          Please don't refresh or go back until your transaction is Successfully
          submitted. We are not responsible for any financial lose{" "}
        </h3>
        <span className="text-white text-3xl font-bold sm:text-2xl mr-2.5">
          <span className="notranslate mr-1.5">Matrix Program</span>
        </span>
        <div className="min-h-[125px] mt-10 px-2.5 py-1.5 sm:pb-5 w-full rounded bg-white-30 items-center justify-between flex flex-row sm:w-full sm:flex-col sm:rounded-none relative sm:space-y-2.5">
          <div className="flex items-center justify-evenly w-full">
            <input
              type="hidden"
              className="form-control"
              id="wallet_addresss"
              name="wallet_addresss"
            />
            <div className="tree____">
              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 10 </span>
                </button>
              </a>

              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 50 </span>
                </button>
              </a>

              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 100 </span>
                </button>
              </a>

              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 200 </span>
                </button>
              </a>

              <a className="aTag">
                <button
                  type="button"
                  className="btn btn-info btn-lg bx activated"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span> $ 500 </span>
                </button>
              </a>
            </div>

            <div className="modal">
              <div className="modal-content">
                <span className="close-button">×</span>
                <h1>
                  {" "}
                  <a href="https://thecryptoglobal.io/stake/Dashboard/Activation">
                    <button className="customButton">
                      Please activate Your Account First
                    </button>
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notranslate flex flex-col mt-15 sm:px-5">
        <div className="flex items-center false">
          <span className="text-white text-3xl font-bold sm:text-2xl mr-2.5">
            <span>
              <span className="notranslate mr-1.5"> The Crypto Global </span>
              Program
            </span>
          </span>
        </div>
        <div className="grid w-full gap-10 mt-8 grid-cols-2 sm:grid-cols-1">
          <NavLink
            to="/dashboard/x3"
            className="relative flex flex-col p-7.5 w-full bg-gray rounded z-10 overflow-hidden justify-between min-h-programDashboard sm:p-5 sm:min-h-programDashboardMobile"
          >
            <svg
              className="absolute top-2 right-2 sm:top-1 sm:right-1"
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
            <div className="flex justify-between w-full z-10">
              <div className="flex items-center">
                <span className="text-white text-2xl notranslate font-bold justify-start sm:text-xl false">
                  x3
                </span>
              </div>
              <span className="text-white text-2xl font-bold justify-end text-right notranslate sm:text-xl">
                368715 USDT
              </span>
            </div>
            <div className="flex justify-between h-full w-full">
              <div className="flex justify-between w-full z-10 sm:flex-col mt-5 w-full items-end">
                <div className="flex w-5/12 h-full flex-col items-start justify-end sm:w-full flex-wrap sm:mb-7.5">
                  <div className="flex flex-wrap -m-1">
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                  </div>
                </div>
                <div className="flex flex-col h-full relative justify-end sm:w-full sm:items-center">
                  <div className="flex sm:w-full">
                    <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-blue hover:bg-hover-main-blue active:bg-active-main-blue z-0 sm:w-full pointer-events-none text-white">
                      <div className="flex flex-col space-y-1 items-start">
                        <div className="flex items-center">
                          Preview
                          <svg
                            className="ml-3 fill-current"
                            width="16"
                            height="16"
                            fill="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-4.646-2.854A.5.5 0 0 1 11 5.5v5a.5.5 0 0 1-1 0V6.707l-4.146 4.147a.5.5 0 0 1-.708-.708L9.293 6H5.5a.5.5 0 0 1 0-1h5c.138 0 .263.056.354.146Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute w-full h-full inset-0"
              style={{
                backgroundImage: "url('/blurs/dashboard/blue-blur.png')",
                backgroundRepeat: "round",
                backgroundSize: "cover",
              }}
            ></div>
          </NavLink>

          <NavLink
            to="/dashboard/xGold"
            className="relative flex flex-col p-7.5 w-full bg-gray rounded z-10 overflow-hidden justify-between min-h-programDashboard sm:p-5 sm:min-h-programDashboardMobile"
          >
            <svg
              className="absolute top-2 right-2 sm:top-1 sm:right-1"
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
            <div className="flex justify-between w-full z-10">
              <div className="flex items-center">
                <span className="text-white text-2xl notranslate font-bold justify-start sm:text-xl false">
                  xGold
                </span>
              </div>
              <span className="text-white text-2xl font-bold justify-end text-right notranslate sm:text-xl">
                162135 USDT
              </span>
            </div>
            <div className="flex justify-between h-full w-full">
              <div className="flex justify-between w-full z-10 sm:flex-col mt-5 w-full items-end">
                <div className="flex w-5/12 h-full flex-col items-start justify-end sm:w-full flex-wrap sm:mb-7.5">
                  <div className="flex flex-wrap -m-1">
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                    <div className="flex items-center justify-center m-1 w-7.5 h-7.5 rounded-md bg-main-blue"></div>
                  </div>
                </div>
                <div className="flex flex-col h-full relative justify-end sm:w-full sm:items-center">
                  <div className="flex sm:w-full">
                    <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-orange hover:bg-hover-orange active:bg-active-orange z-0 sm:w-full pointer-events-none text-white">
                      <div className="flex flex-col space-y-1 items-start">
                        <div className="flex items-center">
                          Preview
                          <svg
                            className="ml-3 fill-current"
                            width="16"
                            height="16"
                            fill="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-4.646-2.854A.5.5 0 0 1 11 5.5v5a.5.5 0 0 1-1 0V6.707l-4.146 4.147a.5.5 0 0 1-.708-.708L9.293 6H5.5a.5.5 0 0 1 0-1h5c.138 0 .263.056.354.146Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute w-full h-full inset-0"
              style={{
                backgroundImage: "url('/blurs/dashboard/gold-blur.png')",
                backgroundRepeat: "round",
                backgroundSize: "cover",
              }}
            ></div>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center sm:px-5">
          <span className="text-white text-3xl font-bold sm:text-2xl">
            Platform recent activity
          </span>
          <div className="relative group">
            <button
              className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none ml-1.5"
              data-tip="false"
              data-for="Platform recent activity"
              title="The Crypto Global USDT real-time global events with links to transactions in
              blockchain"
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
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-5 lg:grid-cols-1 lg:gap-0 z-10">
          <div className="notranslate w-full overflow-hidden flex flex-col col-span-2 p-5 bg-gray rounded h-[1000px] lg:order-2 sm:rounded-none sm:p-5 sm:max-h-3/4">
            <div className="flex -mr-10 pr-10 flex-col flex-1 overflow-auto">
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
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
                        fillOpacity=".5"
                      ></path>
                      <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max false"
                      href="/dashboard?user=350025"
                    >
                      ID 350025
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        +
                      </span>
                      <span className="text-white text-base sm:text-sm mx-1 notranslate sm:leading-30px">
                        0.012 BNB{" "}
                      </span>
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        in
                        <span className="notranslate text-cyan-100">xQore</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0x6237cab12c8ad765173ed1647c4e9ec49a4ae48aa569f59c81953d64a21220bc"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      2 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
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
                        fillOpacity=".5"
                      ></path>
                      <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max false"
                      href="/dashboard?user=1393891"
                    >
                      ID 1393891
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        +
                      </span>
                      <span className="text-white text-base sm:text-sm mx-1 notranslate sm:leading-30px">
                        0.012 BNB{" "}
                      </span>
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        in
                        <span className="notranslate text-cyan-100">xQore</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0x6237cab12c8ad765173ed1647c4e9ec49a4ae48aa569f59c81953d64a21220bc"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      2 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
                  <div className="bg-white-100 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="fill-current text-white w-5 h-5"
                      width="20"
                      height="20"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.5 9.167a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM2.5 17.5v-2.667A3.333 3.333 0 0 1 5.833 11.5h3.334a3.333 3.333 0 0 1 3.333 3.333V17.5"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.833 6.167a.5.5 0 0 1 .5.5v2h2a.5.5 0 1 1 0 1h-2v2a.5.5 0 1 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 .5-.5Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max order-2"
                      href="/dashboard?user=1652001"
                    >
                      ID 1652001
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 ml-0">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        new user joined
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0x82c774d35cf50377149f23f2e272353f2bd55d49069f8fb4ecca30de9a924e5b"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      3 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
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
                        fillOpacity=".5"
                      ></path>
                      <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max false"
                      href="/dashboard?user=1648071"
                    >
                      ID 1648071
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        +
                      </span>
                      <span className="text-white text-base sm:text-sm mx-1 notranslate sm:leading-30px">
                        5 USDT{" "}
                      </span>
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        in
                        <span className="notranslate text-light-purple">
                          x4
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0x82c774d35cf50377149f23f2e272353f2bd55d49069f8fb4ecca30de9a924e5b"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      3 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
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
                        fillOpacity=".5"
                      ></path>
                      <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max false"
                      href="/dashboard?user=1651121"
                    >
                      ID 1651121
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        +
                      </span>
                      <span className="text-white text-base sm:text-sm mx-1 notranslate sm:leading-30px">
                        5 USDT{" "}
                      </span>
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        in
                        <span className="notranslate text-main-blue">x3</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0x82c774d35cf50377149f23f2e272353f2bd55d49069f8fb4ecca30de9a924e5b"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      3 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
                  <div className="bg-cyan-400 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="fill-current text-cyan-100 w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"
                        fillOpacity=".3"
                      ></path>
                      <path
                        d="M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                        fillOpacity=".3"
                      ></path>
                      <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max false"
                      href="/dashboard?user=1632095"
                    >
                      ID 1632095
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        activates
                      </span>
                      <span className="text-white text-base sm:text-sm sm:leading-30px">
                        &nbsp;
                        <span className="notranslate text-cyan-100">xQore</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0x363036e615aa726492a5327dff797146b0a067f2d217a4921947460d54564259"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      3 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
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
                        fillOpacity=".5"
                      ></path>
                      <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max false"
                      href="/dashboard?user=1597856"
                    >
                      ID 1597856
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        +
                      </span>
                      <span className="text-white text-base sm:text-sm mx-1 notranslate sm:leading-30px">
                        0.009 BNB{" "}
                      </span>
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        in
                        <span className="notranslate text-cyan-100">xQore</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0x363036e615aa726492a5327dff797146b0a067f2d217a4921947460d54564259"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      3 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
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
                        fillOpacity=".5"
                      ></path>
                      <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max false"
                      href="/dashboard?user=1567404"
                    >
                      ID 1567404
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        +
                      </span>
                      <span className="text-white text-base sm:text-sm mx-1 notranslate sm:leading-30px">
                        0.009 BNB{" "}
                      </span>
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        in
                        <span className="notranslate text-cyan-100">xQore</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0x363036e615aa726492a5327dff797146b0a067f2d217a4921947460d54564259"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      3 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
                  <div className="bg-white-100 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="fill-current text-white w-5 h-5"
                      width="20"
                      height="20"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.5 9.167a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM2.5 17.5v-2.667A3.333 3.333 0 0 1 5.833 11.5h3.334a3.333 3.333 0 0 1 3.333 3.333V17.5"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.833 6.167a.5.5 0 0 1 .5.5v2h2a.5.5 0 1 1 0 1h-2v2a.5.5 0 1 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 .5-.5Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max order-2"
                      href="/dashboard?user=1652000"
                    >
                      ID 1652000
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 ml-0">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        new user joined
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0xd6dae201126d510f3cf06cb84b2fee0351dc79b1f6a0b94e4bc4ab4f3e7a49c7"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      6 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
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
                        fillOpacity=".5"
                      ></path>
                      <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max false"
                      href="/dashboard?user=1647115"
                    >
                      ID 1647115
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        +
                      </span>
                      <span className="text-white text-base sm:text-sm mx-1 notranslate sm:leading-30px">
                        5 USDT{" "}
                      </span>
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        in
                        <span className="notranslate text-light-purple">
                          x4
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0xd6dae201126d510f3cf06cb84b2fee0351dc79b1f6a0b94e4bc4ab4f3e7a49c7"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      6 minutes
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                <div className="flex items-center sm:items-start justify-start sm:w-full">
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
                        fillOpacity=".5"
                      ></path>
                      <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                    <a
                      className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max false"
                      href="/dashboard?user=1647115"
                    >
                      ID 1647115
                    </a>
                    <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        +
                      </span>
                      <span className="text-white text-base sm:text-sm mx-1 notranslate sm:leading-30px">
                        5 USDT{" "}
                      </span>
                      <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                        in
                        <span className="notranslate text-main-blue">x3</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-end whitespace-nowrap h-full">
                    <a
                      className="sm:order-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://bscscan.com/tx/0xd6dae201126d510f3cf06cb84b2fee0351dc79b1f6a0b94e4bc4ab4f3e7a49c7"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <span className="ml-2.5 text-white-500 text-base sm:text-sm sm:order-1 sm:ml-2.5 sm:mr-1 sm:leading-30px">
                      7 minutes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 w-full rounded-mini mt-5 flex justify-center items-center">
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
              See more
            </button>
          </div>
          <div className="flex flex-col space-y-10 lg:w-full lg:order-1 lg:mb-10 sm:mb-5 sm:space-y-5 sm:px-5">
            <div className="sm:mobile-infoblock-base flex flex-col bg-black-light rounded relative z-[11] overflow-hidden desktop-infoblock-base sm:mobile-infoblock-base">
              <div className="flex flex-col px-5 pt-5 w-full relative sm:justify-between sm:items-start">
                <div className="flex items-center z-[10]">
                  <span className="text-white-500 text-base sm:text-sm sm:whitespace-nowrap">
                    Members total
                  </span>
                  <div className="relative group">
                    <button
                      className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none ml-1.5"
                      data-tip="true"
                      data-for="Members total"
                      title="Total number of members in The Crypto Global USDT and last 24 hours
                      change"
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
                  </div>
                </div>
                <span className="text-white text-2xl font-bold notranslate sm:text-xl false mt-5 sm:mt-2.5">
                  1652000
                </span>
              </div>
              <div className="p-5 pt-0 flex text-green-light text-base items-baseline notranslate sm:text-sm">
                <svg
                  className="mr-1.5"
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
                469
              </div>
            </div>
            <div className="bg-gray rounded p-5 flex flex-col max-w-full">
              <span className="inline-flex items-center text-base text-white-500 sm:text-sm">
                Members received
                <div className="relative group">
                  <button
                    className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none ml-1.5"
                    data-tip="true"
                    data-for="Members received"
                    title="Total amount received by all members of The Crypto Global
                   and last 24 hours change"
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

                  {/* <div
                    className="__react_component_tooltip t7d926c16-0e54-402d-b1ed-1a57b630d327 place-bottom type-dark"
                    id="Members received"
                    data-id="tooltip"
                  >
                    Total amount received by all members of Forsage and last 24
                    hours change
                  </div> */}
                </div>
              </span>
              <div className="flex flex-col py-2.5 border-b border-white-100 space-y-1.5 last:border-0 last:pb-0">
                <span className="text-2xl text-white font-bold sm:text-xl">
                  147273343.76 USDT
                </span>
                <span className="text-green-light text-base items-baseline sm:text-sm">
                  + 13276.3 USDT
                </span>
              </div>
             
            </div>
            <div className="bg-gray rounded p-5 flex flex-col flex-1 max-w-full">
              <div className="flex justify-between items-center text-base text-white-500 sm:text-sm">
                <span>The Crypto Global USDT Contracts</span>
                <button className="rounded-full h-5 w-5 justify-center items-center bg-main-blue hidden lg:flex">
                  <svg
                    className="stroke-current text-white"
                    width="8"
                    height="4"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4 0 0h8L4 4Z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col flex-1 justify-between lg:hidden">
                <div className="flex flex-col border-t border-b border-white-100 pb-2.5 mt-2.5">
                  <div className="flex justify-between items-center py-2.5 border-b border-white-100 space-y-1.5 last:border-0 last:pb-0">
                    <span className="text-base text-white-500 notranslate sm:text-sm">
                      Matrix
                    </span>
                    <div className="flex justify-end items-center space-x-2.5">
                      <span className="text-base text-white notranslate sm:text-sm">
                        0x5ac...B97
                      </span>
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
                        href="https://bscscan.com/address/0x5acc84a3e955bdd76467d3348077d003f00ffb97"
                      >
                        <svg
                          className="h-18px w-18px"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.314 3.813a3.446 3.446 0 1 1 4.873 4.874l-3.331 3.331a3.418 3.418 0 0 1-4.88-.001.5.5 0 0 1 .715-.7 2.417 2.417 0 0 0 3.452 0l.004-.004L15.48 7.98a2.446 2.446 0 1 0-3.46-3.46l-.416.417a.5.5 0 1 1-.707-.707l.417-.417Z"
                            fill="#fff"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.26 7.225a3.417 3.417 0 0 1 3.765.758.5.5 0 0 1-.715.7 2.417 2.417 0 0 0-3.452 0l-.003.004L4.52 12.02a2.446 2.446 0 0 0 3.46 3.46l.416-.417a.5.5 0 1 1 .708.707l-.417.417a3.446 3.446 0 1 1-4.874-4.874l3.332-3.332a3.417 3.417 0 0 1 1.115-.756Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white-100 space-y-1.5 last:border-0 last:pb-0">
                    <span className="text-base text-white-500 notranslate sm:text-sm">
                      Working
                    </span>
                    <div className="flex justify-end items-center space-x-2.5">
                      <span className="text-base text-white notranslate sm:text-sm">
                        0x2CA...e52
                      </span>
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
                        href="https://bscscan.com/address/0x2caa4694cb7daf7d49a198dc1103c06d4991ae52"
                      >
                        <svg
                          className="h-18px w-18px"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.314 3.813a3.446 3.446 0 1 1 4.873 4.874l-3.331 3.331a3.418 3.418 0 0 1-4.88-.001.5.5 0 0 1 .715-.7 2.417 2.417 0 0 0 3.452 0l.004-.004L15.48 7.98a2.446 2.446 0 1 0-3.46-3.46l-.416.417a.5.5 0 1 1-.707-.707l.417-.417Z"
                            fill="#fff"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.26 7.225a3.417 3.417 0 0 1 3.765.758.5.5 0 0 1-.715.7 2.417 2.417 0 0 0-3.452 0l-.003.004L4.52 12.02a2.446 2.446 0 0 0 3.46 3.46l.416-.417a.5.5 0 1 1 .708.707l-.417.417a3.446 3.446 0 1 1-4.874-4.874l3.332-3.332a3.417 3.417 0 0 1 1.115-.756Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2.5 mt-auto">
                  <div className="flex flex-col py-2.5 border-b border-white-100 space-y-1.5 last:border-0 last:pb-0">
                    <span className="text-base text-white-500 sm:text-sm">
                      Transactions made
                    </span>
                    <span className="text-2xl text-white font-bold sm:text-xl">
                      5817992
                    </span>
                    <span className="text-green-light text-base items-baseline sm:text-sm">
                      + 993
                    </span>
                  </div>
                  <div className="flex flex-col py-2.5 border-b border-white-100 space-y-1.5 last:border-0 last:pb-0">
                    <span className="text-base text-white-500 sm:text-sm">
                      <span>
                        Turnover,
                        <span className="notranslate">USDT</span>
                      </span>
                    </span>
                    <span className="text-2xl text-white font-bold sm:text-xl">
                      294546687.52
                    </span>
                    <span className="text-green-light text-base items-baseline sm:text-sm">
                      + 26552.6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden">
            <span>00:00:00:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
