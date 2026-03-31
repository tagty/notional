import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { NewPageButton } from "@/components/new-page-button";

async function getPages() {
  const { data } = await supabase
    .from("pages")
    .select("id, name")
    .order("created_at");
  return data ?? [];
}

export async function Sidebar({ currentPageId }: { currentPageId?: string }) {
  const pages = await getPages();

  return (
    <aside className="flex h-full w-60 flex-col border-r bg-muted/40 px-2 py-4">
      <NewPageButton />
      <div className="mt-2 flex flex-col gap-0.5">
        {pages.map((page) => (
          <Link
            key={page.id}
            href={`/pages/${page.id}`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start",
              currentPageId === page.id && "bg-accent"
            )}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
