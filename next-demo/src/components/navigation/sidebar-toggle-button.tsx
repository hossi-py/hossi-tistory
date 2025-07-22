"use client";

import { Heading, PanelLeftOpen } from "lucide-react";
import { useState } from "react";
import CustomButton from "../custom/custom-button";

interface SidebarToggleButtonProps {
  expanded: boolean;
  onToggle: (next: boolean) => void;
}

export default function SidebarToggleButton({
  expanded,
  onToggle,
}: SidebarToggleButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const icon = isHovered ? (
    <PanelLeftOpen style={{ width: "20px", height: "20px" }} />
  ) : (
    <Heading />
  );

  const ariaLabel = isHovered ? "사이드바 열기" : "";

  return (
    <CustomButton
      size="icon"
      variant="ghost"
      className="[cursor:ew-resize]"
      aria-label={ariaLabel}
      aria-expanded={expanded}
      tooltipContent={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onToggle(!expanded)}
    >
      {icon}
    </CustomButton>
  );
}
