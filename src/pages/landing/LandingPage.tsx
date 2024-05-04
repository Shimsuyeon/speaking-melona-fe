import { Link } from "react-router-dom";
import Chatting from "src/components/chatting/Chatting";
import WindowContainer from "src/components/windowContainer/WindowContainer";
import { colorSet } from "src/constants";
import Paths from "src/types/paths";

const LandingPage = () => {
  return (
    <div className="flex flex-col px-4 h-screen justify-center">
      <p className={"text-[55px] text-center font-hanna leading-none"}>
        얘랑쟤랑? <br /> 대화궁합!
      </p>

      <div className={"h-[7%]"} />

      <WindowContainer>
        <div className={"flex flex-col p-6 gap-4"}>
          <Chatting
            profileImage={
              "https://avatars.githubusercontent.com/u/44080404?v=4"
            }
            text={"여러 상품을 스캔해서 대화를 생성해보세요!"}
            direction={"right"}
          />
          <Chatting
            profileImage={
              "https://avatars.githubusercontent.com/u/44080404?v=4"
            }
            text={"나만의 대화 꿀조합은?"}
            pointColor={colorSet.secondary}
            direction={"left"}
          />
        </div>
      </WindowContainer>

      <div className={"h-[7%]"} />

      <div className={"flex justify-center"}>
        <Link to={Paths.Scan} className={"button w-[170px]"}>
          <p className={"text-[25px]"}>시작하기</p>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
