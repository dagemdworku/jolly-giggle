import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jolly Giggle",
  description: "Welcome to JollyGiggle, Your Daily Dose of Joy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
        <link rel="manifest" href="icons/site.webmanifest" />
        <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
