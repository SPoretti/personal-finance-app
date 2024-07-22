"use client";
import PieGraph from "./pieGraph";
import { useEffect, useState } from "react";
import data from "../data/data.json";

interface ChartData {
  labels: string[];
  values: number[];
}

export default function PieCard() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: data.labels,
    values: data.values,
  });

  useEffect(() => {
    setChartData({
      labels: data.labels,
      values: data.values,
    });
  }, []);

  return (
    <div className="h-full w-full bg-neutral-100 bg-opacity-40 shadow-xl rounded-xl flex flex-col justify-evenly">
      <h1 className="text-3xl text-slate-800 mx-10">Pie Graph Spese</h1>
      <PieGraph data={chartData} />
      <div className="w-full flex justify-end items-end">
        <button className="border-2 border-solid border-emerald-500 rounded-md p-2">
          Dettagli
        </button>
      </div>
    </div>
  );
}
