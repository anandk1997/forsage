import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LogoGreen } from "src/Assets/Svg";
import { Logo } from "src/Components/Logo";

import { Social } from "src/Components/Social";
import { Web3 } from "web3";
const Login = () => {
  const navigate = useNavigate();

  const [connectedAccount, setConnectedAccount] = useState("null");
  async function connectMetamask() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      setConnectedAccount(accounts[0]);
    } else {
      alert("Please download metamask");
    }
  }

  async function callLogin() {
    // address here
    console.log("address", connectedAccount);
    // call api for login
  }


  useEffect(() => {
    connectMetamask();
  }, []);
  return (

    <div className="flex relative bg-main-bg flex-col items-center justify-center w-full min-h-screen text-white-500 px-10 sm:px-0 overflow-hidden pt-16">
      <header className="fixed top-0 w-full pb-2.5 pt-2.5 px-10 z-[2147483602] bg-transparent sm:px-5 lg:border-b lg:border-white-100 z-[999]">
        <nav className="z-10 w-full max-w-desktop-preview-bar m-auto header-border-b">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <svg
                className="hidden lg:block"
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
            <Logo src={LogoGreen} />

            <div className="flex justify-end items-center ml-auto">
              <button
                className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-2.5 bg-black-light hover:bg-line-gray active:bg-active-gray text-white font-normal rounded items-center"
                onClick={connectMetamask}
              >
                {connectedAccount !== "null" && "Connected"}
                {connectedAccount === "null" && "Connect wallet"}
              </button>
            </div>
          </div>
        </nav>
        <div className="hidden justify-start items-start bg-main-bg pb-5 pt-7.5 transition duration-500 ease-in-out bg-main-bg absolute top-0 left-0 z-20 inset-0 h-screen w-screen z-999999 -translate-x-120% lg:flex flex-col lg:py-2.5">
          <div
            className="w-full flex flex-col flex-1"
            // style="height: 972px"
          >
            <div className="flex justify-between items-center w-full px-10 sm:px-5">
              <NavLink to="/">
                <svg
                  className="block mr-2.5"
                  width="163"
                  height="30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.732 21.907h2.61l2.062-4.44h11.08l1.097-2.374H49.894l-3.162 6.814ZM65.558 10.839h-13.69L50.772 13.2H64.46l1.097-2.362ZM143.239 21.874v.033l13.689-.033 1.097-2.362h-11.061l.947-2.046h11.08l1.096-2.373H146.4l-3.161 6.78ZM148.375 10.839l-1.097 2.362h13.69l1.096-2.362h-13.689ZM77.976 13.2l-2.91 6.311-8.473-.01 2.924-6.3h8.459Zm2.617 0a1.663 1.663 0 0 0-1.513-2.361h-8.474c-1.59 0-3.033.918-3.703 2.362l-2.066 4.451h.008l-.858 1.86h-.005a1.665 1.665 0 0 0 1.514 2.362h8.474c1.59 0 3.034-.919 3.703-2.363l2.913-6.31h.007ZM127.333 10.839h-8.474c-1.59 0-3.033.918-3.703 2.362h11.073l-.906 1.968h-11.08l-1.151 2.483-.855 1.86s-1.075 2.318-1.091 2.35l-.006.012h2.61l1.096-2.363.914-1.968h8.47l-2.004 4.33h2.57l4.044-8.672h.008a1.665 1.665 0 0 0-1.515-2.362ZM135.174 15.093l-1.096 2.373h6.254l-.519 1.116c-.259.569-.823.93-1.444.93l-6.602-.011a.537.537 0 0 1-.493-.766l2.138-4.615c.26-.558.822-.919 1.44-.919l10.067-.01c.498-1.105 0 0 1.108-2.352H134.93c-1.59 0-3.038.919-3.708 2.362l-2.061 4.452h.003l-.858 1.859a1.663 1.663 0 0 0 1.513 2.362h8.47a4.08 4.08 0 0 0 3.706-2.362l2.037-4.418h-8.858ZM109.652 15.17h-8.914l.915-1.97h11.076c1.115-2.361-.007 0 1.115-2.361h-11.098A4.076 4.076 0 0 0 99.04 13.2l-1.094 2.417a1.356 1.356 0 0 0 1.228 1.925h8.938l-.91 1.968H96.119c-.509 1.105 0 0-1.134 2.363h11.12a4.077 4.077 0 0 0 3.704-2.363s1.173-2.504 1.195-2.592a1.4 1.4 0 0 0-1.352-1.75ZM95.15 10.839H84.032L82.948 13.2h11.094l-.907 1.968h-11.09l-1.137 2.483-1.952 4.222h2.61l2.007-4.331h4.939l1.597 4.364h2.582l-1.565-4.364h1.195a3.605 3.605 0 0 0 3.282-2.133l1.05-2.209h.007a1.662 1.662 0 0 0-1.51-2.362ZM37.68 5.851a.482.482 0 0 1 .615.296l.43 1.247s-1.852-.59-2.818-.777l1.773-.766Zm6.055 3.336c-.004 0-.195-.131-.297-.186l-3.111-1.586c-.965-.46-.752-.82-1.118-1.826a6.228 6.228 0 0 0-.549-1.127C36.884 3.62 31.836 3.817 31.354 0c0 0-1.884 1.236-2.227 3.5C9.227 1.98 0 12.96 0 12.96c3.706-1.476 7.705-2.176 11.704-2.362-7.603 5.851-9.997 14.666-9.997 14.666s6.16-5.982 15.419-9.318C14.702 19.37 13.298 23.963 13.872 30c0 0 4.763-18.177 27.361-13.78 0 0 .827-2.417 2.962-4.89.135-.152.211-.382.227-.645a1.735 1.735 0 0 0-.687-1.498Z"
                    fill="#fff"
                  ></path>
                </svg>
              </NavLink>
              <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-0 py-0 bg-black-light rounded-full w-10 h-10 hover:bg-line-gray active:bg-active-gray hidden lg:flex flex-col">
                <span className="w-4 border-t border-white -mb-px rotate-45"></span>
                <span className="w-4 border-t border-white -rotate-45"></span>
              </button>
            </div>
            <div className="w-full h-full pl-10 pr-7.5 lg:pr-0 lg:pl-10 sm:pl-5 overflow-auto">
              <div className="flex flex-1 flex-col h-full w-full overflow-y-auto space-y-2.5 lg:space-y-0">
                <div className="flex flex-1 flex-col w-full h-full overflow-y-auto space-y-2.5 lg:space-y-0 lg:mb-5 sm:mb-[50px]">
                  <a href="/dashboard">
                    <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                      <div className="flex items-center text-left">
                        <svg
                          className="w-6 h-6 stroke-current text-white-500"
                          viewBox="0 0 24 24"
                          stroke="#fff"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 4H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM19 4h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM9 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM19 14h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="text-white-500 text-base ml-2.5 false">
                          Dashboard
                        </span>
                      </div>
                    </button>
                  </a>
                  <div className=" bg-black-light lg:bg-transparent lg:!pb-0 min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
                    <div className="flex p-2.5 lg:px-0 lg:py-5">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8B8C8C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.494 14.195c1.236.207 2.597-.01 3.553-.648 1.27-.846 1.27-2.232 0-3.078-.965-.639-2.345-.855-3.58-.639m-8.961 4.365c-1.236.207-2.597-.01-3.553-.648-1.27-.846-1.27-2.232 0-3.078.965-.639 2.345-.855 3.58-.639m9.89-2.187a2.322 2.322 0 0 1-1.76-.71 2.313 2.313 0 0 1-.647-1.611A2.318 2.318 0 0 1 17.342 3a2.328 2.328 0 0 1 2.326 2.322 2.327 2.327 0 0 1-2.245 2.321Zm-10.846 0a.547.547 0 0 1 .171 0A2.322 2.322 0 0 0 6.658 3c-.617 0-1.208.245-1.645.68a2.32 2.32 0 0 0-.68 1.642c.008 1.26 1 2.276 2.244 2.321Zm5.437 6.723a.547.547 0 0 0-.172 0 2.313 2.313 0 0 1-2.236-2.322 2.318 2.318 0 0 1 2.326-2.322c.617 0 1.209.245 1.645.68a2.32 2.32 0 0 1 .681 1.642c-.009 1.26-1 2.286-2.244 2.322ZM9.39 17.2c-1.271.846-1.271 2.232 0 3.078 1.442.963 3.805.963 5.247 0 1.271-.846 1.271-2.232 0-3.078-1.433-.954-3.805-.954-5.247 0Z"></path>
                      </svg>
                      <span className="text-[#8B8C8C] text-base ml-2.5 lg:text-white-500">
                        Team
                      </span>
                      <svg
                        className="ml-auto lg:mr-5 rotate-180"
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m8 11 4 4 4-4"
                          stroke="#8B8C8C"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="border-solid border-[1px] border-[#363738] lg:hidden mx-2.5"></div>
                    <div className="flex flex-col p-2.5 lg:py-0 lg:pr-0">
                      <a href="/partners">
                        <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                          <div className="flex items-center text-left">
                            <svg
                              className="w-6 h-6 stroke-current text-white-500"
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                                strokeWidth="1.333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="text-white-500 text-base ml-2.5 false">
                              Partners
                            </span>
                          </div>
                        </button>
                      </a>
                      <a href="/links">
                        <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                          <div className="flex items-center text-left">
                            <svg
                              className="w-6 h-6 stroke-current text-white-500"
                              data-name="a239fe10-42dc-4f9c-ab1f-bcabd992189e"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 15.16 19.14"
                            >
                              <path
                                d="M7 9.17a4.42 4.42 0 0 0 4.5-4.33A4.42 4.42 0 0 0 7 .5h0a4.43 4.43 0 0 0-4.5 4.34A4.42 4.42 0 0 0 7 9.17Z"
                                fill="none"
                                stroke="#969797"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M10.23 13.3a1.93 1.93 0 0 1 1.49 0 2 2 0 0 1 .63.43.3.3 0 0 1 0 .41.27.27 0 0 1-.4 0 1.37 1.37 0 0 0-.45-.3 1.31 1.31 0 0 0-.52-.11 1.42 1.42 0 0 0-1 .41l-1.85 1.91a1.4 1.4 0 0 0 0 2 1.36 1.36 0 0 0 1 .41 1.35 1.35 0 0 0 1-.41l.24-.24a.28.28 0 0 1 .4 0 .3.3 0 0 1 0 .41l-.24.24a1.93 1.93 0 0 1-2.74 0 2 2 0 0 1 0-2.8l1.81-1.93a2.08 2.08 0 0 1 .63-.43Z"
                                fill="#969797"
                                stroke="#969797"
                                strokeMiterlimit="10"
                                strokeWidth=".25"
                                fillRule="evenodd"
                              ></path>
                              <path
                                d="M.5 18.55v-2a4.15 4.15 0 0 1 1.08-2.83 3.51 3.51 0 0 1 2.59-1.17H7.5"
                                fill="none"
                                stroke="#969797"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M11.76 11.73a1.88 1.88 0 0 1 2.72 0 2 2 0 0 1 0 2.79l-1.86 1.91a2.06 2.06 0 0 1-.62.44 1.9 1.9 0 0 1-1.48 0 2.06 2.06 0 0 1-.62-.44.28.28 0 0 1 0-.4.28.28 0 0 1 .4 0 1.25 1.25 0 0 0 .44.31 1.28 1.28 0 0 0 1 0 1.25 1.25 0 0 0 .44-.31l1.86-1.91a1.44 1.44 0 0 0 0-2 1.34 1.34 0 0 0-1-.41 1.38 1.38 0 0 0-1 .41l-.23.24a.27.27 0 0 1-.39 0 .28.28 0 0 1 0-.4Z"
                                fill="#969797"
                                stroke="#969797"
                                strokeMiterlimit="10"
                                strokeWidth=".25"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            <span className="text-white-500 text-base ml-2.5 false">
                              Links
                            </span>
                          </div>
                        </button>
                      </a>
                      <a href="/stats">
                        <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                          <div className="flex items-center text-left">
                            <svg
                              className="w-6 h-6 stroke-current text-white-500"
                              viewBox="0 0 24 24"
                              stroke="#fff"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 12h5m-9-9v5-5ZM8.929 14.582 5.5 17.5M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="text-white-500 text-base ml-2.5 false">
                              Stats
                            </span>
                          </div>
                        </button>
                      </a>
                      <a href="/messages">
                        <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                          <div className="flex items-center text-left">
                            <svg
                              className="w-6 h-6 stroke-current text-white-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m3 20 1.3-3.9c-1.124-1.662-1.53-3.63-1.144-5.538.386-1.908 1.54-3.626 3.244-4.836 1.704-1.21 3.845-1.827 6.024-1.739 2.179.089 4.248.877 5.821 2.22 1.574 1.342 2.546 3.147 2.735 5.078.19 1.931-.417 3.858-1.706 5.422-1.29 1.564-3.173 2.659-5.302 3.08-2.13.422-4.358.142-6.272-.787L3 20"
                                stroke="#fff"
                                strokeOpacity=".5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M12 12v.01M8 12v.01M16 12v.01"
                                stroke="#fff"
                                strokeOpacity=".5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="text-white-500 text-base ml-2.5 false">
                              Messages
                            </span>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                  <a href="/MaxQoreMarathon">
                    <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                      <div className="flex items-center text-left">
                        <svg
                          className="w-6 h-6 stroke-current text-white-500"
                          viewBox="0 0 24 24"
                        >
                          {/* <style>
                              .st1 {
                                fill: none;
                                stroke: #adadad;
                                strokeLinecap: round;
                                strokeLinejoin: round;
                                strokeMiterlimit: 10;
                              }
                            </style> */}
                          <path
                            d="m11.6 3.4 8.6 9.1c.7.7.4 1.9-.5 2.3L5.7 21c-.6.3-1.2.1-1.7-.4l-1.4-1.5c-.4-.4-.5-1.1-.2-1.6L9.2 3.8c.4-.9 1.7-1.1 2.4-.4z"
                            //   style="
                            //     fill: none;
                            //     stroke: rgb(173, 173, 173);
                            //     strokeMiterlimit: 10;
                            //   "
                          ></path>
                          <path
                            className="st1"
                            d="m15.6 3.7.6-1.9M19.7 7.8h2M18 5.4 20.4 3M7.5 20.4c.6 1.2 1.8 2 3.2 2 2 0 3.6-1.6 3.6-3.6 0-.4-.1-.9-.2-1.3"
                          ></path>
                        </svg>
                        <span className="text-white-500 text-base ml-2.5 false">
                          Marathon
                        </span>
                      </div>
                    </button>
                  </a>
                  <a href="/social">
                    <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                      <div className="flex items-center text-left">
                        <svg
                          className="w-6 h-6 stroke-current text-white-500"
                          width="24"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 11.78C22 6.405 17.566 2 11.955 2S2 6.317 2 11.78a9.449 9.449 0 0 0 2.896 6.872C4.806 19.797 4.715 22 4.715 22s2.443-.97 3.258-1.322c1.267.53 2.534.793 3.982.793 5.61 0 10.045-4.317 10.045-9.691Z"
                            stroke="#969797"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 14.4c3.314 0 6-1.075 6-2.4s-2.686-2.4-6-2.4-6 1.075-6 2.4 2.686 2.4 6 2.4Z"
                            stroke="#969797"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M15.275 11.962c0 3.314-1.325 5.962-3.275 6.038-2.025-.076-3.35-2.724-3.35-6.038S9.975 6 12 6c2.025 0 3.275 2.648 3.275 5.962Z"
                            stroke="#969797"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path d="M11.962 6v11.924" stroke="#969797"></path>
                          <path
                            d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                            stroke="#969797"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="text-white-500 text-base ml-2.5 false">
                          Social
                        </span>
                        <span className="absolute top-1 right-1.5 text-green text-sm lg:bg-green-200 lg:px-2.5 lg:py-1 lg:rounded lg:top-1/2 lg:-translate-y-1/2 lg:right-5">
                          New
                        </span>
                      </div>
                    </button>
                  </a>
                  <a href="/nft">
                    <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                      <div className="flex items-center text-left">
                        <svg
                          className="w-6 h-6 stroke-current text-white-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#8B8C8C"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 23c1-.837 2.37-1.052 3.383-2.133.442-.348.852-.644 1.107-1.108.216-.391 1.892-4.535.064-2.66-.82 1.183-.477-.983.254-1.397-.587-.276-1.847.72-2.058 1.266.124-.679.038-1.614-.021-2.294-.336-1.322 1.846-1.57.235-1.58-.542.064-.882.665-.885.727-.06-.65.405-1.524 1.015-1.893-.376-.344-1.357-.175-1.62.36-.086-.533.45-1.5 1.114-1.72.25.009.564-.623.666-.815-.052-.536-.32-1.061-.737-1.576-.386-.45-.404-1.638-.75-2.394-.346-.92-.673-2.342.244-3 1.59-.323 2.923 1.413 4.152 2.251.357-.167.938-.373 1.326-.443a8.874 8.874 0 0 1 3.193-.131c1.127-.608 2.98-3.472 4.038-2.086.625.531-.238 1.917-.494 2.61-.066.3-.052.595-.083.723-.072.286-.252.41-.212.564.747.478.775 1.143 1.137 1.852.249.511.444.986.58 1.419.114.373.082.678 0 .924.163.42.405 1.157.406 1.538.718.737 1.079.79.902 1.588-.17.933.105 1.585-.982 2.18-.195.314.61.269-.064 1.214.057.974-.39 1.091-1.684 1.339-.857.26-1.546-.22-2.234-.758-.323-.226-.596-.485-.9-.714l.102 2.527c.018.458.197.896.511 1.23 1.339 1.429 2.688.743 4.349 2.39"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="text-white-500 text-base ml-2.5 false">
                          NFTs
                        </span>
                      </div>
                    </button>
                  </a>
                  <div className=" min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
                    <div className="flex p-2.5 lg:px-0 lg:py-5">
                      <svg
                        className="w-6 h-6"
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          clipPath="url(#a)"
                          stroke="#8B8C8C"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 19a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6v13M12 6v13M21 6v13"></path>
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-[#8B8C8C] text-base ml-2.5 lg:text-white-500">
                        Information
                      </span>
                      <svg
                        className="ml-auto lg:mr-5"
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m8 11 4 4 4-4"
                          stroke="#8B8C8C"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <a href="/promo">
                    <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                      <div className="flex items-center text-left">
                        <svg
                          className="w-6 h-6 stroke-current text-white-500 animate-bounce"
                          viewBox="0 0 24 24"
                        >
                          {/* <style>
                              .st1 {
                                fill: none;
                                stroke: #adadad;
                                strokeLinecap: round;
                                strokeLinejoin: round;
                                strokeMiterlimit: 10;
                              }
                            </style> */}
                          <path
                            d="m11.6 3.4 8.6 9.1c.7.7.4 1.9-.5 2.3L5.7 21c-.6.3-1.2.1-1.7-.4l-1.4-1.5c-.4-.4-.5-1.1-.2-1.6L9.2 3.8c.4-.9 1.7-1.1 2.4-.4z"
                            //   style="
                            //     fill: none;
                            //     stroke: rgb(173, 173, 173);
                            //     strokeMiterlimit: 10;
                            //   "
                          ></path>
                          <path
                            className="st1"
                            d="m15.6 3.7.6-1.9M19.7 7.8h2M18 5.4 20.4 3M7.5 20.4c.6 1.2 1.8 2 3.2 2 2 0 3.6-1.6 3.6-3.6 0-.4-.1-.9-.2-1.3"
                          ></path>
                        </svg>
                        <span className="text-white-500 text-base ml-2.5 false">
                          Promo &amp; PDFs
                        </span>
                      </div>
                    </button>
                  </a>
                  <div className="hidden lg:block ">
                    <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                      <div className="flex items-center text-left">
                        <svg
                          className="w-6 h-6 stroke-current text-white-500"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.333 14.167a5.833 5.833 0 1 0 0-11.667 5.833 5.833 0 0 0 0 11.667ZM17.5 17.5l-5-5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="text-white-500 text-base ml-2.5 false">
                          The Crypto Global Account search
                        </span>
                      </div>
                      <svg
                        className="stroke-current text-white-500 hidden lg:flex"
                        width="8"
                        height="14"
                        stroke="#fff"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m1 13 6-6M1 1l6 6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <NavLink className="hidden lg:block " to="/">
                    <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent bg-black-light lg:bg-transparent lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                      <div className="flex items-center text-left">
                        <svg
                          className="w-6 h-6 stroke-current text-white-500"
                          width="24"
                          height="24"
                          stroke="#fff"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2M7 12h14m0 0-3-3m3 3-3 3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="text-white-500 text-base ml-2.5 text-white-900">
                          Log out
                        </span>
                      </div>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col flex-1 w-full max-w-desktop-login mt-7.5 sm:mt-0">
        <div className="flex flex-col login-wrapper">
          <div className="w-full overflow-hidden relative flex items-center justify-between bg-main-blue rounded overflow-hidden sm:rounded-none p-7.5 sm:p-5 mb-15">
            <div className="flex flex-col sm:w-full z-10 flex-shrink-0">
              <div className="flex items-start sm:items-center mb-5 sm:mb-2.5">
                <div className="flex items-center">
                  <span className="text-white font-medium text-two-half leading-48px sm:text-xl">
                    Welcome to The Crypto Global
                  </span>
                </div>
              </div>
              <span className="mb-7.5 text-base sm:text-sm sm:mb-5">
                Connect your wallet to start working. First time here? Watch a
                tutorial to learn more
              </span>
              <div className="w-full h-full relative flex justify-center items-center sm:mb-5">
                <img
                  className="hidden max-w-full h-full max-h-56 sm:flex"
                  src="/preview_cards/wallet_mini_min.png"
                />
                <div className="absolute bottom-0 left-0 right-0 -rotate-180 wallet-gradient-main h-11 hidden sm:block"></div>
              </div>
              <div className="flex space-x-5 sm:space-x-0 sm:space-y-3.5 sm:flex-col">
                {connectedAccount === "null" && (
                  <button
                    onClick={connectMetamask}
                    className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-hover-main-bg active:bg-active-main-bg sm:w-full"
                  >
                    {connectedAccount === "null" && "Connect now"}
                  </button>
                )}
                {connectedAccount !== "null" && (
                  <button
                    onClick={callLogin}
                    className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-hover-main-bg active:bg-active-main-bg sm:w-full"
                  >
                    Login
                  </button>
                )}
                <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 rounded-mini sm:w-full">
                  Watch tutorial
                </button>
                <NavLink to={'/register'} className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 rounded-mini sm:w-full">
                  Join
                </NavLink>
              </div>
            </div>
            <div
              className="flex relative w-540px flex-shrink-0 h-full -m-7.5 ml-0 sm:hidden"
              // style="height: 230px"
            >
              <div
                className="absolute top-0 bottom-0 right-0 w-full sm:hidden h-330px"
                //   style="
                //     background-image: url(&quot;/preview_cards/wallet_big_min.png&quot;);
                //     background-size: cover;
                //     background-repeat: round;
                //   "
              ></div>
            </div>
          </div>
          <div className="carousel-root">
            <div className="carousel carousel-slider">
              <button
                type="button"
                aria-label="previous slide / item"
                className="control-arrow control-prev control-disabled"
              ></button>
              <button
                type="button"
                aria-label="next slide / item"
                className="control-arrow control-next control-disabled"
              ></button>
            </div>
          </div>
          <div className="flex flex-col mb-15">
            <div className="flex flex-col">
              <div className="flex flex-col sm:px-5">
                <span className="text-white text-3xl font-bold">
                  Account preview
                </span>
                <span className="text-white-500 text-base mt-1 mb-7.5">
                  Look up any
                  <span className="notranslate mx-1.5">
                    The Crypto Global USDT
                  </span>{" "}
                  member account in preview mode. Enter ID or
                  <span className="notranslate mx-1.5">USDT</span> address to
                  preview or click Demo to view a random account.
                </span>
              </div>
              <div className="flex sm:flex-col">
                <div className="flex flex-col flex-1 justify-between sm:w-full bg-main-blue-200 rounded sm:rounded-none p-7.5 sm:p-5 mr-10 sm:mr-0 sm:mb-5">
                  <span className="text-white mb-3">
                    Enter <span className="notranslate mx-1">ID</span> or
                    <span className="notranslate mx-1">USDT</span>wallet
                  </span>
                  <div className="flex sm:flex-col">
                    <input
                      className="w-full bg-white-100 border-2 border-transparent rounded-mini py-3 px-5 text-white outline-none focus:border-2 focus:border-main-blue focus:bg-transparent flex-1 mr-5 sm:mr-0 sm:mb-3.5 py-2"
                      type="text"
                      placeholder="example: 87381"
                    />
                    <button
                      className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-blue hover:bg-hover-main-blue active:bg-active-main-blue rounded-mini"
                      onClick={() => navigate("/dashboard")}
                    >
                      Preview
                    </button>
                  </div>
                </div>
                <div className="w-1/3 min-w-320px sm:w-full sm:px-5">
                  <div className="flex flex-col w-full rounded bg-black-light p-7.5 relative">
                    <span className="text-white mb-3">
                      Don’t know any
                      <span className="notranslate ml-1.5">ID?</span>
                    </span>
                    <a href="/dashboard?user=1192">
                      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 rounded-mini w-max">
                        Check demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10">
            <div className="flex flex-col">
              <div className="flex items-center sm:px-5">
                <span className="text-white text-3xl font-bold sm:text-2xl">
                  Platform recent activity
                </span>
                <div className="relative group">
                  <button
                    className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none ml-1.5"
                    data-tip="true"
                    data-for="Platform recent activity"
                    //   currentitem="false"
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
                    className="__react_component_tooltip t8ee316fe-23a6-484e-9790-840bbf796800 place-bottom type-dark"
                    id="Platform recent activity"
                    data-id="tooltip"
                  >
                    The Crypto Global USDT real-time global events with links to
                    transactions in blockchain
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-10 mt-5 lg:grid-cols-1 lg:gap-0 z-10">
                <div className="notranslate w-full overflow-hidden flex flex-col col-span-2 p-5 bg-gray rounded h-[1000px] lg:order-2 sm:rounded-none sm:p-5 sm:max-h-3/4">
                  <div className="flex -mr-10 pr-10 flex-col flex-1 overflow-auto">
                    <div className="flex items-center justify-between py-5 border-line-gray border-b first:pt-0 w-full sm:py-5 sm:items-start">
                      <div className="flex items-center sm:items-start justify-start sm:w-full">
                        <div className="bg-white-100 flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 sm:w-7.5 sm:h-7.5">
                          <NavLink to="/">
                            <img src={LogoGreen} height={"10px"} width="40px" />
                          </NavLink>
                        </div>
                        <div className="flex ml-5 items-center sm:w-full flex-wrap sm:ml-2.5">
                          <a
                            className="flex items-center justify-center notranslate px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded font-medium text-base sm:text-sm w-max order-2"
                            href="/dashboard?user=1674557"
                          >
                            ID 1674557
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
                            href="https://bscscan.com/tx/0xae050e1b91dbd5be71ede12f7de2fa8ae7d074c715965c8a20a0493e747de73b"
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
                            href="/dashboard?user=1602512"
                          >
                            ID 1602512
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
                            href="https://bscscan.com/tx/0xae050e1b91dbd5be71ede12f7de2fa8ae7d074c715965c8a20a0493e747de73b"
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
                            href="/dashboard?user=1620063"
                          >
                            ID 1620063
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
                              <span className="notranslate text-main-blue">
                                x3
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
                            href="https://bscscan.com/tx/0xae050e1b91dbd5be71ede12f7de2fa8ae7d074c715965c8a20a0493e747de73b"
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
                            4 minutes
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
                            href="/dashboard?user=1288530"
                          >
                            ID 1288530
                          </a>
                          <div className="h-full flex flex-wrap justify-center items-center mx-2.5 sm:mx-1.5 false">
                            <span className="text-white-500 text-base sm:text-sm sm:leading-30px">
                              +
                            </span>
                            <span className="text-white text-base sm:text-sm mx-1 notranslate sm:leading-30px">
                              20 USDT{" "}
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
                            href="https://bscscan.com/tx/0x3b9c07285ac81fbf6bdfb5e1106449e462ae2261b12b93287ccba56fb2048b45"
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
                            4 minutes
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
                            href="/dashboard?user=1674556"
                          >
                            ID 1674556
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
                            href="https://bscscan.com/tx/0x32ad5a7123b6d0004722efdb48345c7a72c445d6b343447838ecf40b4b338bb2"
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
                            5 minutes
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
                            href="/dashboard?user=1671505"
                          >
                            ID 1671505
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
                            href="https://bscscan.com/tx/0x32ad5a7123b6d0004722efdb48345c7a72c445d6b343447838ecf40b4b338bb2"
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
                            5 minutes
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
                            href="/dashboard?user=1671505"
                          >
                            ID 1671505
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
                              <span className="notranslate text-main-blue">
                                x3
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
                            href="https://bscscan.com/tx/0x32ad5a7123b6d0004722efdb48345c7a72c445d6b343447838ecf40b4b338bb2"
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
                            5 minutes
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
                            href="/dashboard?user=1674555"
                          >
                            ID 1674555
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
                            href="https://bscscan.com/tx/0x6cb874185e89c52e753e92a3d836e07ef614a6af4e1a34b03319234be8206d5b"
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
                            8 minutes
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
                            href="/dashboard?user=1631098"
                          >
                            ID 1631098
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
                            href="https://bscscan.com/tx/0x6cb874185e89c52e753e92a3d836e07ef614a6af4e1a34b03319234be8206d5b"
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
                            8 minutes
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
                            href="/dashboard?user=1352157"
                          >
                            ID 1352157
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
                              <span className="notranslate text-main-blue">
                                x3
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
                            href="https://bscscan.com/tx/0x6cb874185e89c52e753e92a3d836e07ef614a6af4e1a34b03319234be8206d5b"
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
                            8 minutes
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
                            href="/dashboard?user=1674554"
                          >
                            ID 1674554
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
                            href="https://bscscan.com/tx/0xf97f4311368cbc3e4f018a5719ffebb2369b7477ee771f0f002c0620fe8639e7"
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
                            9 minutes
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
                            //   currentitem="false"
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
                            className="__react_component_tooltip tf6a3a088-87a8-4214-afaf-02665dc79090 place-bottom type-dark"
                            id="Members total"
                            data-id="tooltip"
                          ></div>
                        </div>
                      </div>
                      <span className="text-white text-2xl font-bold notranslate sm:text-xl false mt-5 sm:mt-2.5">
                        1674556
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
                      549
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
                          className="__react_component_tooltip t758b7c69-4162-40a0-b8be-21be4ca2e424 place-bottom type-dark"
                          id="Members received"
                          data-id="tooltip"
                        ></div>
                      </div>
                    </span>
                    <div className="flex flex-col py-2.5 border-b border-white-100 space-y-1.5 last:border-0 last:pb-0">
                      <span className="text-2xl text-white font-bold sm:text-xl">
                        147808795.94 USDT
                      </span>
                      <span className="text-green-light text-base items-baseline sm:text-sm">
                        + 11132.7 USDT
                      </span>
                    </div>
                    <div className="flex flex-col py-2.5 border-b border-white-100 space-y-1.5 last:border-0 last:pb-0">
                      <span className="text-2xl text-white font-bold sm:text-xl">
                        22517.2358 BNB
                      </span>
                      <span className="text-green-light text-base items-baseline sm:text-sm">
                        + 1.582 BNB
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray rounded p-5 flex flex-col flex-1 max-w-full">
                    <div className="flex justify-between items-center text-base text-white-500 sm:text-sm">
                      <span>Crypto Global USDT Contracts</span>
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
                            5862804
                          </span>
                          <span className="text-green-light text-base items-baseline sm:text-sm">
                            + 986
                          </span>
                        </div>
                        <div className="flex flex-col py-2.5 border-b border-white-100 space-y-1.5 last:border-0 last:pb-0">
                          <span className="text-base text-white-500 sm:text-sm">
                            <span>
                              Turnover,{" "}
                              <span className="notranslate">USDT</span>
                            </span>
                          </span>
                          <span className="text-2xl text-white font-bold sm:text-xl">
                            295617591.88
                          </span>
                          <span className="text-green-light text-base items-baseline sm:text-sm">
                            + 22265.4
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
            <div
              className="absolute left-1/2 -bottom-1/2 transform -translate-x-1/2 w-full h-full z-0 sm:hidden"
              // style="
              //   background-image: url(&quot;/blurs/login/blue-blur.png&quot;);
              //   background-repeat: round;
              //   background-size: cover;
              // "
            ></div>
          </div>
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
                  for USDT.thecryptoglobal.io users
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
          <div className="flex flex-col items-center sm:items-start justify-center my-25 sm:mb-0 sm:p-5 z-10 sm:my-0 sm:pt-7.5">
            <span className="text-white text-3xl font-bold mb-5">
              Need help with using the platform?{" "}
            </span>
            <span className="mb-7.5">
              Get qualified support from The Crypto Global experts via online
              chat{" "}
            </span>
            <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-blue hover:bg-hover-main-blue active:bg-active-main-blue font-medium rounded-mini sm:w-full">
              Contact support
            </button>
          </div>
        </div>

        <footer className="flex z-10 items-center justify-between py-10 w-full sm:justify-start sm:items-start sm:flex-col sm:px-5 sm:pt-7.5 sm:pb-12 sm:mt-0">
          <div className="flex items-center sm:w-full sm:items-start sm:text-left sm:flex-col sm:order-2">
            <span className="text-white-500 text-base font-normal mr-2.5 sm:text-sm sm:mb-2.5 sm:mr-0">
              © 2024 All Rights Reserved
            </span>
            <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-0 py-0 bg-transparent text-white hover:text-white-500 font-normal text-sm notranslate">
              Documents
            </button>
          </div>

          <Social />
        </footer>
      </div>
    </div>
  );
};

export default Login;
