"use client";
import { CustomImput } from "../ui/CustomInput";
import { DropImage } from "../DropZone";
import { pointImageBase64Atom } from "@/atoms";
import { useRecoilValue } from "recoil";
import { FormEvent } from "react";
import { useCreatePointer } from "@/hooks";
import {} from "@/lib/Tools";

const CreatePointerForm = () => {
  const imageBase = useRecoilValue(pointImageBase64Atom);
  const createPointHook = useCreatePointer();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    alert(imageBase);
    //const finalImage = await uploadImageOnCloudinary(imageBase, "poincitos");
    await createPointHook("hola", "como", {
      points: [
        {
          category: "lugar",
          createdBy: "Pablo",
          favorite: false,
          id: 123123,
          img: "finalImage",
          location: "Mar del Plata, escollera sur",
          name: "Poseidón",
          visited: false,
        },
      ],
    });
  };

  return (
    <form
      className="flex flex-col justify-center items-center border-2 border-black rounded-lg p-2 w-full text-black max-w-[450px]"
      onSubmit={handleSubmit}
    >
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">Cual es el nombre del lugar?:</p>
        <CustomImput></CustomImput>
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">En que ciudad está?:</p>
        <CustomImput></CustomImput>
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">Pon la dirección:</p>
        <input
          type="text"
          name=""
          id=""
          className="border w-full rounded-lg p-2"
        />
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">Ponele una fotito:</p>
        <input
          type="text"
          name=""
          id=""
          className="border w-full rounded-lg p-2"
        />
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">Categoria</p>
        <select id="selectOption">
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
