import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "../components/main-header/main-header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
