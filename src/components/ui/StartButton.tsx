import Link from "next/link";

const StartButton = () => {
  return (
    <Link href={"/home"}>
      <button className="p-4 bg-blue-600 rounded-lg text-white font-bold w-fit">
        Comenzar!
      </button>
    </Link>
  );
};

export { StartButton };
