import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "src/apis/speak-api";
import QueryKeys from "src/types/query-keys";

interface ProductListModalProps {
  onClose: () => void;
}

const ProductListModal = ({ onClose }: ProductListModalProps) => {
  const { data } = useQuery({
    queryKey: [QueryKeys.characters],
    queryFn: getCharacters,
  });

  return (
    <div
      className={
        "absolute top-0 left-0 w-full h-full flex justify-center items-center"
      }
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          "m-5 p-5 flex flex-col bg-white border-2 border-solid border-[#3A3A3A] rounded-[20px] shadow-[0px_4px_4px_#00000040]"
        }
      >
        {data ? (
          data.map((product) => (
            <p key={product.barcode} className={"text-center"}>
              {product.name}
            </p>
          ))
        ) : (
          <p>로딩중...</p>
        )}
      </div>
    </div>
  );
};

export default ProductListModal;
