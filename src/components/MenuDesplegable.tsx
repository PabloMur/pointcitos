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
      <menu className="absolute top-[10vh] bg-white left-0 right-0 h-[85vh] flex justify-center items-center">
        <ul className="flex flex-col justify-center items-center gap-2">
          <CustomButton
            text="Mi Perfil"
            route="/profile"
            action={handleCloseMenu}
          ></CustomButton>
          <MyPointsButton></MyPointsButton>
          <LoginButton></LoginButton>
          <SignInButton></SignInButton>
        </ul>
      </menu>
    )
  );
};

export { MenuDesplegable };
