import { PointCard } from "@/components/cards/PointCard";
import poseidon from "../../../../public/poseindon.webp";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryButton } from "@/components/ui/CatergoryButton";
import { AddPointButton } from "@/components/ui/buttons/AddPointButton";
import { AddPointModal } from "@/components/modals/AddPointModal";
const PointerPage = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-start items-center bg-white p-4">
      <AddPointModal></AddPointModal>
      <div className="w-full p-2 flex justify-between items-center">
        <SectionTitle text="Estos son los Poincitos, esperamos que los disfruten y la pasen lindo!"></SectionTitle>
        <AddPointButton></AddPointButton>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="w-full flex justify-center items-center p-4 gap-4 pr-10 overflow-x-scroll sm:overflow-auto">
          <CategoryButton category={"Comida"}></CategoryButton>
          <CategoryButton category={"Bares"}></CategoryButton>
          <CategoryButton category={"Restaurantes"}></CategoryButton>
          <CategoryButton category={"Lugares"}></CategoryButton>
        </ul>
      </div>
      <PointCard
        pointName="Escultura de Poseidón"
        city="Mar del Plata"
        image={poseidon}
        creator="Pablo"
      ></PointCard>
    </div>
  );
};

export default PointerPage;
