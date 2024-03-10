import { useEffect, useState } from "react";
import toast from "react-hot-toast";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useWalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const getCurrentWalletConnected = async () => {
      if (installMeta()) return;

      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err: any) {
        console.error(err.message);
      }
    };

    const addWalletListener = async () => {
      if (installMeta()) return;

      window.ethereum.on("accountsChanged", (accounts: any) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    };

    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const installMeta = () => {
    if (!window.ethereum) {
      setWalletAddress("");

      toast.error("Please install MetaMask");
      console.log("Please install MetaMask");
      return true;
    }
  };

  const connectWallet = async () => {
    if (installMeta()) return;

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      console.log(accounts[0]);
    } catch (err: any) {
      console.error(err);
    }
  };

  return { connectWallet, walletAddress };
};
