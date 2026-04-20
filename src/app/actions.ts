"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase";

export async function createPage() {
  const { data, error } = await supabaseAdmin
    .from("pages")
    .insert({})
    .select("id")
    .single();

  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");
  redirect(`/pages/${data.id}`);
}
