"use client";
import LineGraph from "./lineGraph";
import { useEffect, useState } from "react";
import walletMovements from "../data/walletmovements.json";

interface WalletMovement {
  type: "expense" | "income";
  category?: string;
  source?: string;
  amount: number;
  description?: string;
  activityType?: string;
  date: string; // ISO date format
}

interface ChartData {
  labels: string[];
  values: number[];
}

export default function WideCard() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    values: [],
  });

  useEffect(() => {
    // Type assertion for walletMovements
    const movements = walletMovements as WalletMovement[];

    // Get the current year and month
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Filter movements to get only those for the current month
    const filteredMovements = movements.filter((movement) => {
      const movementDate = new Date(movement.date);
      return (
        movementDate.getFullYear() === currentYear &&
        movementDate.getMonth() === currentMonth
      );
    });

    // Aggregate data by day
    const activityTypeCounts: { [key: string]: number } = {};
    filteredMovements.forEach((movement) => {
      const dateLabel = new Date(movement.date).getDate().toString();
      if (!activityTypeCounts[dateLabel]) {
        activityTypeCounts[dateLabel] = 0;
      }
      activityTypeCounts[dateLabel] += movement.amount;
    });

    // Convert aggregated data to chart data format
    const labels = Object.keys(activityTypeCounts).sort(
      (a, b) => Number(a) - Number(b),
    );
    const values = labels.map((label) => activityTypeCounts[label]);

    setChartData({
      labels,
      values,
    });
  }, []);

  return (
    <div className="h-full w-full bg-gray-500 bg-opacity-40 shadow-xl rounded-xl flex flex-col p-4">
      <h1 className="text-3xl text-gray-200 mb-4">Monthly Movements</h1>
      <div className="flex-1 flex items-center justify-center mb-4">
        <LineGraph data={chartData} />
      </div>
      <div className="w-full flex justify-end"></div>
    </div>
  );
}
