import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

type Props = {
  children?: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-neutral-950">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="container max-w-6xl mx-auto py-1 px-4 lg:px-0 bg-white dark:bg-neutral-950">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}