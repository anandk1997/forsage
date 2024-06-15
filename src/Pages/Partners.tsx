import { CircularProgress, Pagination } from "@mui/material";
import { useState } from "react";
import { usePartners } from "src/Hooks/usePartners";
import { cn } from "src/Lib/utils";
import { useStore } from "src/Store/Store";

const Partners = () => {
  const [amount, setAmount] = useState("20");
  const [isAmount, setIsAmount] = useState(false);
  const [isFilters, setIsFilters] = useState(false);

  const { data, isPending, handleChangePage } = usePartners(amount);

  const { page, pageCount } = useStore((state) => state);

  const updatePackage = (amt: string) => {
    setAmount(amt);
    setIsAmount(false);
  };

  if (isPending)
    return (
      <div className="h-100 flex justify-center align-middle">
        <CircularProgress sx={{ scale: ".8", color: "white" }} />;
      </div>
    );

  return (
    <main className="flex flex-1 w-full">
      <div className="flex flex-col w-full space-y-10 sm:space-y-7.5">
        <div className="flex flex-col flex-wrap w-full sm:px-5">
          <div className="notranslate"></div>
          <div className="flex items-center mb-1.5 sm:mb-2.5"></div>
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex flex-wrap items-center">
              <span className="text-two-half text-white font-medium mr-2 sm:text-2xl whitespace-nowrap">
                Partners
              </span>
              <a
                className="inline-flex px-2.5 !leading-30px bg-blue-100 notranslate hover:bg-main-blue-300 text-main-blue rounded text-xl w-max sm:text-base"
                href="/dashboard?user=1"
              >
                ID 1
              </a>
            </div>

            <div
              className="flex items-center ml-7.5 cursor-pointer"
              onClick={() => setIsFilters((open) => !open)}
            >
              <div
                className={cn(
                  "flex items-center rounded px-2.5 py-1",

                  isFilters ? "bg-main-blue" : "bg-main-blue-200",
                )}
              >
                <svg
                  className={cn(
                    "w-5 h-5 fill-current mr-1.5",

                    isFilters ? "text-white" : "text-main-blue",
                  )}
                  viewBox="0 0 24 24"
                  fill="#406AFF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 5h13a1 1 0 0 1 .5 1.5L14 12v7l-4-3v-4L5 6.5A1 1 0 0 1 5.5 5Z"></path>
                </svg>
                <span
                  className={cn(
                    "text-base leading-6",

                    isFilters ? "text-white" : "text-main-blue",
                  )}
                >
                  Filters
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {isFilters && (
            <div className="sm:px-5">
              <div className="flex p-7 mb-5 rounded bg-black-light">
                <div className="flex w-full space-x-5 sm:flex-col sm:space-x-0 sm:space-y-5">
                  <div className="flex w-full flex-col space-y-5">
                    <div className="w-full relative flex flex-col s">
                      <label className="mb-2.5 text-white-500 sm:text-sm">
                        Package
                      </label>
                      <div className="relative w-full">
                        <div
                          className="relative w-full min-h-50px bg-line-gray border border-transparent rounded-mini py-3 px-5 text-white outline-none hover:cursor-pointer hover:bg-gray-500 
              false 
              notranslate
            "
                          onClick={() => setIsAmount((open) => !open)}
                        >
                          {amount || "Select Package"}
                          <svg
                            className="absolute w-2.5 h-2.5 right-3 top-1/2 -translate-y-1/2 transition duration-300 ease-in-out false "
                            fill="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 8 4"
                          >
                            <path d="M4 4 0 0h8Z"></path>
                          </svg>
                        </div>

                        {isAmount && (
                          <div className="absolute top-full z-20 max-h-250px w-full bg-line-gray rounded-mini rounded-t-none overflow-auto drop-shadow-xl">
                            <ul className="w-full bg-line-gray drop-shadow-md rounded-mini rounded-t-none text-white outline-none">
                              <li
                                className={cn(
                                  "min-h-50px py-3 px-5 border-b border-white-200 last:border-none hover:cursor-pointer hover:bg-gray-500",
                                  amount === "20" && "bg-gray-500",
                                )}
                                onClick={() => updatePackage("20")}
                              >
                                20
                              </li>

                              <li
                                className={cn(
                                  "min-h-50px py-3 px-5 border-b border-white-200 last:border-none hover:cursor-pointer hover:bg-gray-500",
                                  amount === "50" && "bg-gray-500",
                                )}
                                onClick={() => updatePackage("50")}
                              >
                                50
                              </li>

                              <li
                                className={cn(
                                  "min-h-50px py-3 px-5 border-b border-white-200 last:border-none hover:cursor-pointer hover:bg-gray-500",
                                  amount === "100" && "bg-gray-500",
                                )}
                                onClick={() => updatePackage("100")}
                              >
                                100
                              </li>

                              <li
                                className={cn(
                                  "min-h-50px py-3 px-5 border-b border-white-200 last:border-none hover:cursor-pointer hover:bg-gray-500",
                                  amount === "200" && "bg-gray-500",
                                )}
                                onClick={() => updatePackage("200")}
                              >
                                200
                              </li>

                              <li
                                className={cn(
                                  "min-h-50px py-3 px-5 border-b border-white-200 last:border-none hover:cursor-pointer hover:bg-gray-500",
                                  amount === "500" && "bg-gray-500",
                                )}
                                onClick={() => updatePackage("500")}
                              >
                                500
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col mb-5 w-full">
            <div className="flex-1 sm:rounded-none z-10 flex w-full flex-col bg-black-light rounded overflow-hidden h-full min-h-90 sm:max-h-3/4">
              <div className="overflow-auto max-h-[80vh] sm:max-h-[75vh]">
                <table className="w-full table-auto border-white-100]">
                  <thead>
                    <tr className="text-white-500 text-xs font-normal border-b border-white-100">
                      <th className="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-left">
                        <div className="whitespace-nowrap flex items-center notranslate">
                          Joining Date
                          {/* <div className="flex flex-col ml-[4px]">
                            <svg
                              className=""
                              width="4"
                              height="5"
                              fill="#D9D9D9"
                              opacity=".5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                            </svg>
                            <svg
                              className="rotate-180 mt-[2px] "
                              width="4"
                              height="5"
                              fill="#D9D9D9"
                              opacity=".5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                            </svg>
                          </div> */}
                        </div>
                      </th>

                      <th className=" p-6 xl:p-4 lg:p-6 lg:px-3 text-left">
                        <div className="whitespace-nowrap flex items-center notranslate">
                          USER ID
                        </div>
                      </th>

                      <th className=" p-6 xl:p-4 lg:p-6 lg:px-3 text-left">
                        <div className="whitespace-nowrap flex items-center notranslate">
                          <span className="notranslate">Address</span>
                        </div>
                      </th>

                      <th className="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-center">
                        <div className="whitespace-nowrap flex items-center notranslate">
                          <span className="notranslate">Toal USDT Package</span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-600 text-sm font-light">
                    {data &&
                      data.length > 0 &&
                      data?.map((item: any, key: number) => (
                        <tr
                          key={key}
                          className=" border-b border-white-100 whitespace-nowrap last:border-b-0"
                        >
                          <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                            <span>{item.createdAt}</span>
                          </td>
                          <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                            <div className="flex items-center space-x-2.5">
                              <span className="text-white font-medium text-xs">
                                {item.userId}
                              </span>
                            </div>
                          </td>
                          <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                            <a
                              className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                              href="/dashboard?user=1667618"
                            >
                              {item.addresses.ethAddress}
                            </a>
                          </td>
                          <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                            {amount}
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Partners;
