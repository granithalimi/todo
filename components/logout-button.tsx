"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return <button className="text-white font-extrabold rounded-lg hover:bg-gray-600 duration-300 text-sm px-3 py-1 bg-gray-700" onClick={logout}>Logout</button>;
}
