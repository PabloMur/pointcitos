import Link from "next/link";
const SignInButton = () => {
  return (
    <Link href={"/signup"}>
      <button className="bg-black p-4 rounded-lg font-bold text-white">
        Registrate
      </button>
    </Link>
  );
};

export { SignInButton };
