"use client";

import { FolderGit2, NotebookPen, PanelLeftClose, User } from "lucide-react";
import CustomButton from "../custom/custom-button";
import SidebarToggleButton from "./sidebar-toggle-button";
import { cn } from "@/lib/utils";
import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";

export default function LNB() {
  const expanded = useSidebarExpandedStore((s) => s.expanded);
  const isHydrated = useSidebarExpandedStore((s) => s.isHydrated);
  const setExpanded = useSidebarExpandedStore((s) => s.setExpanded);
  const toggleExpanded = useSidebarExpandedStore((s) => s.toggleExpanded);

  /** hydration 전에는 렌더링 안 함 => TODO 스켈레톤 컴포넌트 넣어보기 */
  if (!isHydrated) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-full transition-all ease-in-out duration-300 overflow-hidden",
        "border-r [border-color:var(--color-navigation-border)]",
        expanded
          ? "[width:var(--width-expanded-lnb)]"
          : "[width:var(--width-collapsed-lnb)]"
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
