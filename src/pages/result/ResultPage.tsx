import "./ResultPage.css";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { generateStory } from "src/apis/speak-api";
import Chatting from "src/components/chatting/Chatting";
import WindowContainer from "src/components/windowContainer/WindowContainer";
import { charactersState } from "src/store";
import Paths from "src/types/paths";
import QueryKeys from "src/types/query-keys";

const loadingTexts = [
  "크림빵과 바나나맛우유의 연애사를 상상하는 중...",
  "태양초고추장 흑역사 쓰는 중...",
  "사조참치그룹 막내아들로 태어나는 중...",
  "허니버터칩과 콜라의 토론을 분석하는 중...",
  "빼빼로와 코카콜라의 미래를 예측하는 중...",
  "포카칩과 레드불의 결혼식을 준비하는 중...",
  "프링글스와 코코팜의 이별을 위로하는 중...",
  "펩시와 삼각김밥의 싸움을 중재하는 중...",
  "초코파이와 민트초코의 대화를 번역하는 중...",
];

const ResultPage = () => {
  const [characters] = useRecoilState(charactersState);
  const [currentLoadingText, setCurrentLoadingText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setCurrentLoadingText(loadingTexts[randomIndex]);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [loadingTexts]);

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.story, { barcodes: characters }],
    queryFn: generateStory,
    retry: 0,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading || !data) {
    return (
      <div className="flex flex-col items-center h-screen justify-center">
        <p className={"font-hanna text-lg mt-[-200px]"}>
          로딩중입니다. 잠시만 기다려주세요
        </p>

        <p className={"font-hanna text-lg"}>
          최대 10초까지 소요될 수 있습니다.
        </p>

        <div className="loading-animation mt-20">
          <p className={"font-hanna text-center text-xl"}>
            {currentLoadingText}
          </p>
        </div>
      </div>
    );
  }

  const { 상황, 플롯, 캐릭터, 궁합 } = data;

  const handleShare = () => {
    navigator.share({
      url: "https://melona.chat",
      title: 상황,
      text: 플롯
        .map((chatting) => chatting.캐릭터 + ": " + chatting.대사)
        .join(" | "),
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col px-4 h-screen justify-center w-max-96">
        <p className={"text-[30px] text-center font-hanna"}>
          얘랑쟤랑?대화궁합!
        </p>

        <div className={"h-[5%]"} />

        <WindowContainer>
          <div
            className={
              "flex flex-col max-h-[320px] overflow-y-scroll p-4 gap-5 max-w-96"
            }
          >
            <p className={"text-center text-xs p-1 bg-slate-200 rounded-md"}>
              {상황}
            </p>

            {플롯.map((chatting, index) => (
              <Chatting
                key={index}
                profileImage={
                  캐릭터.find((c) => c.이름 === chatting.캐릭터)?.이미지 || ""
                }
                text={chatting.대사}
                direction={index % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </WindowContainer>

        <div className={"h-[3%]"} />

        <div className={"flex font-hanna text-xl items-center gap-2"}>
          <p>대화 궁합</p>

          <div className={"grow bg-[#D9D9D9] h-[22px]"}>
            <div
              className={"bg-[#9BF085] h-full"}
              style={{ width: `${궁합.점수}%` }}
            />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
          >
            <path
              d="M10.5 18L8.9775 16.7052C3.57 12.1243 0 9.103 0 5.3951C0 2.37384 2.541 0 5.775 0C7.602 0 9.3555 0.794551 10.5 2.05014C11.6445 0.794551 13.398 0 15.225 0C18.459 0 21 2.37384 21 5.3951C21 9.103 17.43 12.1243 12.0225 16.715L10.5 18Z"
              fill="#FF0000"
            />
          </svg>
          <p>{궁합.점수}%</p>
        </div>

        <div className={"flex justify-center mt-1"}>
          <p>{궁합.설명}</p>
        </div>

        <div className={"h-[4%]"} />

        <div className={"flex flex-col items-center gap-4"}>
          <button
            className={"button w-[240px] bg-secondary"}
            onClick={handleShare}
          >
            <p className={"text-[22px]"}>결과 공유</p>
          </button>

          <Link to={Paths.Scan} className={"button w-[240px] bg-primary"}>
            <p className={"text-[22px]"}>추가 생성</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
