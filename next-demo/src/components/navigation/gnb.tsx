"use client";

import { cn } from "@/lib/utils";
import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";

export default function GNB() {
  const expanded = useSidebarExpandedStore((s) => s.expanded);
  const isHydrated = useSidebarExpandedStore((s) => s.isHydrated);

  if (!isHydrated) return null;

  return (
    <header
      className={cn(
        "fixed top-0 h-[var(--height-header)]",
        expanded
          ? "left-[var(--width-expanded-lnb)] w-[calc(100%-var(--width-expanded-lnb))]"
          : "left-[var(--width-collapsed-lnb)] w-[calc(100%-var(--width-collapsed-lnb))]"
      )}
    >
      안녕
    </header>
  );
}
