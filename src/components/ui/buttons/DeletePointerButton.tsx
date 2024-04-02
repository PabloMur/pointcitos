import Image from "next/image";
import trash from "../../../../public/icons/trash.svg";
import { useSetRecoilState } from "recoil";
import { deletePointerCodeAtom, deletePointerModalAtom } from "@/atoms";

const DeletePointerButton = ({ code }: any) => {
  const setModalDeleteActive = useSetRecoilState(deletePointerModalAtom);

  const setDetelePointerCode = useSetRecoilState(deletePointerCodeAtom);

  const handleDelete = async () => {
    setDetelePointerCode(code);
    setModalDeleteActive(true);
  };

  return (
    <button onClick={handleDelete}>
      <Image src={trash} alt="trash icon" width={30} height={30}></Image>
    </button>
  );
};
export { DeletePointerButton };
