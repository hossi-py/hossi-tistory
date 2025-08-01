"use client";

import { useSidebarExpandedStore } from "@/stores/sidebar-expanded-store";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import LNBContent from "./lnb-content";
import { Button } from "../ui/button";
import { Heading, X } from "lucide-react";
import CustomButton from "../custom/custom-button";

export default function LNBMobileDrawer() {
  const expanded = useSidebarExpandedStore((s) => s.expanded);
  const setExpanded = useSidebarExpandedStore((s) => s.setExpanded);

  return (
    <div className="md:hidden">
      <Drawer open={expanded} onOpenChange={setExpanded} direction="left">
        <DrawerContent className="![width:var(--width-expanded-lnb)]">
          <DrawerHeader className="p-0">
            <DrawerTitle className="flex items-center justify-between p-2">
              <Button className="cursor-pointer" variant="ghost" size="icon">
                <Heading />
              </Button>
              <CustomButton
                className="cursor-ew-resize"
                size="icon"
                variant="ghost"
                tooltipContent="사이드바 닫기"
                tooltipPosition="bottom"
                onClick={() => setExpanded(false)}
              >
                <X style={{ width: "20px", height: "20px" }} />
              </CustomButton>
            </DrawerTitle>
          </DrawerHeader>

          <LNBContent expanded={expanded} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
