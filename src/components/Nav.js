import Login from "./auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { HiHomeModern } from "react-icons/hi2";
import Link from "next/link";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex items-center justify-between bg-yellow-500 p-2 rounded-b-md">
      <Link href={"/"} className="flex mx-2 gap-2 items-center">
        <HiHomeModern />
        Home
      </Link>
      <Login session={session} />
    </nav>
  );
}
