"use client";

import LNBMobileDrawer from "./lnb-mobile-drawer";
import LNB from "./lnb";
import { useIsMobile } from "@/hooks/use-mobile";

export default function LNBWrapper() {
  const isMobile = useIsMobile();

  return isMobile ? <LNBMobileDrawer /> : <LNB />;
}
