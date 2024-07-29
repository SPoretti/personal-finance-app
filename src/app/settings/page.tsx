"use client";
import Settings from "../components/settings";
import DatabaseInterface from "../components/databaseInterface";

export default function SettingsPage() {
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="w-full h-64">
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-cyan-300 to-cyan-200 dark:from-slate-900 dark:to-slate-700 p-6 shadow-lg">
          <h1 className="text-4xl font-extrabold dark:text-slate-100 mb-4">
            Settings
          </h1>
          <h2 className="text-lg font-medium dark:text-slate-400 text-center max-w-lg">
            Manage your account settings and preferences.
          </h2>
        </div>
      </div>
      <div className="w-full h-fit p-4">
        {/* <Settings /> */}
        <DatabaseInterface />
      </div>
    </div>
  );
}
