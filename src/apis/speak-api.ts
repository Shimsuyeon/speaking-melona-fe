import { base64toBlob } from "src/utils/utils";

import { apiGetter, apiPoster } from "./interceptor";
import { CharacterBarcodeSuccess } from "./types/types/types";

export const getCharacter = async ({
  queryKey,
}: {
  queryKey: [string, { barcode: string }];
}) => {
  const [, { barcode }] = queryKey;

  const { data } = await apiGetter<CharacterBarcodeSuccess>(
    "/character/" + barcode,
  );
  const image = URL.createObjectURL(base64toBlob(data.image));

  return {
    ...data,
    image,
  };
};

export const generateStory = async ({ barcodes }: { barcodes: string[] }) => {
  const { data } = await apiPoster("/generate_drama_plot", {
    method: "POST",
    body: barcodes,
  });

  return data;
};
