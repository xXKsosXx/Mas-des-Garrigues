"use client";

import { useReveal } from "@/hooks/useReveal";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  useReveal();
  return <>{children}</>;
}
