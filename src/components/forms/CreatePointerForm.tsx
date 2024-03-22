"use client";
import { CustomImput } from "../ui/CustomInput";
import { DropImage } from "../DropZone";
import { pointImageBase64Atom } from "@/atoms";
import { useRecoilValue } from "recoil";
import { FormEvent } from "react";
import { useCreatePointer } from "@/hooks";

const CreatePointerForm = () => {
  const imageBase = useRecoilValue(pointImageBase64Atom);
  const createPointHook = useCreatePointer();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const target = e.target;
    const placeName = target.place.value;
    const direction = target.direction.value;
    const image = imageBase;
    const category = "averiguar";

    const finalPoint = {
      placeName,
      direction,
      image,
      category,
    };

    console.log(finalPoint);
  };

  return (
    <form
      className="flex flex-col justify-center items-center border border-black rounded-lg p-4 w-full text-black max-w-[450px]"
      onSubmit={handleSubmit}
    >
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">Cual es el nombre del lugar?:</p>
        <CustomImput
          placeholder="Poseidón del Puerto"
          name="place"
          required={"required"}
        ></CustomImput>
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">En que ciudad está?:</p>
        <CustomImput
          placeholder="Mar del Plata, Libertad 3349"
          name="direction"
          required={"required"}
        ></CustomImput>
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">Categoria</p>
        <select id="selectOption" required={true}>
          <option value="">Selecciona...</option>
          <option value="option1">Opción 1</option>
          <option value="option2">Opción 2</option>
          <option value="option3">Opción 3</option>
        </select>
      </label>
      <DropImage></DropImage>
      <button className="bg-blue-600 p-4 w-full rounded-lg text-white">
        Crear Poincito!
      </button>
    </form>
  );
};

export { CreatePointerForm };
