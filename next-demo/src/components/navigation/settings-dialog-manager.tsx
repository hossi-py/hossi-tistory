"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Palette, Pointer, Zap } from "lucide-react";
import RainbowFrame from "../custom/rainbow-frame";

export default function SettingsDialogManager() {
  const [open, setOpen] = useState<boolean>(false);

  const [labItems, setLabItems] = useState([
    {
      icon: Palette,
      title: "배경 애니메이션",
      description: "테마에 따라\n배경 애니메이션이 적용됩니다.",
      active: false,
    },
    { icon: Pointer, title: "커스텀 커서", description: "", active: false },
    { icon: Zap, title: "스크롤 애니메이션", description: "", active: false },
  ]);

  useEffect(() => {
    const check = () => setOpen(window.location.hash === "#settings");
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  const toggleItem = (index: number) => {
    setLabItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) history.back();
        setOpen(o);
      }}
    >
      <DialogContent className="w-full !max-w-2/5">
        <DialogHeader>
          <DialogTitle>실험실</DialogTitle>
          <DialogDescription>
            다양한 기능을 체험해보세요. 클릭하면 활성화됩니다.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6">
          {labItems.map(({ icon: Icon, title, description, active }, index) => (
            <RainbowFrame active={active} blur={12}>
              <Card
                className="w-full h-full hover:shadow-lg transition-shadow cursor-pointer"
                key={title}
                onClick={() => toggleItem(index)}
              >
                <CardHeader className="flex flex-col items-center">
                  <Icon className="mb-3 text-primary" />
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-center text-sm mt-1 whitespace-pre-line">
                    {description}
                  </CardDescription>
                  <CardAction></CardAction>
                </CardHeader>
              </Card>
            </RainbowFrame>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
