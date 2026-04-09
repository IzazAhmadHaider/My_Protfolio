import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Izaz Ahmad | Full Stack Engineer",
  description: "Minimal, modern portfolio of Izaz Ahmad, Full Stack Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
