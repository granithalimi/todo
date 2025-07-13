import { poppins } from "@/app/font/fonts";
import { deleteTodo, markAsFinished, markAsPending } from "@/lib/actions";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

interface Todo {
  id: number;
  status: string;
  title: string;
  user_id: string;
  createdAt?: Date;
}
export default function Todos(t: Todo) {
  return (
    <>
      <div className="w-11/12 min-h-20 bg-blue-400 rounded-xl flex items-center duration-300">
        <div className="w-10/12 md:w-9/12 h-full flex items-center justify-center">
          <h1
            className={`${
              t.status == "finished"
                ? "line-through decoration-2 decoration-white text-red-500"
                : "no-underline text-white"
            } ${
              poppins.className
            } font-extrabold text-center text-xl duration-300`}
          >
            {t.title}
          </h1>
        </div>
        <div className="w-5/12 h-full md:w-3/12 flex justify-center items-center gap-5">
          <form
            action={deleteTodo.bind(null, t.id)}
            className="flex items-center"
          >
            <button>
              <IoCloseCircle className="text-4xl text-white cursor-pointer hover:text-gray-300 duration-300" />
            </button>
          </form>
          <form
            action={
              t.status == "pending"
                ? markAsFinished.bind(null, t.id)
                : markAsPending.bind(null, t.id)
            }
            className="flex items-center"
          >
            <button>
              <FaCheckCircle className="text-3xl text-white cursor-pointer hover:text-gray-300 duration-300" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
