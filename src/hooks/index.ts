import { useRouter } from "next/navigation";
import { APICreatePointer, APIGetMyPoints } from "@/lib/APICalls";
import {
  loaderAtom,
  myPoints,
  pointCreatedModal,
  pointImageBase64Atom,
} from "@/atoms";
import {
  useGotoRecoilSnapshot,
  useRecoilState,
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
