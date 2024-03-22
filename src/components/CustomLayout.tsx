"use client";
import { RecoilRoot } from "recoil";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader } from "./Loader";

const CustomLayout = ({ children }: any) => {
  return (
    <RecoilRoot>
      <Loader></Loader>
      <Header></Header>
      {children}
      <Footer></Footer>
    </RecoilRoot>
  );
};

export { CustomLayout };
