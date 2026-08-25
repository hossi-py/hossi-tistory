"use client";

import { useEffect, useState } from "react";

export const MOBILE_BREAKPOINT = 768;

/**
 * 모바일 뷰포트 여부를 반환한다.
 * 서버 렌더와 첫 클라이언트 렌더에서는 항상 false 이므로 hydration 불일치가 없다.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const sync = () => setIsMobile(query.matches);

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  return isMobile;
}
