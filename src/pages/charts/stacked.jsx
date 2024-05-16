import { ChartsHeader, Stacked as StackedChart } from "../../components";

export default function Stacked() {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg m-4 md:m-10 mt-24 p-10 rounded-3xl">
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  );
}
