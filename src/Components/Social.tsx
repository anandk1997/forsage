import {
  DiscordIcon,
  TelegramIcon,
  TwitterIcon,
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
            href="https://discord.gg/#/"
          >
            <DiscordIcon />
          </a>

          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            rel="noreferrer"
            href="https://t.me/#/"
          >
            <TelegramIcon />
          </a>

          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@#/"
          >
            <YoutubeIcon />
          </a>

          <a
            className="w-7 h-7 flex justify-center items-center rounded-full bg-white-100 hover:bg-white-300"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/#/"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
