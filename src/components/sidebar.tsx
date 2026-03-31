"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mockPages } from "@/lib/mock-data";
import { Plus } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-60 flex-col border-r bg-muted/40 px-2 py-4">
      <Button variant="ghost" className="w-full justify-start gap-2">
        <Plus className="h-4 w-4" />
        新規ページ
      </Button>
      <div className="mt-2 flex flex-col gap-0.5">
        {mockPages.map((page) => (
          <Link
            key={page.id}
            href={`/pages/${page.id}`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start",
              pathname === `/pages/${page.id}` && "bg-accent"
            )}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
