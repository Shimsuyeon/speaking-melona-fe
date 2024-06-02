import { base64toBlob } from "src/utils/utils";

import { apiGetter, apiPoster } from "./interceptor";
import {
  CharacterBarcodeSuccess,
  StorySuccessOutput,
} from "./types/types/types";

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

export const generateStory = async ({
  queryKey,
}: {
  queryKey: [string, { barcodes: string[] }];
}) => {
  const [, { barcodes }] = queryKey;

  const { data } = await apiPoster<StorySuccessOutput>("/generate_drama_plot", {
    barcodes,
  });

  return {
    ...data,
    캐릭터: data.캐릭터.map((character) => ({
      ...character,
      이미지: URL.createObjectURL(base64toBlob(character.이미지)),
    })),
  };
};

export const requestProduct = async ({
  content,
  barcode,
}: {
  content: string;
  barcode: string;
}) => {
  const { data } = await apiPoster(
    `/request?content=${content}&barcode=${barcode}`,
  );

  return data;
};
