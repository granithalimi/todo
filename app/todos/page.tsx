import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { montserrat } from "../font/fonts";
import TodoInputForm from "@/components/todo-input-form";
import Todos from "@/components/todos";

export default async function Page() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  const todos_table = await supabase
    .from("todos")
    .select()
    .eq("user_id", data?.user.id)
    .order("id", { ascending: true });
  const todos = todos_table?.data;

  return (
    <div>
      <TodoInputForm user_id={data?.user.id} />
      {todos && todos.length > 0 && (
        <>
          <h1
            className={`${montserrat.className} text-white text-4xl text-center`}
          >
            Todos
          </h1>
          <div className="w-full flex flex-col items-center gap-5 mt-5">
            {todos.map((todo, ind) => (
              <Todos key={ind} {...todo} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
