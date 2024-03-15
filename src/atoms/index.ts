import { atom } from "recoil";

export const userLogged = atom({
  key: "userLogged",
  default: true,
});

//ui atoms
export const menuDesplegableAtom = atom({
  key: "menuDesplegableAtom",
  default: false,
});
