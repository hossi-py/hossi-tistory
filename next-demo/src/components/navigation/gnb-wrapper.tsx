"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import GNBMobile from "./gnb-mobile";
import GNB from "./gnb";

export default function GNBWrapper() {
  const isMobile = useIsMobile();

  return isMobile ? <GNBMobile /> : <GNB />;
}
