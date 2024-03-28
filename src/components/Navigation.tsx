import { CustomButton } from "./ui/CustomButton";
import { LoginButton } from "./ui/LoginButton";
import { MyPointsButton } from "./ui/MyPointsButton";

import { SignInButton } from "./ui/SignupButton";
const Navigation = () => {
  return (
    <nav className="hidden sm:flex justify-center items-center gap-3">
      <CustomButton text="Mi Perfil" route="/profile"></CustomButton>
      <CustomButton text="Mis Points" route="/myPointers"></CustomButton>
      <CustomButton text="Crear Pointer" route="/create"></CustomButton>
      <CustomButton text="Home" route="/home"></CustomButton>
      <LoginButton></LoginButton>
      <SignInButton></SignInButton>
    </nav>
  );
};

export { Navigation };
