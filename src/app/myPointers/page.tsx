"use client";
import { myPoints } from "@/atoms";
import { useGetMyPoints } from "@/hooks/index";
import { useRecoilValue } from "recoil";
import { MyPointersCard } from "@/components/cards/MyPointersCard";
const MyPointersPage = () => {
  useGetMyPoints("pablo@gmail.com");
  let myPointers: any = useRecoilValue(myPoints);
  return (
    <div className="min-h-[90vh] flex flex-col gap-2 justify-start items-center text-black bg-white mt-20">
      <MyPointersCard pointerName="Pablo y Otto" code="123321"></MyPointersCard>
    </div>
  );
};

export default MyPointersPage;
