import { mockPages } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default async function PageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const page = mockPages.find((p) => p.id === id);

  if (!page) notFound();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">{page.name}</h1>
    </div>
  );
}
