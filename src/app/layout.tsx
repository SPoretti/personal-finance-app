import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/sidebar";

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
        <main className="min-h-screen flex flex-row ">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
