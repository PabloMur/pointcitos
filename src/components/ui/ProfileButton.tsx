"use client";
import { useRecoilValue } from "recoil";
import { userLogged } from "@/atoms";
const ProfileButton = () => {
  const active = useRecoilValue(userLogged);
  return (
    active && (
      <button className="p-4 bg-blue-600 font-bold rounded-lg text-white">
        Perfil
      </button>
    )
  );
};

export { ProfileButton };
