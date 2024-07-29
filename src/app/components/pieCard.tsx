"use client";

import { useEffect, useState } from "react";
import PieGraph from "./pieGraph";
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

export default function PieCard() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    values: [],
  });
  const [viewOption, setViewOption] = useState<ViewOption>("currentMonth");

  useEffect(() => {
    const movements = walletMovements as WalletMovement[];

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const filteredMovements = movements.filter((movement) => {
      const movementDate = new Date(movement.date);
      if (viewOption === "currentMonth") {
        return (
          movementDate.getFullYear() === currentYear &&
          movementDate.getMonth() === currentMonth
        );
      }
      return true;
    });

    const activityTypeCounts: Record<string, number> = {};

    filteredMovements.forEach((movement) => {
      if (movement.activityType) {
        activityTypeCounts[movement.activityType] =
          (activityTypeCounts[movement.activityType] || 0) + 1;
      }
    });

    const labels = Object.keys(activityTypeCounts);
    const values = Object.values(activityTypeCounts);

    setChartData({
      labels,
      values,
    });
  }, [viewOption]);

  return (
    <div className="h-full w-full bg-gradient-to-tr from-cyan-300 to-cyan-200 dark:from-slate-800 dark:to-slate-900 shadow-xl rounded-xl flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Pie Graph by Activity Type</h1>
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
        <PieGraph data={chartData} />
      </div>
      <div className="w-full flex justify-end">
        <a className="buttonBasics" href="/wallet">
          Details 🡪
        </a>
      </div>
    </div>
  );
}
