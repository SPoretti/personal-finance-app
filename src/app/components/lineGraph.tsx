// src/components/LineChart.tsx
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartOptions,
  TooltipItem,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
);

interface LineChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const LineChart = ({ data }: LineChartProps) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Balance",
        data: data.values,
        borderColor: "#22D3EE", // Line color (tailwindcss cyan-400)
        backgroundColor: "rgba(59, 130, 246, 0.2)", // Fill color under the line (tailwindcss blue-500 with opacity)
        borderWidth: 2,
        pointBackgroundColor: "#EF4444", // Point color (tailwindcss red-500)
        pointBorderColor: "#FFFFFF", // Point border color (white)
        pointHoverBackgroundColor: "#EF4444", // Point hover color (tailwindcss red-500)
        pointHoverBorderColor: "#FFFFFF", // Point hover border color (white)
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "#E5E7EB", // Text color for legend labels (tailwindcss cool-gray-200)
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems: TooltipItem<"line">[]) =>
            tooltipItems[0].label || "",
          label: (tooltipItem: TooltipItem<"line">) =>
            `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
        backgroundColor: "rgba(31, 41, 55, 0.9)", // Background color for tooltip (tailwindcss cool-gray-800 with opacity)
        titleColor: "#E5E7EB", // Text color for tooltip title (tailwindcss cool-gray-200)
        bodyColor: "#E5E7EB", // Text color for tooltip body (tailwindcss cool-gray-200)
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
    scales: {
      x: {
        title: {
          display: true,
          text: "",
          color: "#E5E7EB", // Text color for x-axis title (tailwindcss cool-gray-200)
        },
        ticks: {
          color: "#E5E7EB", // Text color for x-axis ticks (tailwindcss cool-gray-200)
        },
      },
      y: {
        title: {
          display: true,
          text: "",
          color: "#E5E7EB", // Text color for y-axis title (tailwindcss cool-gray-200)
        },
        ticks: {
          color: "#E5E7EB", // Text color for y-axis ticks (tailwindcss cool-gray-200)
        },
      },
    },
  };

  return (
    <div className="w-full h-full mx-auto">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
