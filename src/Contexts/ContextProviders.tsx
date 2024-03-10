import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { red } from "@mui/material/colors";

import { Loading } from "src/Components/Loading";
import { NavProvider } from "./useNavContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

const ContextProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<Loading />}>
            <NavProvider>{children}</NavProvider>
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default ContextProviders;

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});
