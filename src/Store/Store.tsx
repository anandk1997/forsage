import { create } from "zustand";

export const useStore = create<IStoreState>((set) => ({
  walletAddress: "",
  setWalletAddress: (newAddress: string) => set({ walletAddress: newAddress }),

  page: 0,
  setPage: (newPage: number) => set({ page: newPage }),

  skip: 0,
  setSkip: (newSkip: number) => set({ skip: newSkip }),

  pageCount: 0,
  setPageCount: (newPageCount: number) => set({ pageCount: newPageCount }),
}));

interface IStoreState {
  walletAddress: string;
  setWalletAddress: (newAddress: string) => void;

  page: number;
  setPage: (newPageCount: number) => void;

  skip: number;

  pageCount: number;
  setPageCount: (newPageCount: number) => void;
}
