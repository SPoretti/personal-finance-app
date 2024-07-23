"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Settings() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="p-8 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        App Settings
      </h1>
      <div className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <span className="text-lg text-gray-900 dark:text-gray-100">
            Dark Mode
          </span>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded bg-rose-500 text-gray-100 dark:text-gray-900 hover:bg-rose-600 dark:hover:bg-gray-400 transition-colors`}
          >
            {isDarkMode ? "Disable" : "Enable"}
          </button>
        </div>
      </div>
    </div>
  );
}
