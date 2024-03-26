import { usePathname, useRouter } from "next/navigation";
import {
  APICreatePointer,
  APICreateRealPointer,
  APIGetMyPoints,
  APIGetPointInfo,
} from "@/lib/APICalls";
import {
  loaderAtom,
  myPoints,
  pointCreatedModal,
  pointImageBase64Atom,
  pointerData,
  shortCode,
} from "@/atoms";
import {
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
  const [loaderState, setLoaderState] = useRecoilState(loaderAtom);
  const goto = useGoTo();
  const pointImageBase = useSetRecoilState(pointImageBase64Atom);
  const setModalPointCreatedActive = useSetRecoilState(pointCreatedModal);

  return async (point: any) => {
    setLoaderState(true);
    const pointer = await APICreatePointer(point);
    pointImageBase("");
    setLoaderState(false);
    setModalPointCreatedActive(true);
    goto("/myPointers");
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

export async function useGetPointerData() {
  const setLoaderState = useSetRecoilState(loaderAtom);
  const pathname = usePathname();
  const codeUrl = pathname.slice(-5);

  const getPointInfo = async () => {
    try {
      setLoaderState(true);
      const points = await APIGetPointInfo(codeUrl);
      setLoaderState(false);
      return points;
    } catch (error) {
      console.error("Error al obtener puntos:", error);
      setLoaderState(false);
      return null; // O manejar el error de otra manera si es necesario
    }
  };

  return getPointInfo();
}
