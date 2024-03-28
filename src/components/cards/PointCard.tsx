import Image from "next/image";
import location from "../../../public/icons/location.svg";
type PointCardType = {
  pointName: string;
  city: string;
  image: any;
  creator: string;
  category: string;
};
const PointCard = ({
  pointName,
  city,
  image,
  creator,
  category,
}: PointCardType) => {
  return (
    <div className="border p-4 rounded-lg w-full min-h-[30vh] h-fit text-black max-w-[500px]">
      <div className="w-full h-auto">
        <Image
          src={image}
          alt="imagen descriptiva de un point"
          className="rounded-lg"
          width={600}
          height={400}
        ></Image>
      </div>
      <h3 className="pt-4 font-bold">{pointName}</h3>
      <div className="w-full h-fit flex flex-col justify-start items-start">
        <div className="flex">
          <Image
            src={location}
            alt="location icon"
            height={15}
            width={15}
          ></Image>
          <p className="p-2 text-sm text-black/80 font-semibold">{city}</p>
        </div>
        <p className="p-2 text-sm text-black/80 font-semibold">{category}</p>
      </div>
      <div className="w-full flex justify-end items-center">
        <p className="text-sm">creado por: {creator}</p>
      </div>
    </div>
  );
};

export { PointCard };
