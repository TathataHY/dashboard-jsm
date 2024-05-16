import { ChartsHeader, LineChart } from "../../components";

export default function Line() {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg m-4 md:m-10 mt-24 p-10 rounded-3xl">
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
}
