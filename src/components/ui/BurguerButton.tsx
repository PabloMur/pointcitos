"use client";
import { useRecoilState } from "recoil";
import { menuDesplegableAtom } from "@/atoms";
import Image from "next/image";
import cross from "../../../public/icons/cross.svg";
import rows from "../../../public/icons/menu.svg";
const CrossButton = ({ handleClick }: any) => {
  return (
    <button onClick={handleClick} className="block sm:hidden">
      <Image
        height={30}
        width={30}
        src={cross}
        alt="cross icon for burger"
      ></Image>
    </button>
  );
};

const RowsButton = ({ handleClick }: any) => {
  return (
    <button onClick={handleClick} className="block sm:hidden">
      <Image
        height={25}
        width={25}
        src={rows}
        alt="rows icon for burger"
      ></Image>
    </button>
  );
};
const BurgerButton = () => {
  const [menuState, setMenuState] = useRecoilState(menuDesplegableAtom);
  return menuState ? (
    <CrossButton
      handleClick={() => {
        setMenuState(!menuState);
      }}
    ></CrossButton>
  ) : (
    <RowsButton
      handleClick={() => {
        setMenuState(!menuState);
      }}
    ></RowsButton>
  );
};

export { BurgerButton };
