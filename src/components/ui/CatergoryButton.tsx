type CategoryType = {
  category: string;
};
const CategoryButton = ({ category }: CategoryType) => {
  return (
    <button className="text-white font-bold bg-black py-2 px-4 rounded-full">
      {category}
    </button>
  );
};

export { CategoryButton };
