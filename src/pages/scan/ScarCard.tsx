import Bananamilk from "src/assets/bananaMilk.webp";

const ScanCard = () => {
  return (
    <button
      style={{ backgroundColor: "#FFF3E9" }}
      className="border border-border aspect-[93/113] rounded-[10px] flex flex-col justify-center items-center"
    >
      <div
        style={{ margin: "10px" }}
        className="w-18 h-18 border border-black overflow-hidden "
      >
        <img
          src={Bananamilk}
          alt="Description"
          className="min-w-full min-h-full object-cover object-center"
        />
      </div>
      <p className="text-center text-sm font-medium">바나나우유</p>
    </button>
  );
};
export default ScanCard;
