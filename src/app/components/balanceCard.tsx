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

interface BalanceData {
  balance: number;
}

export default function BalanceCard() {
  const [balanceData, setBalanceData] = useState<BalanceData>({
    balance: 0,
  });

  useEffect(() => {
    // Initialize balance data
    const lastMovement = walletMovements[0];
    if (lastMovement) {
      setBalanceData({
        balance: lastMovement.balance,
      });
    }
  }, []);

  return (
    <div className="h-full w-full bg-gradient-to-tr from-cyan-300 to-cyan-200 dark:from-slate-800 dark:to-slate-900 shadow-xl rounded-xl flex flex-col justify-between p-4">
      <h1 className="text-3xl">Wallet</h1>
      <div className="text-xl">
        <p>Current Balance:</p>
        <p className="text-2xl font-bold">${balanceData.balance.toFixed(2)}</p>
      </div>
      <div className="w-full flex justify-end">
        <a className="buttonBasics" href="/wallet">
          Details 🡪
        </a>
      </div>
    </div>
  );
}
