"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarExpandedState {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  toggleExpanded: () => void;
}

export const useSidebarExpandedStore = create<SidebarExpandedState>()(
  persist(
    (set) => ({
      expanded: true,
      setExpanded: (value) => set({ expanded: value }),
      toggleExpanded: () => set((state) => ({ expanded: !state.expanded })),
    }),
    {
      name: "lnb-expanded",
    }
  )
);
