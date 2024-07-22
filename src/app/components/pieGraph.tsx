// src/components/PieChart.tsx
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const PieChart = ({ data }: PieChartProps) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data.values,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "right" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-full h-40 mx-auto">
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
