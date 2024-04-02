import { DeletePointerButton } from "@/components/ui/buttons/DeletePointerButton";

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

  const handleDeleteButton = () => {
    alert("eliminando el pointer" + code);
  };

  const handleClick = () => {
    shortCodeSetter(code);
    goto("/pointer/" + code);
  };

  return (
    <div className="w-full flex items-center justify-center h-fit">
      <div
        className="flex justify-between items-center w-full sm:w-1/2 px-10 bg-blue-600 p-4 rounded-lg text-white cursor-pointer"
        onClick={handleClick}
      >
        <p className="font-bold">{pointerName}</p>
        <div className="flex">
          <p className="min-w-[100px] text-2xl font-bold">{code}</p>
        </div>
      </div>
      <div className="h-full p-2">
        <DeletePointerButton code={code}></DeletePointerButton>
      </div>
    </div>
  );
};

export { MyPointersCard };
