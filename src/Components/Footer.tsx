import { FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from "src/Assets/Svg";

export const Footer = () => {
  return (
    <footer className="flex lg:flex-col items-center mt-auto justify-between lg:justify-start lg:items-start py-10 w-full lg:p-5 lg:pb-9 pb-0 lg:pb-0 z-10">
      <div className="hidden lg:block mb-7.5">
        <div className="flex space-x-4 w-full">
          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/right_soch.1/"
          >
           <InstagramIcon />
          </a>
          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/RohitSh52147632"
          >
           <TwitterIcon />
          </a>
          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            rel="noreferrer"
            href="https://t.me/VIPCRYPTOGLOBAL"
          >
          <TelegramIcon />
          </a>
          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@rscryptoglobal"
          >
           <YoutubeIcon />
          </a>
          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100073645694870"
          >
          <FacebookIcon />
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
