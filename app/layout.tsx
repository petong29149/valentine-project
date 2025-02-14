import type { Metadata } from "next";
import "./globals.css";
import { Sour_Gummy } from "next/font/google";

const sourGummy = Sour_Gummy({
  subsets: ['latin'],
  weight: "400",
})

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
    <html lang="en">
      <body
        className={`${sourGummy.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
