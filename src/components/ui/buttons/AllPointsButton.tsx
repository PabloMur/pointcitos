const AllPointsButton = () => {
  const handleClick = () => {
    location.reload();
  };
  return (
    <button
      onClick={handleClick}
      className="text-white font-bold bg-blue-600 p-2  px-3 rounded-full cursor-pointer"
    >
      Todos
    </button>
  );
};

export { AllPointsButton };
