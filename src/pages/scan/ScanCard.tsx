import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "src/apis/speak-api";
import QueryKeys from "src/types/query-keys";

interface ScanCardProps {
  barcode: string;
}

const ScanCard = ({ barcode }: ScanCardProps) => {
  const { data } = useQuery({
    queryKey: [QueryKeys.character, { barcode }],
    queryFn: getCharacter,
  });

  return data ? (
    <button
      style={{ backgroundColor: "#FFF3E9" }}
      className="border border-border aspect-[93/113] rounded-[10px] flex flex-col justify-center items-center"
    >
      <div
        style={{ margin: "10px" }}
        className="w-18 h-18 border border-black overflow-hidden "
      >
        <img
          src={data.image}
          alt={data.name}
          className="min-w-full min-h-full object-cover object-center"
        />
      </div>
      <p className="text-center text-xs font-medium font-hanna">{data.name}</p>
    </button>
  ) : (
    <></>
  );
};
export default ScanCard;
