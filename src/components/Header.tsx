import { MenuDesplegable } from "./MenuDesplegable";
import { Navigation } from "./Navigation";
import { Logo } from "./ui/Logo";
import { BurgerButton } from "@/components/ui/BurguerButton";
const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex items-center justify-between px-4 sm:px-10 relative">
      <Logo></Logo>
      <Navigation></Navigation>
      <BurgerButton></BurgerButton>
      <MenuDesplegable></MenuDesplegable>
    </header>
  );
};

export { Header };
