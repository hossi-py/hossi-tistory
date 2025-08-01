import { cn } from "@/lib/utils";
import CustomButton from "../custom/custom-button";
import { FolderGit2, NotebookPen, User } from "lucide-react";
import SettingsPopover from "./settings-popover";

export default function LNBContent({ expanded }: { expanded: boolean }) {
  return (
    <nav className="flex flex-col px-2 mt-2">
      <CustomButton
        className={cn("cursor-pointer", expanded && "justify-baseline pl-2.5")}
        icon={<User />}
        label="소개"
        tooltipContent={expanded ? "" : "소개"}
        variant="ghost"
        expanded={expanded}
      />
      <CustomButton
        className={cn("cursor-pointer", expanded && "justify-baseline pl-2.5")}
        icon={<FolderGit2 />}
        label="프로젝트"
        tooltipContent={expanded ? "" : "프로젝트"}
        variant="ghost"
        expanded={expanded}
      />
      <CustomButton
        className={cn("cursor-pointer", expanded && "justify-baseline pl-2.5")}
        icon={<NotebookPen />}
        label="기술 블로그"
        tooltipContent={expanded ? "" : "기술 블로그"}
        variant="ghost"
        expanded={expanded}
      />

      {/* 설정 */}
      <SettingsPopover className="absolute bottom-0 mb-3" />
    </nav>
  );
}
