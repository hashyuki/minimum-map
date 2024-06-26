import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ChatMap</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Chatを利用した観光マップ"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
