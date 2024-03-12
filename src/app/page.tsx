import { Carousel } from "@/components/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Carousel></Carousel>
      <p>
        Una app para que hagamos una lista de lugares que nos gustaria ir, y asi
        cuando no sabes que hacer pordes fijarte que onda por acá
      </p>
    </main>
  );
}
