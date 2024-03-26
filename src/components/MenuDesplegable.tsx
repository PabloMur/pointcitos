import { LoginButton } from "./ui/LoginButton";
import { MyPointsButton } from "./ui/MyPointsButton";
import { SignInButton } from "./ui/SignupButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { menuDesplegableAtom } from "@/atoms";
import { CustomButton } from "./ui/CustomButton";

const MenuDesplegable = () => {
  const [active, setActive] = useRecoilState(menuDesplegableAtom);

  const handleCloseMenu = () => {
    setActive(false);
  };

  return (
    active && (
      <menu className="fixed top-[10vh] bg-white left-0 right-0 bottom-0 flex justify-center items-center z-30">
        <ul className="flex flex-col justify-center items-center gap-2">
          <CustomButton
            text="Mi Perfil"
            route="/profile"
            action={handleCloseMenu}
          ></CustomButton>
          <CustomButton
            text="Mis Points"
            route="/myPointers"
            action={handleCloseMenu}
          ></CustomButton>
          <CustomButton
            text="Crear Point"
            route="/create"
            action={handleCloseMenu}
          ></CustomButton>
          <CustomButton
            text="Home"
            route="/home"
            action={handleCloseMenu}
          ></CustomButton>
          <LoginButton></LoginButton>
          <SignInButton></SignInButton>
        </ul>
      </menu>
    )
  );
};

export { MenuDesplegable };
