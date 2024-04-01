"use client";
import { useEffect, useState } from "react";
import { AddPointModal } from "@/components/modals/AddPointModal";
import { useGetPointerData } from "@/hooks";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryButton } from "@/components/ui/CatergoryButton";
import { AddPointButton } from "@/components/ui/buttons/AddPointButton";
import { usePathname } from "next/navigation";
import { useRecoilState, useRecoilValue } from "recoil";
import { pointerData, pointsAtom } from "@/atoms";
import { PointCard } from "@/components/cards/PointCard";
import { AllPointsButton } from "@/components/ui/buttons/AllPointsButton";

const PointerPage = () => {
  const [pointerDataAtom, setPointerData] = useRecoilState<any>(pointerData);
  const pathname = usePathname();
  const codeUrl = pathname.slice(-5);
  const [points, setPoints] = useState<any[]>([]);
  const filteredPoints = useRecoilValue(pointsAtom);

  useGetPointerData(codeUrl);

  useEffect(() => {
    if (pointerDataAtom.data) {
      const fetchedPoints = pointerDataAtom.data.data.points;
      setPoints(fetchedPoints);
    }
  }, [pointerDataAtom]);

  useEffect(() => {
    if (filteredPoints) {
      setPoints(filteredPoints);
    }
  }, [filteredPoints]);

  return (
    <div className="min-h-[90vh] flex flex-col justify-start items-center bg-white p-4 overflow-hidden mt-20">
      <AddPointModal />
      <div className="w-full p-2 flex flex-col sm:flex-row justify-between items-center">
        <SectionTitle text="Estos son los Poincitos, esperamos que los disfruten y la pasen lindo!" />
        <AddPointButton />
      </div>
      <p className="text-black text-start w-full font-bold">
        pointer :{pointerDataAtom?.data?.data.pointerName}
      </p>
      <div className="w-full p-2">
        <p className="text-black font-bold"></p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full border-b border-black">
        <p className="text-black  w-1/3 flex  justify-center items-center font-bold">
          También podés buscar por categorías:
        </p>
        <ul className="w-full flex justify-start items-center p-4 gap-4 pr-10 overflow-x-scroll sm:overflow-auto">
          <CategoryButton category={"Comida"} />
          <CategoryButton category={"Bares"} />
          <CategoryButton category={"Restaurantes"} />
          <CategoryButton category={"Lugares"} />
          <AllPointsButton></AllPointsButton>
        </ul>
      </div>
      <div className="min-h-[50vh] w-full p-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {points.map((p: any) => (
            <div key={p.id} className="flex justify-center">
              <PointCard
                image={p.image}
                creator={p.createdBy}
                city={p.direction}
                pointName={p.placeName}
                category={p.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

{
  /*  */
}

export default PointerPage;
