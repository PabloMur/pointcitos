import css from "@/styles/carousel.module.css";
import { StartButton } from "./ui/StartButton";
const Carousel = () => {
  return (
    <div
      className={`h-[90vh] flex w-full justify-center items-center ${css.container}`}
    >
      <div className="flex flex-col  w-2/3 font-bold p-10 bg-black rounded-lg gap-4">
        <p className="text-3xl text-white">
          Una app para que hagamos una lista de lugares que nos gustaria ir, y
          asi cuando no sabes que hacer pordes fijarte que onda por acá
        </p>
        <StartButton></StartButton>
      </div>
    </div>
  );
};

export { Carousel };
