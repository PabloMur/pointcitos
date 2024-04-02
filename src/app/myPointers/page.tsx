"use client";
import { useGetMyPoints } from "@/hooks/index";
import { MyPointersCard } from "@/components/cards/MyPointersCard";
const MyPointersPage = () => {
  const points = useGetMyPoints("pablo@gmail.com") as any;
  return (
    <div className="min-h-[90vh] flex flex-col gap-2 justify-start items-center text-black mt-24 p-10 bg-white">
      {points &&
        points.map((p: any) => {
          return (
            <div key={p.id} className="w-full flex justify-center items-center">
              <MyPointersCard
                pointerName={p.pointerData.pointerName}
                code={p.id}
              ></MyPointersCard>
            </div>
          );
        })}
    </div>
  );
};

export default MyPointersPage;
