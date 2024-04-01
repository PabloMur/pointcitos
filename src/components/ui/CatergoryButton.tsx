"use client";

import { useFilterByCategory } from "@/hooks";
import { usePathname } from "next/navigation";

type CategoryType = {
  category: string;
};
const CategoryButton = ({ category }: CategoryType) => {
  const filter = useFilterByCategory();
  const pathname = usePathname();
  const code = pathname.slice(-5);
  const handleClick = () => {
    filter(code, category.toLowerCase());
  };

  return (
    <button
      className="text-white font-bold bg-black py-2 px-4 rounded-full"
      onClick={handleClick}
    >
      {category}
    </button>
  );
};

export { CategoryButton };
