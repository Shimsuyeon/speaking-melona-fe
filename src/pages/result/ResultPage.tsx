import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { generateStory } from "src/apis/speak-api";
import BananaMilk from "src/assets/bananaMilk.webp";
import CreamBread from "src/assets/creamBread.webp";
import Chatting from "src/components/chatting/Chatting";
import WindowContainer from "src/components/windowContainer/WindowContainer";
import Paths from "src/types/paths";

const ResultPage = () => {
  const chattings = [
    {
      name: "크림빵",
      image: CreamBread,
      text: "안녕! 나는 크림빵이야! 나는 바나나우유랑 제일 친해! 이렇게 만나게 되어 기쁘당 ㅎㅎ 너랑 친하게 지냈으면 좋겠어! 혹시 나한테 다른 친구도 소개 시켜줄 수 있을까?",
    },
    {
      name: "바나나우유",
      image: BananaMilk,
      text: "안녕! 나는 바나나우유야! 나는 크림빵이랑 제일 친해! 이렇게 만나게 되어 기쁘당 ㅎㅎ 너랑 친하게 지냈으면 좋겠어! 혹시 나한테 다른 친구도 소개 시켜줄 수 있을까?",
    },
  ];

  const generate = useMutation({
    mutationFn: generateStory,
  });

  useEffect(() => {
    generate.mutate({ barcodes: ["1234", "5678"] });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col px-4 h-screen justify-center w-max-96">
        <p className={"text-[30px] text-center font-hanna"}>
          {chattings.length > 1
            ? "얘랑쟤랑?대화궁합!"
            : `${chattings[0].name}의 자기소개`}
        </p>

        <div className={"h-[5%]"} />

        <WindowContainer>
          <div
            className={
              "flex flex-col max-h-[320px] overflow-y-scroll p-4 gap-5 max-w-96"
            }
          >
            {chattings.length > 1 ? (
              <>
                {chattings.map((chatting, index) => (
                  <Chatting
                    key={index}
                    profileImage={chatting.image}
                    text={chatting.text}
                    direction={index % 2 === 0 ? "right" : "left"}
                  />
                ))}
              </>
            ) : (
              <Chatting
                profileImage={chattings[0].image}
                text={chattings[0].text}
                direction={"right"}
              />
            )}
          </div>
        </WindowContainer>

        <div className={"h-[3%]"} />

        {chattings.length > 1 && (
          <div className={"flex font-hanna text-xl items-center gap-2"}>
            <p>대화 궁합</p>

            <div className={"grow bg-[#D9D9D9] h-[22px]"}>
              <div className={"bg-[#9BF085] h-full"} style={{ width: "80%" }} />
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
            <p>80%</p>
          </div>
        )}

        <div className={"h-[4%]"} />

        <div className={"flex flex-col items-center gap-4"}>
          <button className={"button w-[240px] bg-secondary"}>
            <p className={"text-[25px]"}>결과 공유</p>
          </button>

          <Link to={Paths.Scan} className={"button w-[240px] bg-primary"}>
            <p className={"text-[25px]"}>추가 생성</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
