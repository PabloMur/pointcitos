import { useRouter } from "next/navigation";
import { APICreatePointer } from "@/lib/APICalls";

export function useGoTo() {
  const router = useRouter();
  return (route: string) => {
    router.push(route);
  };
}

export function useHola() {
  return () => {
    alert("hola");
  };
}

export function useCreatePointer() {
  return async (creator: any, participants: any, points: any) => {
    const pointer = await APICreatePointer({ creator, participants, points });
    return pointer;
  };
}
