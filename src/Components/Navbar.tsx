import { useNavContext } from "src/Contexts/useNavContext";

export const Navbar = () => {
  const { hideNavbar } = useNavContext();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-center w-full px-10 py-2.5 z-40 lg:p-0 lg:max-h-screen z-999999">
      <div className="flex justify-between items-center rounded-mini max-w-desktop-preview-bar w-full bg-main-blue px-5 py-2 shadow-preview-bar lg:pl-10 sm:pl-5 lg:py-2.5 lg:rounded-none lg:rounded-b-mini lg:pr-0 false">
        <div className="flex w-full overflow-hidden items-center justify-between space-x-2.5 lg:items-start">
          <div className="w-full flex justify-start items-center space-x-5 lg:flex-col lg:h-full lg:items-start lg:space-x-0 lg:space-y-7.5">
            <div className="flex items-center false lg:w-full lg:pr-10 sm:pr-5">
              <a href="/">
                <svg
                  className="block mr-2.5"
                  width="45"
                  height="30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.68 5.851a.482.482 0 0 1 .615.296l.43 1.247s-1.852-.59-2.818-.777l1.773-.766Zm6.055 3.336c-.004 0-.195-.131-.297-.186l-3.111-1.586c-.965-.46-.752-.82-1.118-1.826a6.228 6.228 0 0 0-.549-1.127C36.884 3.62 31.836 3.817 31.354 0c0 0-1.884 1.236-2.227 3.5C9.227 1.98 0 12.96 0 12.96c3.706-1.476 7.705-2.176 11.704-2.362-7.603 5.851-9.997 14.666-9.997 14.666s6.16-5.982 15.419-9.318C14.702 19.37 13.298 23.963 13.872 30c0 0 4.763-18.177 27.361-13.78 0 0 .827-2.417 2.962-4.89.135-.152.211-.382.227-.645a1.735 1.735 0 0 0-.687-1.498Z"
                    fill="#fff"
                  ></path>
                </svg>
              </a>
              <span className="text-base text-white whitespace-nowrap mr-5 notranslate lg:mr-0 false">
                Preview ID
                <span className="hidden lg:inline ml-1.5">1</span>
              </span>
              <div className="flex justify-between items-center space-x-2.5 lg:space-x-5 lg:w-full lg:hidden">
                <input className="px-4 py-3 rounded-mini leading-5 bg-white-100 text-white text-base outline-none false" />
                <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none bg-white-100 py-3 px-5 cursor-not-allowed">
                  Go
                </button>
              </div>
            </div>
          </div>
          <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-black-500 whitespace-nowrap lg:hidden">
            Connect wallet
          </button>
        </div>
        <div className="flex lg:justify-end lg:ml-auto lg:pr-10 sm:pr-5">
          <button
            className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 rounded-full lg:hidden w-10 h-10 !p-0 ml-5"
            onClick={hideNavbar}
          >
            <svg
              className="w-6 h-6 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6 6 18M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <div className="">
            <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 flex-col rounded-full w-10 h-10 !p-0 hidden lg:flex">
              <span className="w-4 border-t border-white mb-2"></span>
              <span className="w-4 border-t border-white"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
