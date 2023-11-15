"use client";
import { signIn, signOut } from "next-auth/react";
import { BsPersonPlus } from "react-icons/bs";
import Image from "next/image";

export default ({ session }: any) => {
  return (
    <>
      {!session ? (
        <button
          className="p-3 border-transparent text-xl"
          onClick={() => signIn()}
        >
          <BsPersonPlus />
        </button>
      ) : (
        <button onClick={() => signOut()}>
          <Image
            className="object-fill h-12 w-12 rounded-full"
            src={session?.user?.image}
            width="100"
            height={100}
            alt="foto de perfil"
          />
        </button>
      )}
    </>
  );
};
