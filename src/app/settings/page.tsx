"use client";
import Settings from "../components/settings";

export default function SettingsPage() {
  return (
    <div className="flex flex-col w-3/4 ml-auto dark:bg-gray-900 overflow-y-auto">
      <div className="w-full h-64">
        <div className="w-full h-full flex flex-col items-center justify-center dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700 p-6 shadow-lg">
          <h1 className="text-4xl font-extrabold dark:text-gray-100 mb-4">
            Settings
          </h1>
          <h2 className="text-lg font-medium dark:text-gray-300 text-center max-w-lg">
            Manage your account settings and preferences.
          </h2>
        </div>
      </div>
      <div className="w-full h-screen p-4">
        <Settings />
      </div>
    </div>
  );
}
