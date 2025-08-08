"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const expanded = useSidebarExpandedStore((s) => s.expanded);
  const isHydrated = useSidebarExpandedStore((s) => s.isHydrated);
  const isMobile = useIsMobile();

  if (!isHydrated) return null;

  return (
    <main
      className={cn(
        "pt-[var(--height-header)]",
        "h-full flex flex-col",
        "transition-all duration-300",
        isMobile ? "!m-0" : "",
        expanded && !isMobile
          ? "ml-[var(--width-expanded-lnb)]"
          : "ml-[var(--width-collapsed-lnb)]"
      )}
    >
      {children}
    </main>
  );
}
