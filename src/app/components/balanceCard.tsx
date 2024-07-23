"use client";
import { useEffect, useState } from "react";
import data from "../data/wallet.json";
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

interface BalanceData {
  balance: number;
}

interface MonthlyNetValueData {
  currentMonthNet: number;
  previousMonthNet: number;
  percentageChange: number | null;
}

const calculateMonthlyNetValue = (
  movements: WalletMovement[],
  month: string,
): number => {
  const totalIncome = movements
    .filter(
      (movement) =>
        movement.type === "income" && movement.date.startsWith(month),
    )
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = movements
    .filter(
      (movement) =>
        movement.type === "expense" && movement.date.startsWith(month),
    )
    .reduce((acc, curr) => acc + curr.amount, 0);

  return totalIncome - totalExpenses;
};

const calculatePercentageChange = (
  currentMonthNet: number,
  previousMonthNet: number,
): number => {
  if (previousMonthNet === 0) return 0; // Avoid division by zero
  return ((currentMonthNet - previousMonthNet) / previousMonthNet) * 100;
};

export default function BalanceCard() {
  const [balanceData, setBalanceData] = useState<BalanceData>({
    balance: 0,
  });
  const [monthlyNetValue, setMonthlyNetValue] = useState<MonthlyNetValueData>({
    currentMonthNet: 0,
    previousMonthNet: 0,
    percentageChange: null,
  });

  useEffect(() => {
    // Initialize balance data
    setBalanceData({
      balance: data.balance,
    });

    // Calculate monthly net values
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    const previousMonth = `${now.getFullYear()}-${String(now.getMonth()).padStart(2, "0")}`;

    const netCurrentMonth = calculateMonthlyNetValue(
      walletMovements as WalletMovement[],
      currentMonth,
    );
    const netPreviousMonth = calculateMonthlyNetValue(
      walletMovements as WalletMovement[],
      previousMonth,
    );

    setMonthlyNetValue({
      currentMonthNet: netCurrentMonth,
      previousMonthNet: netPreviousMonth,
      percentageChange: calculatePercentageChange(
        netCurrentMonth,
        netPreviousMonth,
      ),
    });
  }, []);

  return (
    <div className="h-full w-full bg-gray-500 bg-opacity-40 shadow-xl rounded-xl flex flex-col justify-between p-4">
      <h1 className="text-3xl text-gray-200 mb-4">Wallet</h1>
      <div className="text-xl text-gray-300 mb-4">
        <p>Current Balance:</p>
        <p className="text-2xl font-bold">${balanceData.balance.toFixed(2)}</p>
        <div className="mt-4">
          <p>Current Month Net Value:</p>
          <p className="text-2xl font-bold">
            ${monthlyNetValue.currentMonthNet.toFixed(2)}
          </p>
          {monthlyNetValue.previousMonthNet !== 0 &&
            monthlyNetValue.percentageChange !== null && (
              <p className="text-xl text-rose-300 mt-2">
                Percentage Change from Last Month:{" "}
                {monthlyNetValue.percentageChange.toFixed(2)}%
              </p>
            )}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <a className="buttonBasics" href="/wallet">
          Dettagli
        </a>
      </div>
    </div>
  );
}
