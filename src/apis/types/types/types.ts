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
  상황: string;
  엔딩: string;
  캐릭터: {
    이름: string;
    페르소나: string;
    레전드_설정: string;
    이미지: string;
  }[];
  플롯: {
    캐릭터: string;
    대사: string;
  }[];
  궁합: {
    점수: number;
    설명: string;
  };
}
