"use client";

import { Button } from "@/components/ui/button";
import { createPage } from "@/app/actions";
import { Plus } from "lucide-react";
import { useTransition } from "react";

export function NewPageButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2"
      disabled={isPending}
      onClick={() => startTransition(() => createPage())}
    >
      <Plus className="h-4 w-4" />
      新規ページ
    </Button>
  );
}
