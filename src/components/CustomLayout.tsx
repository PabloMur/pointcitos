"use client";
import { RecoilRoot } from "recoil";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader } from "./Loader";
import { PointCreatedModal } from "./modals/PointCreatedSuccsess";
import { DeletePointerModal } from "./modals/DeletePointerModal";

const CustomLayout = ({ children }: any) => {
  return (
    <RecoilRoot>
      <Loader></Loader>
      <PointCreatedModal></PointCreatedModal>
      <DeletePointerModal></DeletePointerModal>
      <Header></Header>
      {children}
      <Footer></Footer>
    </RecoilRoot>
  );
};

export { CustomLayout };
