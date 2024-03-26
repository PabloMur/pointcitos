"use client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CreatePointerForm } from "../forms/CreatePointForm";
import { addPointModalAtom } from "@/atoms";
const AddPointModal = () => {
  const modalSetter = useSetRecoilState(addPointModalAtom);
  const active = useRecoilValue(addPointModalAtom);

  const handleCloseModal = () => {
    console.log("esto esta pasando");
    modalSetter(false);
  };

  return (
    active && (
      <div className="fixed bg-black/70 text-white top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col">
        <div className="w-1/3 flex justify-end items-center mb-2">
          <button
            className="bg-red-600 p-2 rounded-lg"
            onClick={handleCloseModal}
          >
            Cerrar
          </button>
        </div>
        <CreatePointerForm></CreatePointerForm>
      </div>
    )
  );
};

export { AddPointModal };
