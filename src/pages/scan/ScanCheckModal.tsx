import { useQuery } from "@tanstack/react-query";
import { useOverlay } from "@toss/use-overlay";
import { useRecoilState } from "recoil";
import { getCharacter } from "src/apis/speak-api";
import { charactersState } from "src/store";
import QueryKeys from "src/types/query-keys";

import RequestModal from "./RequestModal";

interface ScanCheckModalProps {
  onClose: () => void;
  barcode: string;
}

const ScanCheckModal = ({ onClose, barcode }: ScanCheckModalProps) => {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: [QueryKeys.character, { barcode }],
    queryFn: getCharacter,
  });

  const [, setCharacters] = useRecoilState(charactersState);

  const overlay = useOverlay();

  const openRequestModal = (barcode: string) => {
    return new Promise((resolve) => {
      overlay.open(({ exit }) => (
        <RequestModal
          barcode={barcode}
          onClose={() => {
            exit();
            resolve(true);
          }}
        />
      ));
    });
  };

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
        <p>code: {barcode}</p>

        {isLoading ? (
          <p>로딩중...</p>
        ) : data ? (
          <>
            <p className={"font-hanna text-2xl mb-2"}>이 상품이 맞나요?</p>

            <div
              style={{ margin: "10px" }}
              className="w-18 h-18 border border-gray-200 overflow-hidden rounded-lg bg-amber-50"
            >
              <img
                src={data.image}
                alt={data.name}
                className="min-w-full min-h-full object-cover object-center"
              />
            </div>
            <p className="text-center text-lg font-medium font-hanna mb-2">
              {data.name}
            </p>

            <button
              className={"p-1 bg-primary rounded-md"}
              onClick={() => {
                setCharacters((prev) => [...prev, barcode]);
                onClose();
              }}
            >
              <p className={""}>맞아요</p>
            </button>
          </>
        ) : (
          <>
            <p className={"font-hanna text-2xl mb-5"}>
              등록되지 않은 캐릭터에요
            </p>
            <p>스캔이 부정확했거나 아직 캐릭터를 만들지 못한 상품이에요</p>

            <button
              className={"p-1 bg-primary rounded-md"}
              onClick={() => openRequestModal(barcode)}
            >
              <p className={""}>등록 요청하기</p>
            </button>
          </>
        )}

        <button
          className={"p-1 bg-secondary rounded-md mt-2"}
          onClick={onClose}
        >
          <p className={""}>다시 스캔하기</p>
        </button>
      </div>
    </div>
  );
};

export default ScanCheckModal;
