"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Heading, PanelLeftOpen, PanelRightClose } from "lucide-react";
import CustomButton from "../custom/custom-button";

export default function LNB() {
  const [expanded, setExpanded] = useState<boolean | null>(null); // LNB 확장 여부
  const [isHovered, setIsHovered] = useState<boolean>(false); // 아이콘 변화

  const tooltipContentWithHover = useMemo(() => {
    return isHovered ? "사이드바 열기" : "";
  }, [isHovered]);

  /** LNB 확장 여부 localStorage 관리 */
  useEffect(() => {
    const saved = localStorage.getItem("lnb-expanded");
    setExpanded(saved === "true" ? true : false);
  }, []);

  /** expanded 변경될 때마다 저장 */
  useEffect(() => {
    if (expanded !== null) {
      localStorage.setItem("lnb-expanded", expanded.toString());
    }
  }, [expanded]);

  /** 초기 expanded가 null일 때 렌더링하지 않음 → 깜빡임 방지 */
  if (expanded === null) return null;

  return (
    <aside
      className={`h-screen dark:bg-zinc-900 border-r [border-color:var(--color-navigation-border)] flex flex-col transition-all duration-300 ease-in-out
        ${expanded ? "w-60" : "w-13"}`}
    >
      {/* LNB가 접혀있을 때 */}
      {!expanded ? (
        <div className="flex items-center flex-col justify-center">
          <CustomButton
            className="[cursor:ew-resize]"
            size="icon"
            variant="ghost"
            tooltipContent={tooltipContentWithHover}
            onClick={() => setExpanded(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? <PanelLeftOpen /> : <Heading />}
          </CustomButton>
        </div>
      ) : (
        <div>
          <CustomButton
            className="[cursor:ew-resize]"
            size="icon"
            variant="ghost"
            tooltipContent="사이드바 닫기"
            onClick={() => setExpanded(false)}
          >
            <PanelRightClose />
          </CustomButton>
        </div>
      )}

      {/* LNB가 열려있을 때 */}
    </aside>
  );
}
