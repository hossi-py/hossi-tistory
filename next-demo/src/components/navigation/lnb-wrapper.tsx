"use client";

import LNBMobile from "./lnb-mobile";
import LNB from "./lnb";
import { useIsMobile } from "@/hooks/use-mobile";

export default function LNBWrapper() {
  const isMobile = useIsMobile();

  return isMobile ? <LNBMobile /> : <LNB />;
}
