"use client";

import { Heading, PanelLeftClose } from "lucide-react";
import CustomButton from "../custom/custom-button";
import { useSidebarExpanded } from "@/hooks/use-sidebar-expanded";
import SidebarToggleButton from "./sidebar-toggle-button";

export default function LNB() {
  const { expanded, setExpanded } = useSidebarExpanded();

  /** 초기 expanded가 null일 때 렌더링하지 않음 → 깜빡임 방지 */
  if (expanded === null) return null;

  return (
    <aside
      className={`h-screen dark:bg-zinc-900 border-r [border-color:var(--color-navigation-border)] flex flex-col transition-all duration-300 ease-in-out
        ${expanded ? "w-60" : "w-13"}`}
    >
      {!expanded ? (
        <div className="flex items-center flex-col justify-center p-2">
          <SidebarToggleButton
            expanded={expanded}
            onToggle={(next) => setExpanded(next)}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="flex justify-between p-2">
            <CustomButton
              className="[cursor:pointer]"
              size="icon"
              variant="ghost"
            >
              <Heading />
            </CustomButton>
            <CustomButton
              className="[cursor:ew-resize]"
              size="icon"
              variant="ghost"
              tooltipContent="사이드바 닫기"
              onClick={() => setExpanded(false)}
            >
              <PanelLeftClose style={{ width: "20px", height: "20px" }} />
            </CustomButton>
          </div>
        </div>
      )}
    </aside>
  );
}
