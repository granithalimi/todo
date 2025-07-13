"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createTodo(id: string, formData: FormData) {
  const title = formData.get("title") as string;

  const supabase = await createClient();
  const { error, data } = await supabase.from("todos").insert({
    user_id: id,
    title: title,
  });

  if (error) console.log(error);
  if (data) console.log(data);

  revalidatePath("/todos");
}

export async function deleteTodo(id: number) {
  const supabase = await createClient();
  await supabase.from("todos").delete().eq("id", id);
  revalidatePath("/todos");
}

export async function markAsFinished(id: number) {
  const supabase = await createClient();
  await supabase.from("todos").update({ status: "finished" }).eq("id", id);
  revalidatePath("/todos");
}

export async function markAsPending(id: number) {
  const supabase = await createClient();
  await supabase.from("todos").update({ status: "pending" }).eq("id", id);
  revalidatePath("/todos");
}
