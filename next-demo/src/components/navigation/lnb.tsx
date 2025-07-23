"use client";

import { FolderGit2, NotebookPen, PanelLeftClose, User } from "lucide-react";
import CustomButton from "../custom/custom-button";
import SidebarToggleButton from "./sidebar-toggle-button";
import { cn } from "@/lib/utils";
import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";

export default function LNB() {
  const expanded = useSidebarExpandedStore((s) => s.expanded);
  const setExpanded = useSidebarExpandedStore((s) => s.setExpanded);
  const toggleExpanded = useSidebarExpandedStore((s) => s.toggleExpanded);

  /** 초기 expanded가 null일 때 렌더링하지 않음 → 깜빡임 방지 */
  if (expanded === null) return null;

  return (
    <aside
      className={cn(
        "h-screen dark:bg-zinc-900 border-r [border-color:var(--color-navigation-border)]",
        "flex flex-col transition-all duration-300 ease-in-out",
        expanded ? "w-60" : "w-13"
      )}
    >
      {/* 상단 영역 */}
      <div className="flex items-center justify-between p-2">
        <SidebarToggleButton expanded={expanded} onToggle={toggleExpanded} />

        {/* 열려있을 때만 닫기 버튼 표시 */}
        {expanded && (
          <CustomButton
            className="[cursor:ew-resize]"
            size="icon"
            variant="ghost"
            tooltipContent="사이드바 닫기"
            tooltipPosition="bottom"
            onClick={() => setExpanded(false)}
          >
            <PanelLeftClose style={{ width: "20px", height: "20px" }} />
          </CustomButton>
        )}
      </div>

      {/* 메뉴 */}
      <nav className="flex flex-col px-2 mt-2">
        <CustomButton
          className={cn(
            "cursor-pointer",
            expanded && "justify-baseline pl-2.5"
          )}
          icon={<User />}
          label="소개"
          tooltipContent={expanded ? "" : "소개"}
          variant="ghost"
          expanded={expanded}
        />
        <CustomButton
          className={cn(
            "cursor-pointer",
            expanded && "justify-baseline pl-2.5"
          )}
          icon={<FolderGit2 />}
          label="프로젝트"
          tooltipContent={expanded ? "" : "프로젝트"}
          variant="ghost"
          expanded={expanded}
        />
        <CustomButton
          className={cn(
            "cursor-pointer",
            expanded && "justify-baseline pl-2.5"
          )}
          icon={<NotebookPen />}
          label="기술 블로그"
          tooltipContent={expanded ? "" : "기술 블로그"}
          variant="ghost"
          expanded={expanded}
        />
      </nav>
    </aside>
  );
}
