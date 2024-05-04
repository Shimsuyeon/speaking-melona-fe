import WindowContainer from "src/components/windowContainer/WindowContainer";

interface LandingPageProps {}

const LandingPage = ({}: LandingPageProps) => {
  return (
    <div className="flex-row px-4">
      <p className={"text-[55px] text-center font-hanna leading-none"}>
        얘랑쟤랑? <br /> 대화궁합!
      </p>

      <WindowContainer></WindowContainer>
    </div>
  );
};

export default LandingPage;
