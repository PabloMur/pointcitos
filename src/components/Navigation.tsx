import { LoginButton } from "./ui/LoginButton";
import { MyPointsButton } from "./ui/MyPointsButton";
import { ProfileButton } from "./ui/ProfileButton";
import { SignInButton } from "./ui/SignupButton";
const Navigation = () => {
  return (
    <nav className=" flex justify-center items-center gap-3">
      <ProfileButton></ProfileButton>
      <MyPointsButton></MyPointsButton>
      <LoginButton></LoginButton>
      <SignInButton></SignInButton>
    </nav>
  );
};

export { Navigation };
