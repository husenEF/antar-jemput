import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import clsx from "clsx";
import { MainProvider } from "@/src/providers/MainProvider";
import Header from "@/src/components/Header";
import ErrorBoundary from "@/src/components/errorBoundary";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(inter.className)}>
          <ErrorBoundary>
            <Header />
            <main className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
              {children}
            </main>
          </ErrorBoundary>
        </body>
      </html>
    </ClerkProvider>
  );
}
