import { PointCard } from "@/components/cards/PointCard";
import poseidon from "../../../../public/poseindon.webp";
import { SectionTitle } from "@/components/ui/SectionTitle";
const PointerPage = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-start items-center bg-white p-4">
      <SectionTitle text="Estos son los Poincitos, esperamos que los disfruten y la pasen lindo!"></SectionTitle>
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
