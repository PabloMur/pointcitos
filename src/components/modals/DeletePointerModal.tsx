"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { deletePointerCodeAtom, deletePointerModalAtom } from "@/atoms";
import Image from "next/image";
import crossModal from "../../../public/icons/crossModal.svg";
import { useDeletePointer } from "@/hooks";

const DeletePointerModal = () => {
  const [active, setCloseModal] = useRecoilState(deletePointerModalAtom);
  const code = useRecoilValue(deletePointerCodeAtom);
  const deletePointerFunction = useDeletePointer(code);

  const handleCloseModal = () => {
    setCloseModal(false);
  };

  const handleDeletePointer = async () => {
    await deletePointerFunction();
    handleCloseModal();
  };

  return (
    active && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-black bg-opacity-70 absolute inset-0"></div>
        <div className="z-50 bg-white rounded-lg p-8 w-96 relative">
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
          >
            <Image
              src={crossModal}
              alt="close modal icon"
              height={24}
              width={24}
            />
          </button>
          <div className="text-black font-bold my-10 text-center">
            Deseas eliminar el pointer: {code} ?
          </div>
          <div className="flex justify-evenly">
            <button
              onClick={handleCloseModal}
              className="px-6 py-3 rounded-lg bg-gray-300 text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400 mr-4"
            >
              Cancelar
            </button>
            <button
              onClick={handleDeletePointer}
              className="px-6 py-3 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export { DeletePointerModal };
