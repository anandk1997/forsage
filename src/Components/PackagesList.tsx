import { executeTransactionForWorking } from "src/Api/ExecuteTransactionForWorking";

export const PackagesList = ({ packages, packageType, user }: any) => {
  const executeTransactionForMatrix = (packageId: any, price: any) => {
    console.log("attributeValue", packageId);
    console.log("price", price);
  };

  return (
    <>
      {packages &&
        packages.length > 0 &&
        packages.map((value: any, i: number) => {
          return (
            <a className="aTag" key={i}>
              <button
                type="button"
                onClick={() =>
                  value?.isActive
                    ? undefined
                    : packageType === "working"
                      ? executeTransactionForWorking(
                          value._id,
                          value.price,
                          user,
                        )
                      : executeTransactionForMatrix(value._id, value.price)
                }
                className={
                  value?.isActive
                    ? "btn btn-info btn-lg bx activated"
                    : "btn btn-info btn-lg bx active amountClass"
                }
              >
                <span> $ {value?.price} </span>
              </button>
            </a>
          );
        })}
    </>
  );
};
