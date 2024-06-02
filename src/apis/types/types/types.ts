export interface CharacterBarcodeSuccess {
  //read character success
  name: string;
  barcode: string;
  prompt: string;
  image: string;
  id: number;
}

export interface CharacterBarcodeError {
  //read character error
  detail: [
    {
      loc: [string, 0];
      msg: string;
      type: string;
    },
  ];
}

export interface CharacterInput {
  //create character input
  name: string;
  barcode: string;
  prompt: string;
  image: string;
}

export interface CharacterSuccessOutput {
  name: string;
  barcode: string;
  prompt: string;
  image: string;
  id: number;
}

export interface CharacterErrorOutput {
  detail: [{ loc: [string, 0]; msg: string; type: string }];
}

export interface StorySuccessOutput {
  story: string;
}
