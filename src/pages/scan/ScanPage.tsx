import { useState } from "react";
import { Link } from "react-router-dom";
import WindowContainer from "src/components/windowContainer/WindowContainer";
import ModalPortal from "src/template/modalPortal/MordalPortal";
import Paths from "src/types/paths";
import ScanFailModal from "./ScanFailModal";

const ScanPage = () => {
  const [checkModalOpen, setCheckModalOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col px-4 h-screen justify-center max-w-96">
        <p className={"text-[35px] text-center font-hanna"}>인식된 캐릭터</p>

        <div className={"h-[3%]"} />

        <WindowContainer>
          <div
            className={"grid grid-cols-3 gap-[30px_18px] px-4 py-[26px] w-80"}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <button
                key={index}
                className={
                  "border border-dashed border-border aspect-[93/113] rounded-[10px] flex justify-center items-center"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <rect y="11" width="24" height="2" />
                  <rect x="11" y="0" width="2" height="24" />
                </svg>
              </button>
            ))}
          </div>
        </WindowContainer>

        <div className={"h-[3%]"} />

        <div className={"flex flex-col items-center gap-4"}>
          <button
            className={"button w-[240px] bg-secondary"}
            onClick={() => setCheckModalOpen(true)}
          >
            <p className={"text-[25px]"}>추가 스캔</p>
          </button>

          <Link to={Paths.Result} className={"button w-[240px] bg-primary"}>
            <p className={"text-[25px]"}>대화 생성</p>
          </Link>
        </div>
      </div>
      {checkModalOpen && (
        <ModalPortal>
          <ScanFailModal onClose={() => setCheckModalOpen(false)} />
        </ModalPortal>
      )}
    </div>
  );
};

export default ScanPage;
