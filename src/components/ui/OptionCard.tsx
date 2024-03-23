import Image from "next/image";
import Link from "next/link";

type OptionCardType = {
  content: string;
  img: any;
  route: string;
};

const OptionCard = ({ content, img, route }: OptionCardType) => {
  return (
    <Link href={route}>
      <div className="h-96 w-96 flex justify-center items-center rounded-lg flex-col p-4 gap-4 border-2 border-black">
        <div className="rounded-lg w-auto h-fit overflow-hidden border-2 border-black">
          <Image src={img} alt="imagen"></Image>
        </div>
        <div className="h-20 bg-blue-600 rounded-lg w-full">
          <button className="flex justify-center items-center w-full h-full font-bold text-white">
            {content}
          </button>
        </div>
      </div>
    </Link>
  );
};

export { OptionCard };
