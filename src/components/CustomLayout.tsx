"use client";
import { RecoilRoot } from "recoil";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const CustomLayout = ({ children }: any) => {
  return (
    <RecoilRoot>
      <Header></Header>
      {children}
      <Footer></Footer>
    </RecoilRoot>
  );
};

export { CustomLayout };
