import Image from "next/image";
import location from "../../../public/icons/location.svg";
type PointCardType = {
  pointName: string;
  city: string;
  image: any;
  creator: string;
};
const PointCard = ({ pointName, city, image, creator }: PointCardType) => {
  return (
    <div className="border p-4 rounded-lg w-full min-h-[30vh] text-black max-w-[500px]">
      <Image
        src={image}
        alt="imagen descriptiva de un point"
        className="rounded-lg"
        width={300}
        height={300}
      ></Image>
      <h3 className="pt-4 font-bold">{pointName}</h3>
      <div className="w-full h-fit flex justify-start items-center">
        <Image
          src={location}
          alt="location icon"
          height={15}
          width={15}
        ></Image>
        <p className="p-2 text-sm text-black/80 font-semibold">{city}</p>
      </div>
      <div className="w-full flex justify-end items-center">
        <p className="text-sm">creado por: {creator}</p>
      </div>
    </div>
  );
};

export { PointCard };
