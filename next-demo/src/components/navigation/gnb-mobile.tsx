"use client";

import { Text } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";

export default function GNBMobile() {
  const setExpanded = useSidebarExpandedStore((s) => s.setExpanded);

  return (
    <header className="fixed flex items-center p-2 w-full top-0 h-[var(--height-header)] border-b border-zinc-700 z-10 bg-background">
      <Button
        onClick={() => setExpanded(true)}
        className="cursor-pointer"
        variant="ghost"
        size="icon"
      >
        <Text style={{ width: "20px", height: "20px" }} />
      </Button>
    </header>
  );
}
