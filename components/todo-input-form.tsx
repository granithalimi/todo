import { poppins } from "@/app/font/fonts";
import { createTodo } from "@/lib/actions";

export default function TodoInputForm(user_id: { user_id: string }) {
  return (
    <form
      action={createTodo.bind(null, user_id?.user_id)}
      className="flex w-full my-5 justify-center items-center gap-3"
    >
      <input
        name="title"
        className={`${poppins.className} w-10/12 text-2xl py-2 ps-5 rounded-lg bg-gray-800 border-2 border-gray-700 text-white`}
        placeholder="Add Todo..."
      />
      <button className="text-white px-3 py-1 rounded-lg bg-blue-400 font-extrabold text-lg hover:bg-blue-500 duration-300">
        Add
      </button>
    </form>
  );
}
