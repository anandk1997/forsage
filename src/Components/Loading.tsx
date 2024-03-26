import { CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-gray">
      <CircularProgress sx={{ scale: ".8", color: "white !important" }} />
    </div>
  );
};
