"use client";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { userLogged } from "@/atoms";
const SignInButton = () => {
  const active = useRecoilValue(userLogged);
  return (
    !active && (
      <Link href={"/signup"}>
        <button className="bg-black p-4 rounded-lg font-bold text-white">
          Registrate
        </button>
      </Link>
    )
  );
};

export { SignInButton };
