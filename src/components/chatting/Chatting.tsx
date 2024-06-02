import DefaultImage from "src/assets/default.svg";
import { colorSet } from "src/constants";

interface ChattingProps {
  profileImage: string;
  text: string;
  direction: "left" | "right";
  pointColor?: string;
}

const Chatting = ({
  profileImage,
  text,
  direction,
  pointColor = colorSet.secondary,
}: ChattingProps) => {
  return (
    <div
      className={
        "flex gap-4 items-start justify-center " +
        (direction === "left" ? "flex-row" : "flex-row-reverse")
      }
    >
      <div
        className={
          "min-w-[56px] rounded-full border border-gray-200 overflow-hidden"
        }
      >
        <img
          src={profileImage || DefaultImage}
          alt="profile"
          width={54}
          height={54}
        />
      </div>

      <div
        className={
          `px-4 py-3 grow min-h-[52px] mt-[2px] flex justify-center items-center ` +
          (direction === "left"
            ? "rounded-[30px_30px_30px_0]"
            : "rounded-[30px_30px_0_30px]")
        }
        style={{
          backgroundColor: pointColor,
        }}
      >
        <p className={"leading-6"}>{text}</p>
      </div>
    </div>
  );
};

export default Chatting;
