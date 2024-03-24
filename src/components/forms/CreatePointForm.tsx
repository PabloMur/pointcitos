"use client";
import { CustomImput } from "../ui/CustomInput";
import { DropImage } from "../DropZone";
import { pointImageBase64Atom } from "@/atoms";
import { useRecoilValue } from "recoil";
import { useCreatePointer } from "@/hooks";

const CreatePointerForm = () => {
  const imageBase = useRecoilValue(pointImageBase64Atom);
  const createPointHook = useCreatePointer();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const target = e.target;
    const createdBy = "pablo@gmail.com";

    const finalPoint = {
      placeName: target.place.value,
      direction: target.direction.value,
      image: "data:image/png;base64," + imageBase,
      category: e.target.selectOption.value,
      createdBy,
    };

    await createPointHook(finalPoint);
  };

  return (
    <form
      className="flex flex-col justify-center items-center border border-black rounded-lg p-4 w-full text-black max-w-[450px] bg-white"
      onSubmit={handleSubmit}
    >
      <label className="w-full flex flex-col justify-center items-center gap-2 pb-2">
        <p className="w-full">Cual es el nombre del lugar?:</p>
        <CustomImput
          placeholder="Poseidón del Puerto"
          name="place"
          required={"required"}
        ></CustomImput>
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 pb-2">
        <p className="w-full">En que ciudad está?:</p>
        <CustomImput
          placeholder="Mar del Plata, Libertad 3349"
          name="direction"
          required={"required"}
        ></CustomImput>
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 pb-2">
        <p className="w-full">Categoria</p>
        <select
          id="selectOption"
          required={true}
          className="w-full p-3 rounded-lg border border-black"
        >
          <option value="">Selecciona una categoria</option>
          <option value="bares">Bares</option>
          <option value="comida">Comida</option>
          <option value="lugares">Lugares</option>
          <option value="restaurantes">Restaurantes</option>
        </select>
      </label>
      <DropImage></DropImage>
      <button className="bg-blue-600 p-4 w-full rounded-lg text-white font-bold">
        Crear Poincito!
      </button>
    </form>
  );
};

export { CreatePointerForm };
