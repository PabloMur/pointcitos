"use client";
import { useGetMyPoints } from "@/hooks/index";
import { MyPointersCard } from "@/components/cards/MyPointersCard";
const MyPointersPage = () => {
  const points = useGetMyPoints("pablo@gmail.com") as any;
  return (
    <div className="min-h-[90vh] flex flex-col gap-2 justify-start items-center text-black bg-white mt-24 p-10">
      {points &&
        points.map((p: any) => {
          return (
            <div key={p.id}>
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
