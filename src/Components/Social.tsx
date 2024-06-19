import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  YoutubeIcon,
} from "src/Assets/Svg";

export const Social = () => {
  return (
    <div className="mt-auto">
      <div className="pt-5 pb-10 w-full flex flex-col items-center justify-center">
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
    </div>
  );
};
