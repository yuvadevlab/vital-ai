"use client";

import React from "react";
import { QueryProvider } from "./query/QueryProvider";
import { ThemeProvider } from "./theme/ThemeProvider";
import { Toaster } from "@vital-ai/ui";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
        <Toaster />
      </QueryProvider>
    </ThemeProvider>
  );
}
