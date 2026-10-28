"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "portfolio-theme";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

function applyTheme(theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    const initialTheme = stored === "dark" || stored === "light" ? stored : getSystemTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const setAndPersist = useCallback((nextTheme) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    setAndPersist(theme === "dark" ? "light" : "dark");
  }, [setAndPersist, theme]);

  const value = useMemo(() => ({ theme, setTheme: setAndPersist, toggleTheme }), [theme, setAndPersist, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

