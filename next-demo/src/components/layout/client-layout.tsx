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
        "h-dvh flex flex-col",
        "transition-all duration-300",
        isMobile
          ? "ml-0 w-full"
          : expanded
          ? "ml-[var(--width-expanded-lnb)] w-[calc(100vw-var(--width-expanded-lnb))]"
          : "ml-[var(--width-collapsed-lnb)] w-[calc(100vw-var(--width-collapsed-lnb))]",
        "overflow-x-hidden"
      )}
    >
      <div className="min-w-0 break-words">{children}</div>
    </main>
  );
}
