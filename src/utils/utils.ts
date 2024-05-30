export const numToColor = (num: number): string => {
  switch (num) {
    case 0:
      return "#000000";
    case 1:
      return "#0074D9";
    case 2:
      return "#FF4136";
    case 3:
      return "#2ECC40";
    case 4:
      return "#FFDC00";
    case 5:
      return "#AAAAAA";
    case 6:
      return "#F012BE";
    case 7:
      return "#FF851B";
    case 8:
      return "#7FDBFF";
    case 9:
      return "#870C25";
    default:
      return "#000000";
  }
};

export const secondsToTime = (seconds: number): string => {
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  return `${min}m ${sec}s`;
};

export const base64toBlob = (b64Data: string, contentType = "") => {
  const image_data = window.atob(b64Data);

  const arraybuffer = new ArrayBuffer(image_data.length);
  const view = new Uint8Array(arraybuffer);

  for (let i = 0; i < image_data.length; i++) {
    view[i] = image_data.charCodeAt(i) & 0xff;
    // charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환
    // 비트연산자 & 와 0xff(255) 값은 숫자를 양수로 표현하기 위한 설정
  }

  return new Blob([arraybuffer], { type: contentType });
};

export const parseUserEmail = (email: string): string => {
  return email.split("@")[0];
};

export const randomColors = [
  "#EC8F5E",
  "#42A5F5",
  "#66BB6A",
  "#FFD54F",
  "#756AB6",
  "#FF7043",
  "#9575CD",
  "#26A69A",
  "#EF5350",
  "#78909C",
  "#FFF78A",
  "#FF8A65",
  "#CEE6F3",
  "#E9EDC9",
  "#FAEDCD",
  "#AC87C5",
];

export const hashCode = (color: string) => {
  let hash = 0;
  for (let i = 0; i < color.length; i++) {
    hash = color.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

export const dateToYYYYMMDD = (date: Date) => {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

export function clamp(input: number, min: number, max: number): number {
  return input < min ? min : input > max ? max : input;
}
