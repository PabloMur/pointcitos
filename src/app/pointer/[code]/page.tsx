import { PointCard } from "@/components/cards/PointCard";
import poseidon from "../../../../public/poseindon.webp";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryButton } from "@/components/ui/CatergoryButton";
const PointerPage = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-start items-center bg-white p-4">
      <SectionTitle text="Estos son los Poincitos, esperamos que los disfruten y la pasen lindo!"></SectionTitle>
      <div className="flex">
        <p className="w-fit p-4 flex justify-center items-center text-black">
          Categorias:
        </p>
        <ul className="w-full flex justify-center items-center p-4 gap-4 pr-10">
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
