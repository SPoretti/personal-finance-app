// src/components/PieChart.tsx
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
  ChartOptions,
} from "chart.js";

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
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
          "#FF9F40", // Orange
          "#FF61A6", // Pink (new color)
          "#C0C0C0", // Silver (new color)
        ],
        hoverBackgroundColor: [
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
          "#FF9F40", // Orange
          "#FF61A6", // Pink (new color)
          "#C0C0C0", // Silver (new color)
        ],
      },
    ],
  };

  const chartOptions: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "rgba(229, 231, 235, 1)", // Text color for legend labels
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems: TooltipItem<"pie">[]) =>
            tooltipItems[0].label || "",
          label: (tooltipItem: TooltipItem<"pie">) =>
            `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
        backgroundColor: "rgba(31, 41, 55, 0.9)", // Background color for tooltip
        titleColor: "rgba(229, 231, 235, 1)", // Text color for tooltip title
        bodyColor: "rgba(229, 231, 235, 1)", // Text color for tooltip body
        titleFont: {
          size: 14,
          weight: "bold",
          family: "'Helvetica Neue', 'Arial', sans-serif", // Font family for title
        },
        bodyFont: {
          size: 12,
          family: "'Helvetica Neue', 'Arial', sans-serif", // Font family for body
        },
      },
    },
  };

  return (
    <div className="w-full h-full mx-auto">
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
