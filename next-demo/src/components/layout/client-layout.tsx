"use client";

import { cn } from "@/lib/utils";
import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const expanded = useSidebarExpandedStore((s) => s.expanded);
  const isHydrated = useSidebarExpandedStore((s) => s.isHydrated);

  if (!isHydrated) return null;

  return (
    <main
      className={cn(
        "transition-all duration-300 pt-[var(--height-header)]",
        expanded
          ? "ml-[var(--width-expanded-lnb)]"
          : "ml-[var(--width-collapsed-lnb)]"
      )}
    >
      <div className="px-20 max-w-full overflow-x-auto break-words">
        {children}
      </div>
    </main>
  );
}
