import { useQuery } from "@tanstack/react-query";
import { ChangeEvent } from "react";

import { incomeApi } from "src/Api/Income";
import { useStore } from "src/Store/Store";

export const useIncome = () => {
  const { page, skip, setPage, setPageCount } = useStore((state) => state);

  const { isPending, data } = useQuery({
    queryKey: ["income", page],
    queryFn: () =>
      incomeApi({
        page,
        skip,
        setPageCount,
      }),
  });

  const handleChangePage = (_e: ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  return { isPending, data, handleChangePage };
};
