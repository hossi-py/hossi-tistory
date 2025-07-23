"use client";

import { cn } from "@/lib/utils";
import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const expanded = useSidebarExpandedStore((s) => s.expanded);

  return (
    <main
      className={cn(
        "transition-all duration-300",
        expanded
          ? "ml-[var(--width-expanded-lnb)] w-[calc(100%-var(--width-expanded-lnb))]"
          : "ml-[var(--width-collapsed-lnb)] w-[calc(100%-var(--width-collapsed-lnb))]"
      )}
    >
      <div>{children}</div>
      {/* <div className="relative flex max-w-full flex-1 flex-col">
        <div className="flex items-center justify-center">{children}</div>
      </div> */}
    </main>
  );
}
