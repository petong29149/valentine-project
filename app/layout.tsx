import type { Metadata } from "next";
import "./globals.css";
import { Sour_Gummy } from "next/font/google";

const sourGummy = Sour_Gummy({
  subsets: ['latin'],
  weight: "400",
})

export const metadata: Metadata = {
  title: "V-day message from Petong",
  description: "Valentine's Day is here for you all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourGummy.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
