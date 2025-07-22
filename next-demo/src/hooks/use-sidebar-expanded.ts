"use client";
import { useEffect, useState } from "react";

/**
 * LNB 확장 상태 관리
 * @returns expanded
 * @returns setExpanded
 */
export function useSidebarExpanded() {
  /** LNB 확장 여부 */
  const [expanded, setExpanded] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("lnb-expanded");
    setExpanded(saved === "true" ? true : false);
  }, []);

  /** expanded 변경사항 저장 */
  useEffect(() => {
    if (expanded !== null) {
      localStorage.setItem("lnb-expanded", expanded.toString());
    }
  }, [expanded]);

  return { expanded, setExpanded };
}
