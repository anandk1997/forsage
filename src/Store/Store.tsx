import { create } from "zustand";

interface IStoreState {
  walletAddress: string;
  setWalletAddress: (newAddress: string) => void;
}

export const useStore = create<IStoreState>((set) => ({
  walletAddress: "",
  setWalletAddress: (newAddress: string) => set({ walletAddress: newAddress }),
}));
