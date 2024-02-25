import React from "react";

import { DashboardLayout } from "src/Layout/DashboardLayout";

const Partners = () => {
  return (
    <DashboardLayout>
      <main class="flex flex-1 w-full">
        <div class="flex flex-col w-full space-y-10 sm:space-y-7.5">
          <div class="flex flex-col flex-wrap w-full sm:px-5">
            <div class="notranslate"></div>
            <div class="flex items-center mb-1.5 sm:mb-2.5"></div>
            <div class="w-full flex justify-between flex-wrap">
              <div class="flex flex-wrap items-center">
                <span class="text-two-half text-white font-medium mr-2 sm:text-2xl whitespace-nowrap">
                  Partners
                </span>
                <a
                  class="inline-flex px-2.5 !leading-30px bg-blue-100 notranslate hover:bg-main-blue-300 text-main-blue rounded text-xl w-max sm:text-base"
                  href="/dashboard?user=1"
                >
                  ID 1
                </a>
              </div>
              <div class="flex items-center ml-7.5 cursor-pointer">
                <div class="flex items-center rounded px-2.5 py-1 bg-main-blue-200">
                  <svg
                    class="w-5 h-5 fill-current mr-1.5 text-main-blue"
                    viewBox="0 0 24 24"
                    fill="#406AFF"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5L14 12v7l-4-3v-4L5 6.5A1 1 0 0 1 5.5 5Z"></path>
                  </svg>
                  <span class="text-base leading-6 text-main-blue">
                    Filters
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-col mb-5 w-full">
              <div class="flex-1 sm:rounded-none z-10 flex w-full flex-col bg-black-light rounded overflow-hidden h-full min-h-90 sm:max-h-3/4">
                <div class="overflow-auto max-h-[80vh] sm:max-h-[75vh]">
                  <table class="w-full table-auto border-white-100]">
                    <thead>
                      <tr class="text-white-500 text-xs font-normal border-b border-white-100">
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-left">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            Date
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class=" p-6 xl:p-4 lg:p-6 lg:px-3 text-left">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            Address
                          </div>
                        </th>
                        <th class=" p-6 xl:p-4 lg:p-6 lg:px-3 text-left">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            <span class="notranslate">ID</span>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-center">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            <span class="notranslate">x3</span>
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-center">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            <span class="notranslate">x4</span>
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-center">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            <span class="notranslate">xXx</span>
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-center">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            <span class="notranslate">xGold</span>
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-center">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            <span class="notranslate">xQore</span>
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-center">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            <span class="notranslate">maxQore</span>
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-right">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            Profit BUSD
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-right">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            Profit BNB
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-right">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            New partners
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] fill-[#FFE027] opacity-100"
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                        <th class="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-right">
                          <div class="whitespace-nowrap flex items-center notranslate">
                            Partners
                            <div class="flex flex-col ml-[4px]">
                              <svg
                                class=""
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                              <svg
                                class="rotate-180 mt-[2px] "
                                width="4"
                                height="5"
                                fill="#D9D9D9"
                                opacity=".5"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                              </svg>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                      <tr class="bg-green-100 border-b border-white-100 whitespace-nowrap last:border-b-0">
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                          <span>23.12.2023 19:08</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <div class="flex items-center space-x-2.5">
                            <span class="text-white font-medium text-xs">
                              0x944F...0fBE
                            </span>
                            <button>
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 20 20"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                                ></path>
                              </svg>
                            </button>
                            <a
                              target="_blank"
                              href="https://bscscan.com/address/0x944f2e7c2edbbcd5a2a1850b6dc16ceb691c0fbe"
                            >
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <a
                            class="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                            href="/dashboard?user=1631464"
                          >
                            ID 1631464
                          </a>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          2
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          25 BUSD
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BNB
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          <span class="text-green-350 font-semibold">+ 1</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          3
                        </td>
                      </tr>
                      <tr class=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                          <span>25.02.2024 19:34</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <div class="flex items-center space-x-2.5">
                            <span class="text-white font-medium text-xs">
                              0xfc47...D732
                            </span>
                            <button>
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 20 20"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                                ></path>
                              </svg>
                            </button>
                            <a
                              target="_blank"
                              href="https://bscscan.com/address/0xfc471fc8a0af49f02c0fbb657219cbd77b58d732"
                            >
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <a
                            class="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                            href="/dashboard?user=1667618"
                          >
                            ID 1667618
                          </a>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BUSD
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BNB
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          <span>0</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          0
                        </td>
                      </tr>
                      <tr class=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                          <span>23.02.2024 19:52</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <div class="flex items-center space-x-2.5">
                            <span class="text-white font-medium text-xs">
                              0xf250...9917
                            </span>
                            <button>
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 20 20"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                                ></path>
                              </svg>
                            </button>
                            <a
                              target="_blank"
                              href="https://bscscan.com/address/0xf250d2e17ee5d03ed23c067dea6b0d3848629917"
                            >
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <a
                            class="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                            href="/dashboard?user=1666666"
                          >
                            ID 1666666
                          </a>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BUSD
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BNB
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          <span>0</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          0
                        </td>
                      </tr>
                      <tr class=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                          <span>23.02.2024 04:10</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <div class="flex items-center space-x-2.5">
                            <span class="text-white font-medium text-xs">
                              0xEb26...8939
                            </span>
                            <button>
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 20 20"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                                ></path>
                              </svg>
                            </button>
                            <a
                              target="_blank"
                              href="https://bscscan.com/address/0xeb26429c0a2b0aa29c364566244eee623f7f8939"
                            >
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <a
                            class="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                            href="/dashboard?user=1666362"
                          >
                            ID 1666362
                          </a>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BUSD
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BNB
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          <span>0</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          0
                        </td>
                      </tr>
                      <tr class=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                          <span>22.02.2024 23:57</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <div class="flex items-center space-x-2.5">
                            <span class="text-white font-medium text-xs">
                              0x5c0e...23C8
                            </span>
                            <button>
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 20 20"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                                ></path>
                              </svg>
                            </button>
                            <a
                              target="_blank"
                              href="https://bscscan.com/address/0x5c0e2417aa9f0b38df8932858823f9588a8a23c8"
                            >
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <a
                            class="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                            href="/dashboard?user=1666338"
                          >
                            ID 1666338
                          </a>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          2
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BUSD
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BNB
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          <span>0</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          0
                        </td>
                      </tr>
                      <tr class=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                          <span>22.02.2024 20:24</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <div class="flex items-center space-x-2.5">
                            <span class="text-white font-medium text-xs">
                              0x422d...a200
                            </span>
                            <button>
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 20 20"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                                ></path>
                              </svg>
                            </button>
                            <a
                              target="_blank"
                              href="https://bscscan.com/address/0x422dab38c683b0bfbe892d2dea9c76c03176a200"
                            >
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <a
                            class="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                            href="/dashboard?user=1666185"
                          >
                            ID 1666185
                          </a>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BUSD
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BNB
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          <span>0</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          0
                        </td>
                      </tr>
                      <tr class=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                          <span>21.02.2024 16:34</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <div class="flex items-center space-x-2.5">
                            <span class="text-white font-medium text-xs">
                              0xDC93...1D8D
                            </span>
                            <button>
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 20 20"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                                ></path>
                              </svg>
                            </button>
                            <a
                              target="_blank"
                              href="https://bscscan.com/address/0xdc9302d90c087a4b605cee41d871eb0418391d8d"
                            >
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <a
                            class="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                            href="/dashboard?user=1665606"
                          >
                            ID 1665606
                          </a>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BUSD
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BNB
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          <span>0</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          0
                        </td>
                      </tr>
                      <tr class=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                          <span>20.02.2024 19:17</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <div class="flex items-center space-x-2.5">
                            <span class="text-white font-medium text-xs">
                              0xef75...Ca8c
                            </span>
                            <button>
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 20 20"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                                ></path>
                              </svg>
                            </button>
                            <a
                              target="_blank"
                              href="https://bscscan.com/address/0xef7581adee21c0e4448f91f01621d62674f0ca8c"
                            >
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <a
                            class="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                            href="/dashboard?user=1665161"
                          >
                            ID 1665161
                          </a>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BUSD
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BNB
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          <span>0</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          0
                        </td>
                      </tr>
                      <tr class=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                          <span>20.02.2024 10:22</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <div class="flex items-center space-x-2.5">
                            <span class="text-white font-medium text-xs">
                              0xb737...826B
                            </span>
                            <button>
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 20 20"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                                ></path>
                              </svg>
                            </button>
                            <a
                              target="_blank"
                              href="https://bscscan.com/address/0xb737802b8006114549f813ff8d67233521bb826b"
                            >
                              <svg
                                class="h-18px w-18px"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                          <a
                            class="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                            href="/dashboard?user=1664914"
                          >
                            ID 1664914
                          </a>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          1
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                          0
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BUSD
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                          0 BNB
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          <span>0</span>
                        </td>
                        <td class="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                          0
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="flex p-4 sm:p-2.5">
                  <button class="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 w-full rounded-mini flex justify-center items-center">
                    <svg
                      class="mr-2.5"
                      width="21"
                      height="20"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5 15.833c3.333 0 6.11-1.944 8.333-5.833-2.222-3.89-5-5.833-8.333-5.833S4.39 6.11 2.167 10c2.222 3.889 5 5.833 8.333 5.833ZM12.167 10a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0Z"
                      ></path>
                    </svg>{" "}
                    <span>See more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Partners;
