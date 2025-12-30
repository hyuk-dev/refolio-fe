"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function getDocumentTheme(): ThemeMode {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    setMode(getDocumentTheme());
  }, []);

  const handleToggle = () => {
    const nextMode: ThemeMode = mode === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextMode;
    localStorage.setItem("theme", nextMode);
    setMode(nextMode);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="group flex items-center rounded-full px-2.5 py-1.5 text-sm transition hover:opacity-80 cursor-pointer"
      aria-label="다크 모드 토글"
      suppressHydrationWarning
    >
      <span className="inline-flex h-6 w-6 items-center justify-center">
        {mode === "dark" ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.6"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M12 4.5V2.5M12 21.5v-2M4.5 12H2.5M21.5 12h-2M6 6l-1.4-1.4M19.4 19.4 18 18M6 18l-1.4 1.4M19.4 4.6 18 6" />
            <circle cx="12" cy="12" r="4" fill="#f59e0b" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="#60a5fa"
            stroke="#60a5fa"
            strokeWidth="1.6"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M21 14.5A9 9 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
