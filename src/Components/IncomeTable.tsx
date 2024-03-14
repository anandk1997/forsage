import { CircularProgress, Pagination } from "@mui/material";

import { useIncome } from "src/Hooks/useIncome";
import { useStore } from "src/Store/Store";

const IncomeTable = () => {
  const { data, isPending, handleChangePage } = useIncome();
  const { page, pageCount } = useStore((state) => state);

  console.log(data);

  if (isPending)
    return (
      <div className="h-100 flex justify-center align-middle">
        <CircularProgress sx={{ scale: ".8", color: "white" }} />;
      </div>
    );

  return (
    <div className="sm:rounded-none flex flex-1 flex-col w-full bg-black-light rounded overflow-hidden h-full min-h-90 sm:max-h-3/4">
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
                  <div className="text-white-500 text-sm">
                    {item?.description}
                  </div>
                </td>
                <td className="p-4 text-left whitespace-nowrap sm:p-3">
                  <div className="text-white-500 text-sm">{item?.date}</div>
                </td>
              </tr>
            ))}

            <>
              {/* 
            <tr className="border-b border-white-100 last:border-none">
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="flex w-full">
                  <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="text-green-light h-18px w-18px"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white-500 text-sm">27.02.2024 04:46</div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <a
                  className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                  href="/dashboard?user=1668230"
                >
                  ID 1668230
                </a>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white text-sm">1</div>
              </td>
            </tr>

            <tr className="border-b border-white-100 last:border-none">
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="flex w-full">
                  <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="text-green-light h-18px w-18px"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white-500 text-sm">27.02.2024 04:46</div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <a
                  className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                  href="/dashboard?user=1668230"
                >
                  ID 1668230
                </a>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white text-sm">1</div>
              </td>
            </tr>

            <tr className="border-b border-white-100 last:border-none">
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="flex w-full">
                  <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="text-green-light h-18px w-18px"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white-500 text-sm">27.02.2024 04:46</div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <a
                  className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                  href="/dashboard?user=1668230"
                >
                  ID 1668230
                </a>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white text-sm">1</div>
              </td>
            </tr>

            <tr className="border-b border-white-100 last:border-none">
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="flex w-full">
                  <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="text-green-light h-18px w-18px"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white-500 text-sm">27.02.2024 04:46</div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <a
                  className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                  href="/dashboard?user=1668230"
                >
                  ID 1668230
                </a>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white text-sm">1</div>
              </td>
            </tr>

            <tr className="border-b border-white-100 last:border-none">
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="flex w-full">
                  <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="text-green-light h-18px w-18px"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white-500 text-sm">27.02.2024 04:46</div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <a
                  className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                  href="/dashboard?user=1668230"
                >
                  ID 1668230
                </a>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white text-sm">1</div>
              </td>
            </tr>

            <tr className="border-b border-white-100 last:border-none">
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="flex w-full">
                  <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="text-green-light h-18px w-18px"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white-500 text-sm">27.02.2024 04:46</div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <a
                  className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                  href="/dashboard?user=1668230"
                >
                  ID 1668230
                </a>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white text-sm">1</div>
              </td>
            </tr>

            <tr className="border-b border-white-100 last:border-none">
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="flex w-full">
                  <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="text-green-light h-18px w-18px"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white-500 text-sm">27.02.2024 04:46</div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <a
                  className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                  href="/dashboard?user=1668230"
                >
                  ID 1668230
                </a>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white text-sm">1</div>
              </td>
            </tr>

            <tr className="border-b border-white-100 last:border-none">
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="flex w-full">
                  <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="text-green-light h-18px w-18px"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white-500 text-sm">27.02.2024 04:46</div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <a
                  className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                  href="/dashboard?user=1668230"
                >
                  ID 1668230
                </a>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white text-sm">1</div>
              </td>
            </tr>

            <tr className="border-b border-white-100 last:border-none">
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="flex w-full">
                  <div className="relative flex items-center justify-center rounded-full bg-green-100 w-11 h-11 sm:w-7.5 sm:h-7.5">
                    <svg
                      className="text-green-light h-18px w-18px"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#2CFF4E"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                      ></path>
                    </svg>
                    <span className="absolute top-0 right-0 text-mini leading-3 text-green-light"></span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white-500 text-sm">27.02.2024 04:46</div>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <a
                  className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                  href="/dashboard?user=1668230"
                >
                  ID 1668230
                </a>
              </td>
              <td className="p-4 text-left whitespace-nowrap sm:p-3">
                <div className="text-white text-sm">1</div>
              </td>
            </tr> */}
            </>
          </tbody>
        </table>
      </div>

      {/* <div className="flex p-4 sm:p-2.5">
        <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 w-full rounded-mini flex justify-center items-center">
          <svg
            className="mr-2.5"
            width="21"
            height="20"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 15.833c3.333 0 6.11-1.944 8.333-5.833-2.222-3.89-5-5.833-8.333-5.833S4.39 6.11 2.167 10c2.222 3.889 5 5.833 8.333 5.833ZM12.167 10a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0Z"
            ></path>
          </svg>
          <span> See more </span>
        </button>
      </div> */}

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
