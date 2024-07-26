"use client";
import PieGraph from "./pieGraph";
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

export default function PieCard() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    values: [],
  });

  useEffect(() => {
    // Type assertion for walletMovements
    const movements = walletMovements as WalletMovement[];

    // Aggregate data by activityType
    const activityTypeCounts: Record<string, number> = {};

    movements.forEach((movement) => {
      if (movement.type === "expense") {
        if (movement.activityType) {
          activityTypeCounts[movement.activityType] =
            (activityTypeCounts[movement.activityType] || 0) + 1;
        }
      }
    });

    // Convert aggregated data to chart data format
    const labels = Object.keys(activityTypeCounts);
    const values = Object.values(activityTypeCounts);

    setChartData({
      labels,
      values,
    });
  }, []);

  return (
    <div className="h-full w-full bg-gradient-to-tr from-cyan-300 to-cyan-200 dark:from-slate-800 dark:to-slate-900 shadow-xl rounded-xl flex flex-col p-4">
      <h1 className="text-3xl mb-4">Pie Graph by Activity Type</h1>
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
