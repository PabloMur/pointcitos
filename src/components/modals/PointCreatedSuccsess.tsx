"use client";
import Image from "next/image";
import success from "../../../public/icons/success.svg";
import crossModal from "../../../public/icons/crossModal.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { pointCreatedModal, shortCode } from "@/atoms";
const PointCreatedModal = () => {
  const [active, setCloseModal] = useRecoilState(pointCreatedModal);
  const code = useRecoilValue(shortCode);
  const handleCloseModal = () => {
    setCloseModal(false);
  };
  return (
    active && (
      <div className="fixed right-0 bottom-0 top-0 left-0 z-10  bg-black/70 flex flex-col justify-center items-center">
        <div className="flex justify-end flex-col items-end">
          <div
            className="flex justify-end items-center cursor-pointer h-10 w-10"
            onClick={handleCloseModal}
          >
            <Image
              src={crossModal}
              alt="close modal icon"
              height={27}
              width={27}
              onClick={handleCloseModal}
              className="bg-white rounded-full border"
            ></Image>
          </div>
          <div className="bg-white p-4 rounded-lg flex gap-2 flex-col h-32 z-50">
            <div className="h-full flex justify-center items-center gap-2">
              <p className="text-black font-bold">
                Point Creado, Felicitaciones!<br></br>
                Este es el código que debes compartir {code}
              </p>
              <Image
                src={success}
                alt="success icon"
                height={27}
                width={27}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export { PointCreatedModal };
