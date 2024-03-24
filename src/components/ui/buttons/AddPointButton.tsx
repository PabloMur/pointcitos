const AddPointButton = () => {
  return (
    <button className=" bg-black p-4 rounded-lg flex justify-center items-center gap-2 box-border">
      <p className="bg-green-500 rounded-full p-2 h-6 w-6 flex justify-center items-center font-bold">
        +
      </p>
      <p className="font-bold">Agregar un Point</p>
    </button>
  );
};

export { AddPointButton };
