import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { requestProduct } from "src/apis/speak-api";

interface RequestModalProps {
  onClose: () => void;
  barcode: string;
}

const RequestModal = ({ onClose, barcode }: RequestModalProps) => {
  const [content, setContent] = useState("");

  const sendRequest = useMutation({
    mutationFn: requestProduct,
    onSuccess: () => {
      toast.success("요청해주셔서 감사합니다!");
      onClose();
    },
    onError: () => {
      toast.error("요청에 실패했습니다.");
    },
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
          "p-5 flex flex-col bg-white border-2 border-solid border-[#3A3A3A] rounded-[20px] shadow-[0px_4px_4px_#00000040]"
        }
      >
        <p className={"font-hanna text-2xl mb-5"}>상품 이름을 적어주세요!</p>

        <input
          className={
            "border border-solid border-[#3A3A3A] rounded-[10px] text-center mb-5 text-lg p-1"
          }
          type="text"
          placeholder={"상품명"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className={
            "bg-[#f46b6b] rounded-[15px] border-2 border-solid border-black"
          }
          onClick={() => {
            sendRequest.mutate({
              content,
              barcode,
            });
          }}
        >
          <p className={"font-hanna text-[20px] p-1 text-center"}>요청하기</p>
        </button>
      </div>
    </div>
  );
};

export default RequestModal;
