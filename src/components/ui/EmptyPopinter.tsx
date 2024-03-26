"use client";

import { pointerData } from "@/atoms";
import { useRecoilValue } from "recoil";

const EmptyPointer = ({ active }: any) => {
  return (
    active && (
      <div className="absolute top-10 left-0 right-0 bottom-0 flex justify-center items-center z-10">
        <p className="text-black/70 font-bold">
          Este Pointer no tiene pointcitos aún!
        </p>
      </div>
    )
  );
};

export { EmptyPointer };
