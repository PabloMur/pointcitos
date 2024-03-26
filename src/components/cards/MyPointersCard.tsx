type MyPointersCardType = {
  pointerName: string;
  code: string;
};

import { shortCode } from "@/atoms";
import { useGoTo } from "@/hooks";
import { useSetRecoilState } from "recoil";

const MyPointersCard = ({ pointerName, code }: MyPointersCardType) => {
  const shortCodeSetter = useSetRecoilState(shortCode);
  const goto = useGoTo();
  const handleClick = () => {
    shortCodeSetter(code);
    goto("/pointer/" + code);
  };
  return (
    <div
      className="flex justify-between items-center w-full sm:w-1/2 px-10 bg-black p-4 rounded-lg text-white"
      onClick={handleClick}
    >
      <p className="font-bold">{pointerName}</p>
      <p>Codigo: {code}</p>
    </div>
  );
};

export { MyPointersCard };
