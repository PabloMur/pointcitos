"use client";
import { useGoTo } from "@/hooks";

type CustomButtonType = {
  text: string;
  route?: string;
  action?: any;
};
const CustomButton = ({ text, route, action }: CustomButtonType) => {
  const goto = useGoTo();

  const handleClick = () => {
    if (route) {
      goto(route);
    }
    if (action) {
      action();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 p-4 font-bold text-white rounded-lg w-fit"
    >
      {text}
    </button>
  );
};

export { CustomButton };
