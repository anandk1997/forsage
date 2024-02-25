import React from "react";

export const Footer = () => {
  return (
    <footer className="flex lg:flex-col items-center mt-auto justify-between lg:justify-start lg:items-start py-10 w-full lg:p-5 lg:pb-9 pb-0 lg:pb-0 z-10">
      <div className="hidden lg:block mb-7.5">
        <div className="flex space-x-4 w-full">
          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            href="https://discord.gg/forsage/"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 21 15"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.581 1.247A15.918 15.918 0 0 0 13.58 0a.084.084 0 0 0-.065.028c-.169.31-.366.712-.497 1.022a15.08 15.08 0 0 0-4.499 0A9.395 9.395 0 0 0 8.012.028C8.002.01 7.975 0 7.947 0a16.038 16.038 0 0 0-4.003 1.247c-.009 0-.018.009-.028.018C1.367 5.08.664 8.791 1.011 12.465c0 .02.01.038.028.047a16.28 16.28 0 0 0 4.911 2.484c.028.01.056 0 .066-.019.375-.515.712-1.059 1.003-1.63.018-.038 0-.075-.038-.085-.534-.206-1.04-.45-1.537-.73-.037-.02-.037-.076-.01-.104.104-.075.207-.16.31-.234a.058.058 0 0 1 .066-.01c3.224 1.472 6.7 1.472 9.888 0a.058.058 0 0 1 .065.01c.103.084.206.16.31.243.037.029.037.085-.01.104-.487.29-1.003.524-1.537.73-.037.01-.047.057-.037.085.3.572.637 1.115 1.002 1.63.029.01.057.02.085.01a16.215 16.215 0 0 0 4.92-2.484.052.052 0 0 0 .029-.046c.412-4.246-.685-7.93-2.906-11.2-.01-.01-.019-.02-.038-.02ZM7.506 10.226c-.965 0-1.771-.89-1.771-1.987s.787-1.987 1.771-1.987c.994 0 1.78.9 1.771 1.987 0 1.096-.787 1.986-1.771 1.986Zm6.533 0c-.966 0-1.772-.89-1.772-1.987s.788-1.987 1.772-1.987c.993 0 1.78.9 1.771 1.987 0 1.096-.778 1.986-1.771 1.986Z"></path>
            </svg>
          </a>
          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            href="https://t.me/forsageio_official/"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.915.776.841 5.168a.4.4 0 0 0 .03.755l2.79.864 1.133 3.503a.4.4 0 0 0 .653.17l1.64-1.523 3.11 2.29a.4.4 0 0 0 .627-.231l2.166-9.294a.8.8 0 0 0-1.075-.926Zm-6.483 6.74-.346 2.072-.8-2.901 7.816-5.1-6.67 5.929Z"
                fill="#fff"
              ></path>
            </svg>
          </a>
          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            href="https://www.youtube.com/@FORSAGECommunity/"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.326 1.702A1.687 1.687 0 0 0 12.163.494C11.13.2 6.998.2 6.998.2S2.867.2 1.834.482C1.279.64.822 1.115.67 1.702.398 2.775.398 5 .398 5s0 2.236.272 3.298c.153.587.598 1.05 1.164 1.208 1.043.294 5.164.294 5.164.294s4.132 0 5.165-.282a1.687 1.687 0 0 0 1.164-1.209c.271-1.073.271-3.298.271-3.298s.011-2.236-.272-3.309ZM5.683 7.055v-4.11L9.119 5 5.683 7.055Z"
                fill="#fff"
              ></path>
            </svg>
          </a>
          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            href="https://twitter.com/forsageofficial/"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.196 1.338c-.442.195-.91.324-1.39.382.506-.302.884-.779 1.064-1.34a4.79 4.79 0 0 1-1.536.588 2.42 2.42 0 0 0-4.125 2.208A6.86 6.86 0 0 1 1.219.643a2.423 2.423 0 0 0 .751 3.235c-.4-.01-.774-.12-1.1-.302v.03A2.422 2.422 0 0 0 2.813 5.98a2.441 2.441 0 0 1-1.092.04 2.425 2.425 0 0 0 2.263 1.683A4.854 4.854 0 0 1 .398 8.705 6.767 6.767 0 0 0 4.103 9.8c4.458 0 6.893-3.692 6.893-6.895 0-.105-.003-.21-.008-.312a4.928 4.928 0 0 0 1.208-1.255Z"
                fill="#fff"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <span className="text-white-500 text-xs font-normal lg:mb-2.5">
        © 2024 All Rights Reserved
      </span>
      <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-0 py-0 bg-transparent text-white hover:text-white-500 font-normal text-sm notranslate">
        Documents
      </button>
    </footer>
  );
};
