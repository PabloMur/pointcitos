import { LoginButton } from "./ui/LoginButton";
import { SignInButton } from "./ui/SignInButton";
const Navigation = () => {
  return (
    <nav className=" flex justify-center items-center gap-3">
      <LoginButton></LoginButton>
      <SignInButton></SignInButton>
    </nav>
  );
};

export { Navigation };
