"use client";
import { CustomImput } from "../ui/CustomInput";
import { useCreateRealPointer } from "@/hooks";

const CreatePointer = () => {
  const creator = useCreateRealPointer();

  const handleCreatePoint = async (e: any) => {
    e.preventDefault();
    const target = e.target;
    const email = "pablo@gmail.com";
    const pointerName = target.name.value;
    await creator({ email, pointerName });
  };

  return (
    <form className="text-black" onSubmit={handleCreatePoint}>
      <label className="">
        <p>Nombre del Pointer:</p>
        <CustomImput name="name"></CustomImput>
      </label>
      <button className="p-4 bg-blue-600 text-white rounded-lg font-bold w-full mt-2">
        Crear Pointer
      </button>
    </form>
  );
};

export { CreatePointer };
