"use client";
import { useRecoilValue } from "recoil";
import { userLogged } from "@/atoms";
const MyPointsButton = () => {
  const active = useRecoilValue(userLogged);
  return (
    active && (
      <button className="bg-blue-600 p-4 font-bold text-white rounded-lg">
        Mis Pointers
      </button>
    )
  );
};

export { MyPointsButton };
