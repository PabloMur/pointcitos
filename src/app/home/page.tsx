import { OptionCard } from "@/components/ui/OptionCard";
import createImage from "../../../public/create.jpg";
import invitation from "../../../public/invitation.jpg";

const HomePage = () => {
  return (
    <div className="h-[90vh] bg-white text-black flex flex-col p-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-purple-400m h-full">
        <OptionCard
          img={createImage}
          content="Crear un pointer"
          route="/create"
        ></OptionCard>
        <OptionCard
          img={invitation}
          content="Ingresar a un pointer"
          route="/invitation"
        ></OptionCard>
      </div>
    </div>
  );
};

export default HomePage;
