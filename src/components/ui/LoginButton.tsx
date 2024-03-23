"use client";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { userLogged } from "@/atoms/index";
const LoginButton = () => {
  const userLoggedState = useRecoilValue(userLogged);
  return (
    !userLoggedState && (
      <Link href={"/login"}>
        <button className="bg-blue-600 p-4 rounded-lg font-bold text-white">
          Iniciar Sesión
        </button>
      </Link>
    )
  );
};

export { LoginButton };
