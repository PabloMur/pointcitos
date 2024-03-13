import { OptionCard } from "@/components/ui/OptionCard";

const HomePage = () => {
  return (
    <div className="h-[90vh] bg-white text-black flex flex-col">
      <ul className="w-full bg-orange-300 flex justify-end items-center p-4 gap-4 pr-10">
        <li>perfil</li>
        <li>mis points</li>
      </ul>
      <div className="flex justify-center items-center h-full gap-4">
        <OptionCard
          img=""
          content="Crear un pointer"
          route="/create"
        ></OptionCard>
        <OptionCard
          img=""
          content="Ingresar a un pointer"
          route="/invitation"
        ></OptionCard>
      </div>
    </div>
  );
};

export default HomePage;
