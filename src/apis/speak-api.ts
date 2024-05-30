import { base64toBlob } from "src/utils/utils";

import { apiGetter } from "./interceptor";
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

  return image;
};
