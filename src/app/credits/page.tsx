import React from "react";

function Credits() {
  return (
    <div className="flex flex-col h-screen w-full p-5 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-roboto">
      <h1 className="text-4xl font-bold mb-8 text-center">Credits</h1>
      <div className="flex flex-col space-y-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Libraries</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>React - A JavaScript library for building user interfaces</li>
            <li>
              Tailwind CSS - A utility-first CSS framework for rapid UI
              development
            </li>
            <li>
              Fontsource - Self-host Open Source fonts in neatly bundled NPM
              packages
            </li>
          </ul>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Fonts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Roboto - A versatile and modern typeface from Google Fonts</li>
          </ul>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Icons</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Font Awesome - The web&apos;s most popular icon set and toolkit
            </li>
          </ul>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Other Tools</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Visual Studio Code - A powerful, lightweight code editor</li>
            <li>GitHub - A platform for version control and collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Credits;
