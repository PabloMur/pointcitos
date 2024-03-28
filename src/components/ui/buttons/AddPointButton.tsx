"use client";
import { useSetRecoilState } from "recoil";
import { addPointModalAtom } from "@/atoms";
import Image from "next/image";
import plus from "../../../../public/icons/plus.svg";

const AddPointButton = () => {
  const modalActiveSetter = useSetRecoilState(addPointModalAtom);
  const handleClick = () => {
    modalActiveSetter(true);
  };
  return (
    <button
      className=" bg-black p-4 rounded-lg flex justify-center items-center gap-2 box-border"
      onClick={handleClick}
    >
      <Image src={plus} alt="plus icon image" width={22} height={22}></Image>
      <p className="font-bold text-white">Agregar un Point</p>
    </button>
  );
};

export { AddPointButton };
