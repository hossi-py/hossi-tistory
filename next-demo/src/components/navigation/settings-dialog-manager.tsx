"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function SettingsDialogManager() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setOpen(window.location.hash === "#settings");
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) history.back();
        setOpen(o);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>실험실</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div></div>
      </DialogContent>
    </Dialog>
  );
}
