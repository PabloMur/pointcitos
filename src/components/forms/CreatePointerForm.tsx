const CreatePointerForm = () => {
  return (
    <form className="flex flex-col justify-center items-center border rounded-lg p-2 w-full text-black max-w-[450px]">
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">Cual es el nombre del lugar?:</p>
        <input
          type="text"
          name=""
          id=""
          className="border w-full rounded-lg p-2"
        />
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">En que ciudad está?:</p>
        <input
          type="text"
          name=""
          id=""
          className="border w-full rounded-lg p-2"
        />
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">Pon la dirección:</p>
        <input
          type="text"
          name=""
          id=""
          className="border w-full rounded-lg p-2"
        />
      </label>
      <label className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <p className="w-full">Ponele una fotito:</p>
        <input
          type="text"
          name=""
          id=""
          className="border w-full rounded-lg p-2"
        />
      </label>
      <button className="bg-blue-600 p-4 w-full rounded-lg text-white">
        Crear Poincito!
      </button>
    </form>
  );
};

export { CreatePointerForm };
