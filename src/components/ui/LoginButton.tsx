import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href={"/login"}>
      <button className="bg-blue-600 p-4 rounded-lg font-bold text-white">
        Iniciar Sesión
      </button>
    </Link>
  );
};

export { LoginButton };
