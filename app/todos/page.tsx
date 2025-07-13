import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { montserrat, poppins } from "../font/fonts";
import { IoCloseCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

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
      <form className="flex my-5 justify-center items-center gap-3">
        <input
          className={`${poppins.className} w-8/12 text-2xl py-2 ps-3 rounded-lg bg-gray-800 border-2 border-gray-700 text-white`}
          placeholder="Add Todo..."
        />
        <button className="text-white px-3 py-1 rounded-lg bg-blue-400 font-extrabold text-lg">
          Add
        </button>
      </form>
      {todos && todos.length > 0 && (
        <>
          <h1
            className={`${montserrat.className} text-white text-4xl text-center`}
          >
            Todos
          </h1>
          <div className="w-full flex flex-col items-center gap-5 mt-5">
            {todos.map((t, ind) => (
              <div
                key={ind}
                className="w-11/12 min-h-20 bg-blue-400 rounded-xl flex items-center duration-300"
              >
                <div className="w-10/12 md:w-9/12 h-full flex items-center justify-center">
                  <h1 className={`${t.status == "finished" ? "line-through decoration-2 decoration-red-500" : "no-underline"} ${poppins.className} font-extrabold text-center text-white text-xl duration-300`}>
                    {t.title}
                  </h1>
                </div>
                <div className="w-5/12 h-full md:w-3/12 flex justify-center items-center gap-5">
                  <IoCloseCircle className="text-4xl text-white cursor-pointer hover:text-gray-300 duration-300" />
                  <FaCheckCircle className="text-3xl text-white cursor-pointer hover:text-gray-300 duration-300" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
