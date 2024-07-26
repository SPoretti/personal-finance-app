// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "@/context/ThemeContext"; // Adjust the import based on your structure

export const metadata: Metadata = {
  title: "Personal Finance App",
  description: "Finance Dashboard (Personal Project)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <main className="min-h-screen flex flex-row w-full">
            <div className="min-h-screen w-1/4">
              <Sidebar />
            </div>
            <div className="min-h-screen w-3/4">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
