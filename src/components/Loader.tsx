"use client";
import GiphyComponent from "@/components/ui/Spinner/Spinner";
import { useRecoilValue } from "recoil";
import { loaderAtom } from "@/atoms";
const Loader = () => {
  const active = useRecoilValue(loaderAtom);
  return (
    active && (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-50">
        <GiphyComponent></GiphyComponent>
      </div>
    )
  );
};

export { Loader };
