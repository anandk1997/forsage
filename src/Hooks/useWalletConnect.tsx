import { useEffect } from "react";
import toast from "react-hot-toast";
import { useStore } from "src/Store/Store";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useWalletConnect = () => {
  const { walletAddress, setWalletAddress } = useStore((state) => state);

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
        }
      } catch (err: any) {
        toast.error(err.message);
        console.error(err.message);
      }
    };

    const addWalletListener = async () => {
      if (installMeta()) return;

      window.ethereum.on("accountsChanged", (accounts: string[]) => {
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
    if (walletAddress?.length > 0) return;

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      toast.success("Connected Successfully");
      console.log(accounts[0]);
    } catch (err: any) {
      toast.error(err.message);
      console.error(err);
    }
  };

  const walletData =
    walletAddress && walletAddress.length > 0
      ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}`
      : "Connect Wallet";

  return { connectWallet, walletAddress, walletData };
};
