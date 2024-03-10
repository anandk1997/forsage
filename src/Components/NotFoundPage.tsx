import { ConnectMeta } from "./ConnectMetamask";

const NotFoundPage = () => {
  return (
    <>
      <ConnectMeta />

      <h1 className="text-5xl h-[100vh] flex justify-center items-center">
        404 Not Found
      </h1>
    </>
  );
};

export default NotFoundPage;
