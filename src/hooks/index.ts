import { useRouter } from "next/navigation";

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
