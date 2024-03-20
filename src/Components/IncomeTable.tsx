import { CircularProgress, Pagination } from "@mui/material";

import { useStore } from "src/Store/Store";

const IncomeTable = ({ data, isPending, handleChangePage }: any) => {
  const { page, pageCount } = useStore((state) => state);

  console.log(data);

  if (isPending)
    return (
      <div className="h-100 flex justify-center align-middle">
        <CircularProgress sx={{ scale: ".8", color: "white" }} />;
      </div>
    );

  return (
    <div className="sm:rounded-none flex flex-1 flex-col w-full bg-black-light rounded overflow-hidden max-h-[90vh] sm:max-h-3/4">
      <div className="overflow-auto max-h-[80vh] sm:max-h-[75vh]">
        <table className="min-w-max w-full table-auto border-white-100">
          <thead>
            <tr className="text-white-500 text-xs border-b border-white-100">
              <th className="p-4 text-left font-normal text-white sm:p-3">#</th>
              <th className="p-4 text-left font-normal text-white sm:p-3">
                Amount
              </th>
              <th className="p-4 text-left font-normal text-white notranslate sm:p-3">
                Description
              </th>
              <th className="p-4 text-left font-normal text-white sm:p-3">
                Date
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-600 text-sm font-light align-baseline">
            {data?.map((item: any, i: number) => (
              <tr className="border-b border-white-100 last:border-none">
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  {i + 1}
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">{item?.amount}</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">{item?.remarks}</div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">
                    {item?.createdAt}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        className={`mx-auto text-white`}
        count={pageCount}
        page={page + 1}
        onChange={handleChangePage}
        shape="rounded"
      />
    </div>
  );
};

export default IncomeTable;
