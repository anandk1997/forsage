import { NavLink } from "react-router-dom";
import { LogoGreen } from "src/Assets/Svg";
import { Logo } from "src/Components/Logo";
import { useSignup } from "src/Hooks/useSignup";
import { useWalletConnect } from "src/Hooks/useWalletConnect";
import { ethers } from "ethers";
import Web3 from "web3";
import { MY_CONTRACT_ADDRESS, usdtAddress } from "src/Utils/Addresses";
import { MY_ABI, USDT_ABI } from "src/Utils/ABI";
import { FormEvent, useEffect, useState } from "react";
import { API_URL } from "src/Env";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";

const Register = () => {
  const { walletAddress, connectMetamask } = useWalletConnect();
  const [balance, setBalance] = useState<number>(0);
  const [upline, setUpline] = useState<number>(0);
  const [networkName, setNetworkName] = useState<string>("");
  // const [myObject, setMyObject] = useState<MyObject>(initialObject);

  const [isLoading, setisLoading] = useState(false);

  const checkBalance = async (walletAddress: string) => {
    try {
      if (!window.ethereum) {
        console.log("window.ethereum is not available");
        return;
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const network = (await provider.getNetwork()).name;
      setNetworkName(network);
      const usdtContract = new ethers.Contract(usdtAddress, USDT_ABI, signer);
      const balanceUSDT = await usdtContract.balanceOf(walletAddress);
      const hex = ethers.formatUnits(balanceUSDT, 18); // Convert balance to human-readable format
      const finalAmount = hex.toString().slice(0, 4);
      setBalance(parseFloat(finalAmount));
    } catch (error) {
      console.error("Error checking balance:", error);
    }
  };

  const checkLevel = async (userId: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      userId: userId,
    });

    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${API_URL}api/v1/auth/checkLevel`,
      requestOptions,
    );
    const result = await response.json();
    const finalObject = {
      address: result?.address,
      amount: result?.amount,
      uniqueId: result?.uniqueId,
    };

    // setMyObject(finalObject);
    return finalObject;
  };

  const sendUSDTTransactionForWorking = async (
    e: FormEvent<HTMLFormElement>,
    ammm: any,
  ) => {
    e.preventDefault();

    const ada = await checkLevel(upline);

    if (!ada?.address) {
      toast.error("Please enter upline");
      return;
    }

    if (!!!walletAddress) {
      toast.error("Please connect to your wallet");
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);
      const gasPrice = await web3.eth.getGasPrice();
      const amounts: any[] = [];
      setisLoading(true);

      for (let sub = 0; sub < ada.amount.length; sub++) {
        const amountNumber = parseFloat(ada?.amount[sub]);

        if (!isNaN(amountNumber)) {
          amounts[sub] = (amountNumber * 1e18).toString();
        } else {
          toast.error(`Failed to convert '${ada?.amount[sub]}' to a number.`);

          console.error(`Failed to convert '${ada?.amount[sub]}' to a number.`);
        }
      }
      const own_contract = new web3.eth.Contract(MY_ABI, MY_CONTRACT_ADDRESS, {
        from: walletAddress,
      });

      window.contract = new web3.eth.Contract(USDT_ABI, usdtAddress);
      const final_amount = ammm;

      const gasEstimate = await window.contract.methods
        .approve(MY_CONTRACT_ADDRESS, (final_amount * 1e18).toString())
        .estimateGas({ from: walletAddress });

      window.contract.methods
        .approve(MY_CONTRACT_ADDRESS, (final_amount * 1e18).toString())
        .send({
          from: walletAddress,
          gas: gasEstimate,
          gasPrice: gasPrice,
        })
        .then(async () => {
          setisLoading(true);

          const estimatedGas = await own_contract.methods
            .createAccount(ada?.address, amounts, usdtAddress)
            .estimateGas({
              from: walletAddress,
            });
          own_contract.methods
            .createAccount(ada?.address, amounts, usdtAddress)
            .send({
              gas: String(estimatedGas),
              gasPrice: String(gasPrice),
            })
            .once("transactionHash", (hash) => {
              const formData = new FormData(e.target as HTMLFormElement);
              const sponsorId = formData.get("sponsorId");

              if (!sponsorId) {
                toast.error("Please enter id");
                return;
              }

              // call signup api with some more parms
              const uniqueId = ada?.uniqueId;
              const transactionHash = hash;
              handleSubmit(sponsorId, uniqueId, transactionHash);
              (e.target as HTMLFormElement).reset();
            });
        })
        .catch((error: any) => {
          toast.error(error.message);
        })
        .finally(() => setisLoading(false));
    } catch (error: any) {
      console.log("here last ", error);
      toast.error(error?.data?.message);
    } finally {
      setisLoading(false);
    }
  };

  const checkId = (event: any) => {
    const sponsorIdValue = event.target.value;
    setUpline(sponsorIdValue);
    // sendUSDTTransactionForWorking(10);
  };

  const { handleSubmit } = useSignup();

  useEffect(() => {
    checkBalance(walletAddress);
  }, [walletAddress]);

  return (
    <div className="flex relative overflow-hidden flex-col items-center justify-center w-screen min-h-screen text-white-500 pt-15">
      <header className="fixed top-0 w-full pb-2.5 pt-2.5 px-10 z-[2147483602] bg-transparent sm:px-5 lg:border-b lg:border-white-100 z-[999]">
        <nav className="z-10 w-full max-w-desktop-preview-bar m-auto header-border-b">
          <div className="flex items-center justify-between">
            <Logo src={LogoGreen} />

            <div className="flex justify-end items-center ml-auto">
              <button
                className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-2.5 bg-black-light hover:bg-line-gray active:bg-active-gray text-white font-normal rounded items-center"
                onClick={connectMetamask}
              >
                {!!walletAddress && "Connected"}
                {!walletAddress && "Connect wallet"}
              </button>
            </div>
          </div>
        </nav>
        <div className="hidden justify-start items-start bg-main-bg pb-5 pt-7.5 transition duration-500 ease-in-out bg-main-bg absolute top-0 left-0 z-20 inset-0 h-screen w-screen z-999999 -translate-x-120% lg:flex flex-col lg:py-2.5">
          <div className="w-full flex flex-col flex-1">
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
                          <path d="m11.6 3.4 8.6 9.1c.7.7.4 1.9-.5 2.3L5.7 21c-.6.3-1.2.1-1.7-.4l-1.4-1.5c-.4-.4-.5-1.1-.2-1.6L9.2 3.8c.4-.9 1.7-1.1 2.4-.4z"></path>
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
                          <path d="m11.6 3.4 8.6 9.1c.7.7.4 1.9-.5 2.3L5.7 21c-.6.3-1.2.1-1.7-.4l-1.4-1.5c-.4-.4-.5-1.1-.2-1.6L9.2 3.8c.4-.9 1.7-1.1 2.4-.4z"></path>
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
                    <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
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
                        <span className="text-white-500 text-base ml-2.5 false">
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
      <div className="w-full max-w-desktop-login flex-1 flex items-center justify-center z-10 px-10 sm:px-0 sm:flex-col">
        <div className="flex flex-1 items-stretch justify-between w-full sm:flex-col">
          <form
            onSubmit={(e) => {
              sendUSDTTransactionForWorking(e, 20);
              // handleSubmit(e);
            }}
          >
            <div className="flex flex-1 flex-col items-start mr-10 sm:mr-0 sm:items-stretch sm:max-w-full sm:p-5">
              <div className="flex flex-col sm:flex-1">
                <span className="inline-block text-two-half text-white mb-10 sm:mb-7.5 sm:text-2xl">
                  Registration <br />
                  in <span className="notranslate">The Crypto Global USDT</span>
                </span>
                <div className="flex flex-col mb-10 sm:mb-7.5">
                  <div className="w-full relative flex flex-col flex-grow-0 flex-shrink-0">
                    <div className="flex items-baseline">
                      <label className="mb-2.5 text-white-500 sm:text-sm flex-shrink-0">
                        Your upline
                      </label>
                    </div>
                    <div className="w-full relative">
                      <input
                        className="w-full bg-white-100 border-2 border-transparent rounded-mini py-3 px-5 text-white outline-none focus:border-2 focus:border-main-blue focus:bg-transparent"
                        type="text"
                        placeholder="Upline"
                        name="sponsorId"
                        onInput={checkId}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col items-start">
                    <div className="flex">
                      <svg
                        className={
                          walletAddress
                            ? "w-6 h-6 flex-shrink-0 stroke-current text-green"
                            : "w-6 h-6 flex-shrink-0 stroke-current text-gray"
                        }
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="m9 12 2 2 4-4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div
                        className={
                          walletAddress
                            ? "flex flex-wrap items-center ml-2.5 leading-5 text-base whitespace-nowrap text-green"
                            : "flex flex-wrap items-center ml-2.5 leading-5 text-base whitespace-nowrap text-base"
                        }
                      >
                        <span className="mr-1.5">
                          <span>Wallet</span>
                          <span>:</span>
                        </span>
                        <span className="">
                          {walletAddress && "connected"}
                          {!walletAddress && "Not connected"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex ">
                      <svg
                        className={
                          networkName
                            ? "w-6 h-6 flex-shrink-0 stroke-current text-green"
                            : "w-6 h-6 flex-shrink-0 stroke-current text-gray"
                        }
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2CFF4E"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="m9 12 2 2 4-4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div
                        className={
                          networkName
                            ? "flex flex-wrap items-center ml-2.5 leading-5 text-base whitespace-nowrap text-green"
                            : "flex flex-wrap items-center ml-2.5 leading-5 text-base whitespace-nowrap text-base"
                        }
                      >
                        <span className="mr-1.5">
                          <span>Network</span>
                          <span>:</span>
                        </span>
                        <span className="">
                          {networkName &&
                            networkName.toUpperCase() + " " + "Smart chain"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-center space-y-2.5">
                <div className="flex space-x-2.5 sm:w-full">
                  <button
                    className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-blue hover:bg-hover-main-blue active:bg-active-main-blue mt-10 py-5 !px-10 sm:py-3 sm:mt-7.5 sm:flex-1"
                    type="submit"
                  >
                    {isLoading ? <CircularProgress /> : "Register"}
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="bg-white-100 rounded p-10 max-w-desktop-reg-info-card w-full flex-shrink h-auto flex flex-col min-h-550px sm:min-h-auto sm:mb-10 sm:max-w-full sm:hidden">
            <div className="flex flex-1 items-start w-full">
              <div className="flex flex-col">
                <span className="flex items-center text-white text-2xl font-bold mb-5 sm:mb-2.5 sm:hidden">
                  <svg
                    className="inline w-6 h-6 mr-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#fff"></rect>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.25 8a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM10.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v3.25H13a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75v-3.25H11a.75.75 0 0 1-.75-.75Z"
                      fill="#343A4D"
                    ></path>
                  </svg>
                  Information
                </span>
                <div className="flex flex-col">
                  {!walletAddress && (
                    <span className="text-white">Wallet not connected.</span>
                  )}
                  {walletAddress && (
                    <span>
                      Insufficient balance for registration.Registration
                      requires 10.5 USDT. Your wallet balance: {balance}
                      USDT.
                    </span>
                  )}

                  {!walletAddress && (
                    <span className="">
                      Access the website via cryptowallet dapp browser
                      (”Discover” button in Tokenpoket) or with Metamask
                      extension installed.
                    </span>
                  )}
                  <a target="_blank" href="#">
                    <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none bg-red text-white py-2.5 px-5 hover:bg-hover-red active:bg-active-red p-5 rounded-large sm:rounded-mini mt-5 sm:mt-4 sm:w-full">
                      Read guide
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-3.5">
              <iframe
                className="bg-black w-full mb-7.5 h-180px"
                src="https://www.youtube-nocookie.com/embed/eeKwImXmlBM?si=5JCl92kLdkT8nuh-"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <button className="flex items-start">
                <svg
                  className="w-6 h-6 mr-4"
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
                <span className="text-white text-left">
                  Need help with registration? <br />
                  Talk to experts in the
                  <b> support chat</b>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

declare global {
  interface Window {
    contract?: any;
  }
}

// interface MyObject {
//   address: string;
//   amount: string;
//   uniqueId: string;
// }

// const initialObject: MyObject = {
//   address: "",
//   amount: "",
//   uniqueId: "",
// };
