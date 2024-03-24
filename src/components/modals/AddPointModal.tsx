import { CreatePointerForm } from "../forms/CreatePointForm";
const AddPointModal = () => {
  return (
    <div className="fixed bg-black/70 text-white top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <CreatePointerForm></CreatePointerForm>
    </div>
  );
};

export { AddPointModal };
