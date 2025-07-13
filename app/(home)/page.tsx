import Link from "next/link";
import { montserrat, poppins } from "../font/fonts";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className={`${montserrat.className} text-white mb-5`}>
        <h1 className="text-blue-400 text-3xl md:text-5xl">
          Organize your chaos,
        </h1>{" "}
        <h3 className="text-2xl md:text-4xl text-center">one task at a time</h3>
      </div>
      <p
        className={`${poppins.className} text-center text-gray-500 md:w-2/3 w-11/12 mb-5`}
      >
        Organize your work with our todo app! Easily create, delete, and update <br className="hidden lg:block" />
        tasks to stay on top of projects and keep your priorities in check.
      </p>
      <Link
        href={"/todos"}
        className="bg-white font-extrabold text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-400 duration-500"
      >
        Get Started
      </Link>
    </div>
  );
}
