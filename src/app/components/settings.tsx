"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Settings() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="p-6 bg-cyan-400 dark:bg-slate-800 rounded-xl mb-4">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        App Settings
      </h1>
      <div className=" bg-cyan-200 dark:bg-slate-700 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <span className="text-lg text-slate-900 dark:text-slate-100">
            Dark Mode
          </span>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded bg-cyan-500 text-slate-100 dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-slate-400 transition-colors`}
          >
            {isDarkMode ? "Disable" : "Enable"}
          </button>
        </div>
      </div>
    </div>
  );
}
