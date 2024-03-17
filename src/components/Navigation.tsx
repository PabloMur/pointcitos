import { CustomButton } from "./ui/CustomButton";
import { LoginButton } from "./ui/LoginButton";
import { MyPointsButton } from "./ui/MyPointsButton";

import { SignInButton } from "./ui/SignupButton";
const Navigation = () => {
  return (
    <nav className="hidden sm:flex justify-center items-center gap-3">
      <CustomButton
        text={"test"}
        route="/myPointers"
        action={() => {
          alert("Está todo bien con la Caro");
        }}
      ></CustomButton>
      <CustomButton text="Mi Perfil" route="/profile"></CustomButton>

      <MyPointsButton></MyPointsButton>
      <LoginButton></LoginButton>
      <SignInButton></SignInButton>
    </nav>
  );
};

export { Navigation };
