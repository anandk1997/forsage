import { create } from "zustand";

const initialState = {
  walletAddress: "",
  dashboardData: {},
  userInfo: {},
  workingPackages: {},
  matrixPackages: {},

  page: 0,
  skip: 0,
  pageCount: 0,
};

export const useStore = create<IStoreState>((set) => ({
  ...initialState,

  setWalletAddress: (newAddress: string) => set({ walletAddress: newAddress }),
  setDashboardData: (newDashboarData: object) =>
    set({ dashboardData: newDashboarData }),
  setUserInfo: (newUserInfo: object) => set({ userInfo: newUserInfo }),
  setWorkingPackage: (newWorkingPackage: object) =>
    set({ workingPackages: newWorkingPackage }),
  setMatrixPackage: (newMatrixPackage: object) =>
    set({ matrixPackages: newMatrixPackage }),
  setPage: (newPage: number) => set({ page: newPage }),
  setSkip: (newSkip: number) => set({ skip: newSkip }),
  setPageCount: (newPageCount: number) => set({ pageCount: newPageCount }),
}));

interface IStoreState {
  walletAddress: string;
  setWalletAddress: (newAddress: string) => void;

  dashboardData: any;
  setDashboardData: (newDashboarData: object) => void;

  userInfo: any;
  setUserInfo: (newUserInfo: object) => void;

  workingPackages: any;
  setWorkingPackage: (newWorkingPackage: object) => void;

  matrixPackages: any;
  setMatrixPackage: (newMatrixPackage: object) => void;

  page: number;
  setPage: (newPageCount: number) => void;

  skip: number;

  pageCount: number;
  setPageCount: (newPageCount: number) => void;
}
