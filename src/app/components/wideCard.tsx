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
  date: string;
  balance: number;
}

interface ChartData {
  labels: string[];
  values: number[];
}

type ViewOption = "currentMonth" | "allTransactions";

export default function WideCard() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    values: [],
  });
  const [viewOption, setViewOption] = useState<ViewOption>("currentMonth");

  useEffect(() => {
    // Type assertion for walletMovements
    const movements = walletMovements as WalletMovement[];

    // Get the current year and month
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Filter movements based on the selected view
    const filteredMovements = movements.filter((movement) => {
      const movementDate = new Date(movement.date);
      if (viewOption === "currentMonth") {
        return (
          movementDate.getFullYear() === currentYear &&
          movementDate.getMonth() === currentMonth
        );
      }
      return true; // For all transactions, no filtering by date
    });

    // Sort movements by date
    filteredMovements.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    // Initialize arrays for storing results
    const balanceChanges: number[] = [];
    const labels: string[] = [];

    // Iterate over the filtered movements
    filteredMovements.forEach((movement, index) => {
      // Use the provided balance from each movement
      balanceChanges.push(movement.balance);
      labels.push(new Date(movement.date).toLocaleDateString());
    });

    // Update chart data
    setChartData({
      labels,
      values: balanceChanges,
    });
  }, [viewOption]);

  return (
    <div className="h-full w-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 shadow-xl rounded-xl flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl dark:text-slate-200">Movements</h1>
        <select
          className="p-2 rounded bg-slate-800 border-slate-200 border text-slate-200 outline-none"
          value={viewOption}
          onChange={(e) => setViewOption(e.target.value as ViewOption)}
        >
          <option value="currentMonth">Current Month</option>
          <option value="allTransactions">All Transactions</option>
        </select>
      </div>
      <div className="flex-1 flex items-center justify-center mb-4">
        <LineGraph data={chartData} />
      </div>
    </div>
  );
}
