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

export const pointImageBase64Atom = atom({
  key: "pointImageBase64Atom",
  default: "",
});

export const loaderAtom = atom({
  key: "loaderAttom",
  default: false,
});

// MODALS
export const pointCreatedModal = atom({
  key: "pointCreatedModal",
  default: false,
});

export const deletePointerModalAtom = atom({
  key: "deletePointerModalAtom",
  default: false,
});

export const deletePointerCodeAtom = atom({
  key: "deletePointerCodeAtom",
  default: "",
});

export const addPointModalAtom = atom({
  key: "addPointModalAtom",
  default: false,
});

export const myPoints = atom({
  key: "myPoints",
  default: [],
});

export const shortCode = atom({
  key: "shortCode",
  default: "",
});

export const pointerData = atom({
  key: "pointerData",
  default: {},
});

export const pointsAtom = atom({
  key: "pointesAtom",
  default: [],
});
