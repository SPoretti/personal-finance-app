"use client";
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

type ViewOption = "currentMonth" | "allTransactions";

export default function Movements() {
  const [viewOption, setViewOption] = useState<ViewOption>("currentMonth");
  const [filteredMovements, setFilteredMovements] = useState<WalletMovement[]>(
    [],
  );

  useEffect(() => {
    // Type assertion for walletMovements
    const movements = walletMovements as WalletMovement[];

    // Get the current year and month
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Filter movements based on the selected view
    const filtered = movements.filter((movement) => {
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
    filtered.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    // Update state with filtered movements
    setFilteredMovements(filtered);
  }, [viewOption]); // Depend on viewOption to re-run the effect when it changes

  return (
    <div className="h-full w-full dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl rounded-xl flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl dark:text-gray-200">List</h1>
        <select
          className="p-2 rounded bg-transparent border-rose-500 border dark:text-gray-200 outline-none"
          value={viewOption}
          onChange={(e) => setViewOption(e.target.value as ViewOption)}
        >
          <option value="currentMonth">Current Month</option>
          <option value="allTransactions">All Transactions</option>
        </select>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="text-gray-200">
          {filteredMovements.map((movement, index) => (
            <li
              key={index}
              className="mb-2 p-2 shadow-md dark:bg-gradient-to-r dark:from-slate-700 dark:via-slate-800 dark:to-slate-700 rounded"
            >
              <div className="flex justify-between">
                <span>{new Date(movement.date).toLocaleDateString()}</span>
                <span
                  className={
                    movement.type === "income"
                      ? "text-emerald-400"
                      : "text-rose-400"
                  }
                >
                  {movement.type === "income" ? "+" : "-"}${movement.amount}
                </span>
              </div>
              <div className="text-sm dark:text-gray-400">
                {movement.description || movement.category || "No description"}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
