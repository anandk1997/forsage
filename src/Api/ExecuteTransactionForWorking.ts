import toast from "react-hot-toast";
import { checkLevel } from "./CheckLevel";
import { MY_CONTRACT_ADDRESS, usdtAddress } from "src/Utils/Addresses";
import { submitWork } from "./SubmitWork";
import { MY_ABI, USDT_ABI } from "src/Utils/ABI";
import Web3 from "web3";

export const executeTransactionForWorking = async (
  packageId: any,
  price: any,
  user: any,
) => {
  console.log("attributeValue", packageId);
  console.log("price", price);

  const ada = await checkLevel(price);

  if (!ada?.address) {
    toast.error("Please enter upline");
    return;
  }
  if (!window.ethereum) {
    console.log("window.ethereum is not available");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  if (accounts[0] !== user?.addresses?.ethAddress) {
    toast.error("Please connect registered address");
    return;
  }

  try {
    const web3 = new Web3(window.ethereum);
    const gasPrice = await web3.eth.getGasPrice();
    const amounts: any[] = [];

    for (let sub = 0; sub < ada.amount.length; sub++) {
      const amountNumber = parseFloat(ada?.amount[sub]);

      if (!isNaN(amountNumber)) {
        amounts[sub] = (amountNumber * 1e18).toString();
      } else {
        toast.error(`Failed to convert '${ada?.amount[sub]}' to a number.`);

        console.error(`Failed to convert '${ada?.amount[sub]}' to a number.`);
      }
    }
    const own_contract = new web3.eth.Contract(MY_ABI, MY_CONTRACT_ADDRESS, {
      from: accounts[0],
    });

    window.contract = new web3.eth.Contract(USDT_ABI, usdtAddress);
    const final_amount = price;

    const gasEstimate = await window.contract.methods
      .approve(MY_CONTRACT_ADDRESS, (final_amount * 1e18).toString())
      .estimateGas({ from: accounts[0] });

    window.contract.methods
      .approve(MY_CONTRACT_ADDRESS, (final_amount * 1e18).toString())
      .send({
        from: accounts[0],
        gas: gasEstimate,
        gasPrice: gasPrice,
      })
      .then(async () => {
        const estimatedGas = await own_contract.methods
          .createAccount(ada?.address, amounts, usdtAddress)
          .estimateGas({
            from: accounts[0],
          });
        own_contract.methods
          .createAccount(ada?.address, amounts, usdtAddress)
          .send({
            gas: String(estimatedGas),
            gasPrice: String(gasPrice),
          })
          .once("transactionHash", (hash) => {
            // call signup api with some more parms
            const uniqueId = ada?.uniqueId;
            const transactionHash = hash;
            submitWork(price, uniqueId, transactionHash);
          });
      })
      .catch((error: any) => {
        toast.error(error.message);
      })
      .finally(() => console.log("done"));
  } catch (error: any) {
    console.log("here last ", error);
    toast.error(error?.data?.message);
  } finally {
    console.log("done");
  }
};
