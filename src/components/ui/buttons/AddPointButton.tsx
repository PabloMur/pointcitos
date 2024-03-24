"use client";
import { useSetRecoilState } from "recoil";
import { addPointModalAtom } from "@/atoms";

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
      <p className="bg-green-500 rounded-full p-2 h-6 w-6 flex justify-center items-center font-bold">
        +
      </p>
      <p className="font-bold">Agregar un Point</p>
    </button>
  );
};

export { AddPointButton };
