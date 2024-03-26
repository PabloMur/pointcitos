"use client";
import { PointCard } from "@/components/cards/PointCard";
import { usePathname, useRouter } from "next/navigation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryButton } from "@/components/ui/CatergoryButton";
import { AddPointButton } from "@/components/ui/buttons/AddPointButton";
import { AddPointModal } from "@/components/modals/AddPointModal";
import { useGetPointerData } from "@/hooks";
import { useRecoilValue } from "recoil";
import { pointerData } from "@/atoms";
import { EmptyPointer } from "@/components/ui/EmptyPopinter";
import { useEffect, useState } from "react";

//aca tenemos que traer el hook que nos trae la data del pointer
const PointerPage = () => {
  useGetPointerData();
  const [pointerData, setPointerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = (await useGetPointerData()) as any; // Llama al hook para obtener los datos del punto
      setPointerData(data); // Actualiza el estado con los datos obtenidos
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-[90vh] flex flex-col justify-start items-center bg-white p-4">
      <AddPointModal></AddPointModal>
      <div className="w-full p-2 flex justify-between items-center">
        <SectionTitle text="Estos son los Poincitos, esperamos que los disfruten y la pasen lindo!"></SectionTitle>
        <AddPointButton></AddPointButton>
      </div>
      <div className="w-full p-2">
        <p className="text-black font-bold"></p>
      </div>
      <div className="flex justify-center items-center w-full border-b border-black">
        <p className="text-black  w-1/3 flex justify-center items-center font-bold">
          También podés buscar por categorías:
        </p>
        <ul className="w-full flex justify-start items-center p-4 gap-4 pr-10 overflow-x-scroll sm:overflow-auto">
          <CategoryButton category={"Comida"}></CategoryButton>
          <CategoryButton category={"Bares"}></CategoryButton>
          <CategoryButton category={"Restaurantes"}></CategoryButton>
          <CategoryButton category={"Lugares"}></CategoryButton>
        </ul>
      </div>
      <div className="min-h-[50vh] w-full p-4 relative">
        <p className="text-black">Points</p>
      </div>
    </div>
  );
};

//<EmptyPointer active={empty}></EmptyPointer> componente a reparar
export default PointerPage;
