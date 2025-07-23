"use client";

import { cn } from "@/lib/utils";
import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";

export default function ClientLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const expanded = useSidebarExpandedStore((s) => s.expanded);
  const isHydrated = useSidebarExpandedStore((s) => s.isHydrated);

  if (!isHydrated) return null;

  return (
    <main
      className={cn(
        "transition-all duration-300",
        expanded
          ? "ml-[var(--width-expanded-lnb)]"
          : "ml-[var(--width-collapsed-lnb)]"
      )}
    >
      <div className="">{children}</div>
    </main>
  );
}
