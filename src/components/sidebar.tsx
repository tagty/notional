"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="flex h-full w-60 flex-col border-r bg-muted/40 px-2 py-4">
      <Button variant="ghost" className="w-full justify-start gap-2">
        <Plus className="h-4 w-4" />
        新規ページ
      </Button>
      <div className="flex-1" />
    </aside>
  );
}
