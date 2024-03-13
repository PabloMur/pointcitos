import Image from "next/image";
import Link from "next/link";

type OptionCardType = {
  content: string;
  img: string;
  route: string;
};
const OptionCard = ({ content, img, route }: OptionCardType) => {
  return (
    <Link href={route}>
      <div className="h-96 w-96 bg-purple-500 flex justify-center items-center rounded-lg flex-col p-4 gap-4">
        <div className="bg-green-400 rounded-lg w-full h-full flex justify-center items-center">
          <Image src={img} alt="imagen" width={300} height={300}></Image>
        </div>
        <div className="h-20 bg-orange-400 rounded-lg w-full">
          <button className="flex justify-center items-center w-full h-full font-bold">
            {content}
          </button>
        </div>
      </div>
    </Link>
  );
};

export { OptionCard };
