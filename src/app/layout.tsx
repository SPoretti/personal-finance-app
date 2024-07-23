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
          <main className="min-h-screen flex flex-row">
            <Sidebar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
