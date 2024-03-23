"use client";
import { myPoints } from "@/atoms";
import { useGetMyPoints } from "@/hooks/index";
import { useRecoilValue } from "recoil";
import { PointCard } from "@/components/cards/PointCard";
const MyPointersPage = () => {
  useGetMyPoints("pablo@gmail.com");
  let myPointers: any = useRecoilValue(myPoints);
  return (
    <div className="min-h-[90vh] flex flex-col gap-2 justify-center items-center text-black bg-white">
      {myPointers.map((p: any) => {
        return (
          <PointCard
            pointName={p.placeName}
            city={p.direction}
            image={p.image}
            creator="pablo"
          ></PointCard>
        );
      })}
    </div>
  );
};

export default MyPointersPage;
