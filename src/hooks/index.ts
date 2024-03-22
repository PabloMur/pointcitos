import { useRouter } from "next/navigation";
import { APICreatePointer } from "@/lib/APICalls";
import { loaderAtom, pointImageBase64Atom } from "@/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

export function useGoTo() {
  const router = useRouter();
  return (route: string) => {
    router.push(route);
  };
}

export function useCreatePointer() {
  const [loaderState, setLoaderState] = useRecoilState(loaderAtom);
  const pointImageBase = useSetRecoilState(pointImageBase64Atom);

  return async (point: any) => {
    setLoaderState(true);
    const pointer = await APICreatePointer(point);
    pointImageBase("");
    setLoaderState(false);
    return pointer;
  };
}
