import { create } from "zustand";

const initialState = {
  walletAddress: "",
  page: 0,
  skip: 0,
  pageCount: 0,
};

export const useStore = create<IStoreState>((set) => ({
  ...initialState,

  setWalletAddress: (newAddress: string) => set({ walletAddress: newAddress }),
  setPage: (newPage: number) => set({ page: newPage }),
  setSkip: (newSkip: number) => set({ skip: newSkip }),
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
