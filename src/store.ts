import { atom } from "recoil";

export const charactersState = atom<string[]>({
  key: "charactersState",
  default: [],
});
