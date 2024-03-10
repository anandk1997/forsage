import { CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <CircularProgress sx={{ scale: ".8", color: "black !important" }} />;
    </div>
  );
};
