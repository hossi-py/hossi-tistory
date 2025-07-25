"use client";

import { Settings, TestTubeDiagonal } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ModeToggle } from "../theme/mode-toggle";
import ViewTypeToggle from "./view-type-toggle";

export default function SettingsPopover({ className }: { className?: string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn("cursor-pointer", className)}
          size="icon"
          variant="ghost"
        >
          <Settings style={{ width: "20px", height: "20px" }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start" alignOffset={5}>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">설정</h4>
            <p className="text-muted-foreground text-sm">
              사용자 환경을 자유롭게 설정해보세요.
            </p>
          </div>

          {/* 테마 / 보기 방식 / 기능 테스트 모드 / 언어 ... */}
          <div className="">
            <div className="">
              테마
              <ModeToggle />
            </div>
            <div className="">
              보기 방식
              <ViewTypeToggle />
            </div>
            <div className="">
              <Button className="cursor-pointer" variant="outline">
                기능 테스트 모드
                <TestTubeDiagonal />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
