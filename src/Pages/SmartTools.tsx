import { DashboardLayout } from "src/Layout/DashboardLayout";

const SmartTools = () => {
  return (
    <DashboardLayout>
      <main className="flex flex-1 w-full">
        <div className="flex flex-col w-full">
          <div className="mb-7.5">
            <div className="flex flex-col flex-wrap w-full sm:px-5">
              <div className="notranslate"></div>
              <div className="flex items-center mb-1.5 sm:mb-2.5"></div>
              <div className="w-full flex justify-between flex-wrap">
                <div className="flex flex-wrap items-center">
                  <span className="text-two-half text-white font-medium mr-2 sm:text-2xl whitespace-nowrap">
                    Smart tools
                  </span>
                  <a
                    className="inline-flex px-2.5 !leading-30px bg-blue-100 notranslate hover:bg-main-blue-300 text-main-blue rounded text-xl w-max sm:text-base"
                    href="/dashboard?user=1"
                  >
                    ID 1
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-50% flex flex-1 overflow-hidden relative w-full flex-col bg-black-light rounded p-7.5 pb-5 space-y-5 sm:space-y-2.5 sm:p-5 sm:rounded-none lg:max-w-full">
            <a target="_blank" href="https://t.me/busd_forsage_io_bot">
              <div className="flex items-center justify-between rounded-mini bg-white-100 hover:bg-white-300 p-5 sm:items-start">
                <div className="bg-black-light flex justify-center items-center rounded-full w-10 h-10 mr-5">
                  <svg
                    className="w-5 h-5 stroke-current text-white"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-1 flex-col items-start justify-center">
                  <span className="text-white font-medium text-base mb-1.5 notranslate">
                    FORSAGE BSC Notifier Bot
                  </span>
                  <span className="text-white-500 text-sm">
                    New partners and transactions notifications
                  </span>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://forsage-storage.s3.eu-central-1.amazonaws.com/forsageApp.apk"
            >
              <div className="flex items-center justify-between rounded-mini bg-white-100 hover:bg-white-300 p-5 sm:items-start">
                <div className="bg-black-light flex justify-center items-center rounded-full w-10 h-10 mr-5">
                  <svg
                    className="w-5 h-5 stroke-current text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
                  </svg>
                </div>
                <div className="flex flex-1 flex-col items-start justify-center">
                  <span className="text-white font-medium text-base mb-1.5 notranslate">
                    Official Forsage App
                  </span>
                  <span className="text-white-500 text-sm">
                    Enjoy all the features from your smartphone
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default SmartTools;
