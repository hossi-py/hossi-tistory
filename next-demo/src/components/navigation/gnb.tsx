"use client";

import { cn } from "@/lib/utils";
import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";

export default function GNB({ className }: { className?: string }) {
  const expanded = useSidebarExpandedStore((s) => s.expanded);
  const isHydrated = useSidebarExpandedStore((s) => s.isHydrated);

  if (!isHydrated) return null;

  return (
    <header
      className={cn(
        "fixed top-0 flex items-center px-4 shadow transition-all duration-300",
        "h-[var(--height-header)]",
        expanded
          ? "ml-[var(--width-expanded-lnb)] w-[calc(100%-var(--width-expanded-lnb))]"
          : "ml-[var(--width-collapsed-lnb)] w-[calc(100%-var(--width-collapsed-lnb))]",
        // "sm:ml-0 sm:w-full",
        className
      )}
    >
      안녕
    </header>
  );
}
