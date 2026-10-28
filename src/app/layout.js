import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const description =
  "Izaz Ahmad — Full Stack Engineer building web, mobile and AI products with React, React Native, Node.js, Python and Supabase.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Izaz Ahmad | Full Stack Engineer",
  description,
  keywords: [
    "Izaz Ahmad",
    "Full Stack Engineer",
    "React Native Developer",
    "Next.js",
    "AI Engineer",
    "Supabase",
    "Pakistan",
  ],
  authors: [{ name: "Izaz Ahmad" }],
  openGraph: {
    title: "Izaz Ahmad | Full Stack Engineer",
    description,
    type: "website",
    images: [{ url: "/mypic.png", width: 640, height: 800, alt: "Izaz Ahmad" }],
  },
  twitter: {
    card: "summary",
    title: "Izaz Ahmad | Full Stack Engineer",
    description,
    creator: "@IzazCodes",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Applies the saved/system theme before first paint so the page never flashes light-then-dark.
const themeScript = `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}var r=document.documentElement;r.classList.toggle("dark",t==="dark");r.style.colorScheme=t}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
