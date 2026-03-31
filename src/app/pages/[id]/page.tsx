import { supabaseAdmin } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function PageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: page } = await supabaseAdmin
    .from("pages")
    .select("id, name")
    .eq("id", id)
    .single();

  if (!page) notFound();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">{page.name}</h1>
    </div>
  );
}
