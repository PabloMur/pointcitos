"use client";
import { useGoTo } from "@/hooks";

const InvitationFormCode = () => {
  const goto = useGoTo();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const code = target.code.value;
    console.log(code);
    alert(`ingresando a al pointeeer ${code}`);
    goto(`/pointer/${code}`);
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-2"
      onSubmit={handleSubmit}
    >
      <label htmlFor="">
        <input
          name="code"
          type="text"
          className="border-2 border-black rounded-lg p-4 text-center"
          placeholder="Codigo de invitacion"
        />
      </label>
      <button className="bg-blue-600 p-4 text-white rounded-lg font-bold w-full">
        Ingresar
      </button>
    </form>
  );
};
export { InvitationFormCode };
