import { useOverlay } from "@toss/use-overlay";
import { Link } from "react-router-dom";
import BananaMilk from "src/assets/bananaMilk.webp";
import CreamBread from "src/assets/creamBread.webp";
import Chatting from "src/components/chatting/Chatting";
import WindowContainer from "src/components/windowContainer/WindowContainer";
import { colorSet } from "src/constants";
import Paths from "src/types/paths";

import ProductListModal from "./ProductListModal";

const LandingPage = () => {
  const overlay = useOverlay();

  const openProductListModal = () => {
    return new Promise((resolve) => {
      overlay.open(({ exit }) => (
        <ProductListModal
          onClose={() => {
            exit();
            resolve(true);
          }}
        />
      ));
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col px-4 h-screen justify-center max-w-96">
        <p className={"text-[55px] text-center font-hanna leading-none"}>
          얘랑쟤랑? <br /> 대화궁합!
        </p>

        <div className={"h-[7%]"} />

        <WindowContainer>
          <div className={"flex flex-col p-6 gap-4"}>
            <Chatting
              profileImage={BananaMilk}
              text={"여러 상품을 스캔해서 대화를 생성해보세요!"}
              direction={"right"}
            />
            <Chatting
              profileImage={CreamBread}
              text={"나만의 대화 꿀조합은?"}
              pointColor={colorSet.secondary}
              direction={"left"}
            />
          </div>
        </WindowContainer>

        <div className={"h-[7%]"} />

        <div className={"flex flex-col justify-center items-center gap-4"}>
          <Link to={Paths.Scan} className={"button w-[240px] bg-primary"}>
            <p className={"text-[25px]"}>시작하기</p>
          </Link>
          <button
            className={"button w-[240px] bg-secondary"}
            onClick={openProductListModal}
          >
            <p className={"text-[25px]"}>지원되는 상품 목록</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
