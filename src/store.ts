import { atom } from "recoil";

import { CharacterBarcodeSuccess } from "./apis/types/types/types";

export const charactersState = atom<string[]>({
  key: "charactersState",
  default: [],
});

export const characterArray = atom<CharacterBarcodeSuccess[]>({
  key: "characterArray",
});
