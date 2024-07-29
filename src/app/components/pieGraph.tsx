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
          "#EF4444", // Red (tailwindcss red-500)
          "#3B82F6", // Blue (tailwindcss blue-500)
          "#F59E0B", // Yellow (tailwindcss yellow-500)
          "#14B8A6", // Teal (tailwindcss teal-500)
          "#8B5CF6", // Purple (tailwindcss purple-500)
          "#F97316", // Orange (tailwindcss orange-500)
          "#EC4899", // Pink (tailwindcss pink-500)
          "#9CA3AF", // Silver (tailwindcss gray-400)
        ],
        hoverBackgroundColor: [
          "#DC2626", // Red (tailwindcss red-600)
          "#2563EB", // Blue (tailwindcss blue-600)
          "#D97706", // Yellow (tailwindcss yellow-600)
          "#0D9488", // Teal (tailwindcss teal-600)
          "#7C3AED", // Purple (tailwindcss purple-600)
          "#EA580C", // Orange (tailwindcss orange-600)
          "#DB2777", // Pink (tailwindcss pink-600)
          "#6B7280", // Silver (tailwindcss gray-500)
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
