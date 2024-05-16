import { ChartsHeader, Pie as PieChart } from "../../components";
import { pieChartData } from "../../data/dummy";

export default function Pie() {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg m-4 md:m-10 mt-24 p-10 rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={pieChartData}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
}
