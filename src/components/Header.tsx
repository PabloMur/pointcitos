import { MenuDesplegable } from "./MenuDesplegable";
import { Navigation } from "./Navigation";
import { Logo } from "./ui/Logo";
import { BurgerButton } from "@/components/ui/BurguerButton";
const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex items-center justify-between px-4 sm:px-10 fixed w-full top-0 left-0 right-0 z-30">
      <Logo></Logo>
      <Navigation></Navigation>
      <BurgerButton></BurgerButton>
      <MenuDesplegable></MenuDesplegable>
    </header>
  );
};

export { Header };
