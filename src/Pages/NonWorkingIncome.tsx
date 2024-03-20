import IncomeTable from "src/Components/IncomeTable";
import { useIncome } from "src/Hooks/useIncome";

const ReferalIncome = () => {
  const { data, isPending, handleChangePage } = useIncome("matrixIncome");

  return <IncomeTable {...{ data, isPending, handleChangePage }} />;
};

export default ReferalIncome;
