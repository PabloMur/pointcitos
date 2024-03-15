"use client";
import { useRecoilState } from "recoil";
import { menuDesplegableAtom } from "@/atoms";
const CrossButton = ({ handleClick }: any) => {
  return <button onClick={handleClick}>cross</button>;
};

const RowsButton = ({ handleClick }: any) => {
  return <button onClick={handleClick}>rows</button>;
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
