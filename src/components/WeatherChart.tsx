import { useMemo } from "react";
import Chart from "react-apexcharts";
import type { ChartType } from "../types";
import { getChartOptions } from "../utils";

interface WeatherChartProps {
  title: string;
  data: number[];
  chartType: ChartType;
  className?: string;
}

export const WeatherChart = ({
  title,
  data,
  chartType,
  className,
}: WeatherChartProps) => {
  const chartOptions = useMemo(() => getChartOptions(chartType), [chartType]);
  return (
    <div className={className}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <Chart
        options={chartOptions}
        series={[{ name: title, data }]}
        type={chartType}
        height={250}
      />
    </div>
  );
};
