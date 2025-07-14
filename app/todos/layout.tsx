import Link from "next/link";
import { LogoutButton } from "@/components/logout-button";
import { poppins } from "../font/fonts";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="w-full h-20 flex justify-center mb-5">
        <nav className="w-2/3 h-full flex justify-between">
          {/* home div */}
          <div className=" flex items-center">
            <Link href={"/"} className={`${poppins.className} text-gray-500 hover:text-white duration-500`}>
              <Image width={50} height={50} alt="Todo logo" src={"/images/todo-logo.png"} />
            </Link>
          </div>
          {/* buttons  */}
          <div className="flex items-center">
            <LogoutButton />
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}
