"use client";

import ThemeProvider from "./theme/ThemeProvider";

export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

