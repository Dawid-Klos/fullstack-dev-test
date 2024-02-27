import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PrimeNumbers API",
  description:
    "Our API allows you to effortlessly retrieve prime numbers up to a given value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
