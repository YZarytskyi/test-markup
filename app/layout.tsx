import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { RootLayoutProps } from "@/app/types";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Service Light it Up",
  description:
    "We don't just find insights, We take your business to new heights",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
