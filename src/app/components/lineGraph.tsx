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
        borderColor: "#22d3ee", // Line color
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Fill color under the line
        borderWidth: 2,
        pointBackgroundColor: "#FF6384", // Point color
        pointBorderColor: "#FFF", // Point border color
        pointHoverBackgroundColor: "#FF6384", // Point hover color
        pointHoverBorderColor: "#FFF", // Point hover border color
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
          color: "rgba(229, 231, 235, 1)", // Text color for legend labels
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems: TooltipItem<"line">[]) =>
            tooltipItems[0].label || "",
          label: (tooltipItem: TooltipItem<"line">) =>
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
    scales: {
      x: {
        title: {
          display: true,
          text: "",
          color: "rgba(229, 231, 235, 1)",
        },
        ticks: {
          color: "rgba(229, 231, 235, 1)",
        },
      },
      y: {
        title: {
          display: true,
          text: "",
          color: "rgba(229, 231, 235, 1)",
        },
        ticks: {
          color: "rgba(229, 231, 235, 1)",
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
