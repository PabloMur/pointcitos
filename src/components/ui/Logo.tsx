import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"} className="border-2 border-black rounded-lg p-4">
      <h2 className="font-bold text-xl">Poincitos 🏖️❤️⛰️</h2>
    </Link>
  );
};

export { Logo };
