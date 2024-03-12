import { Navigation } from "./Navigation";
import { Logo } from "./ui/Logo";
const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex items-center justify-between px-4 sm:px-10">
      <Logo></Logo>
      <Navigation></Navigation>
    </header>
  );
};

export { Header };
