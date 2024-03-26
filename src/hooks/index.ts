import { usePathname, useRouter } from "next/navigation";
import {
  APICreatePointer,
  APICreateRealPointer,
  APIGetMyPoints,
  APIGetPointInfo,
} from "@/lib/APICalls";
import {
  addPointModalAtom,
  loaderAtom,
  myPoints,
  pointCreatedModal,
  pointImageBase64Atom,
  pointerData,
  shortCode,
} from "@/atoms";
import {
  constSelector,
  useGotoRecoilSnapshot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { useEffect } from "react";

export function useGoTo() {
  const router = useRouter();
  return (route: string) => {
    router.push(route);
  };
}

export function useCreatePointer() {
  const setLoaderState = useSetRecoilState(loaderAtom);
  const pointImageBase = useSetRecoilState(pointImageBase64Atom);
  const modalSetter = useSetRecoilState(addPointModalAtom);
  const pathname = usePathname();
  const code = pathname.slice(-5);

  return async (point: any) => {
    setLoaderState(true);
    const pointer = await APICreatePointer(point, code);
    pointImageBase("");
    modalSetter(false);
    setLoaderState(false);
    location.reload();
    return pointer;
  };
}

export function useCreateRealPointer() {
  const [loaderState, setLoaderState] = useRecoilState(loaderAtom);
  const goto = useGoTo();
  const setModalPointCreatedActive = useSetRecoilState(pointCreatedModal);
  const setEasyCode = useSetRecoilState(shortCode);

  return async ({ email, pointerName }: any) => {
    setLoaderState(true);
    const pointer = await APICreateRealPointer(email, pointerName);
    if (pointer) setEasyCode(pointer.data.easyCode);
    setLoaderState(false);
    setModalPointCreatedActive(true);
    goto(`/pointer/${pointer.data.easyCode}`);
    return pointer;
  };
}

export function useGetMyPoints(email: string) {
  const setLoaderState = useSetRecoilState(loaderAtom);
  const myPointsSetter = useSetRecoilState(myPoints);

  useEffect(() => {
    const getPoints = async () => {
      try {
        setLoaderState(true);
        const points = await APIGetMyPoints(email);
        myPointsSetter(points.data.myPoints);
      } catch (error) {
        console.error("Error al obtener puntos:", error);
      } finally {
        setLoaderState(false);
      }
    };

    getPoints();
  }, []);
}

export async function useGetPointerData(code: string) {
  const setLoaderState = useSetRecoilState(loaderAtom);
  const pointerDataSetter = useSetRecoilState(pointerData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaderState(true);
        const points = await APIGetPointInfo(code);
        pointerDataSetter(points);
        setLoaderState(false);
        return points;
      } catch (error) {
        console.error("Error al obtener puntos:", error);
      }
    };

    fetchData();
  }, [code, setLoaderState]);
}
