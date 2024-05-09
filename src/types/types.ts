export const MOBILE_BREAKPOINT = "768px";

export interface Point {
  x: number;
  y: number;
}

export const GRID_ORIGIN = 200;

export interface GridComponents {
  outputGrid: number[][];
  selectedCells: Cell[];
  selectedGridDimensions: {
    rotationParity: number;
  };
  size: {
    n: number;
    m: number;
  };
}

export interface Cell {
  x: number;
  y: number;
  color: number;
}

export interface TaskImageResponse {
  id: number;
  taskName: string;
  image: string;
}

export interface TaskImage {
  id: number;
  taskName: string;
  image: string;
}

export interface SignUpResponse {
  id: number;
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
}

export interface Task {
  id: number;
  taskName: string;
  creatorId: string;
  content: {
    train: Pair[];
    test: Pair[];
  };
}

export interface Pair {
  input: number[][];
  output: number[][];
}

export interface TaskSolveResponse {
  success: number; // 1: correct, 0: wrong
  taskName: string;
  thisScore: number;
  oldBestScore: number;
  calculateIQ: number;
  userTotalSolved: number;
  questionUser: UserScore[];
}

export interface UserScore {
  userEmail: string;
  userScore: number;
  userNickName: string;
}

export interface CreatedTask {
  creatorId: string;
  taskName: string;
  totalLikes: number;
  totalDislikes: number;
  description: string;
  train: Pair[];
  test: Pair[];
}

export const Operation = {
  Selection: {
    SelectObject: "SelectObject",
    SelectCell: "SelectCell",
    SelectGrid: "SelectGrid",
  },
  Coloring: {
    Paint: "Paint",
  },
  O2: {
    Move: "Move",
    Rotate: "Rotate",
    Flip: "Flip",
  },
  Clipboard: {
    Copy: "Copy",
    Paste: "Paste",
  },
  Critical: {
    ResizeGrid: "ResizeGrid",
    Overlap: "Overlap",
    Submit: "Submit",
  },
  History: {
    Undo: "Undo",
    Redo: "Redo",
  },
};

export interface HistoryLog {
  category: string;
  operation: string;
  color?: number;
  source?: "input" | "output";
  position?: Point;
  direction?:
    | "horizontal"
    | "vertical"
    | "clockwise"
    | "counterclockwise"
    | "up"
    | "down"
    | "left"
    | "right";
  special?: {
    clipboard?: Cell[];
    rotationParity?: number;
    succeed?: boolean; // For submit
  };
  overlapped: boolean;
  grid: number[][]; // Output grid(OG)
  object: Cell[]; // Selected cells
  timestamp: Date;
}

export interface LikeResponse {
  taskLike: {
    id: number;
    userId: number;
    taskId: number;
    like: number;
  };
  totalLike: number;
}

export interface DislikeResponse {
  taskLike: {
    id: number;
    userId: number;
    taskId: number;
    like: number;
  };
  totalDislike: number;
}

export interface LeaderBoard {
  email: string;
  totalScore: number;
  nickName: string;
}

export interface CountLeaderBoard {
  email: string;
  count: number;
  nickName: string;
}

export interface MyInfo {
  email: string;
  totalScore: number;
  IQ: number;
  nickName: string;
}

export interface MyOverviewSolved {
  overviewSolved: number;
}

export interface MyOverviewCreated {
  overviewCreated: number;
}

export interface MyOverviewLike {
  overviewLike: number;
}

export interface MySolvedQuestion {
  taskName: string;
  userScore: number;
  image: string;
}

export interface MyContributedQuestion {
  taskName: string;
  image: string;
}

export interface SearchGetTaskName {
  taskName: string;
}

export interface CommitHistory {
  date: string;
  count: number;
}

// event api

export interface DrawUser {
  id: number;
  userId: number;
  lotteryBoardId: number;
  issuedTaskId: number;
  isUsed: number;
  lotteryBoardPrizeId?: number;
  createdAt: string;
}

export interface DrawLottery {
  id: number;
  loteryBoardId: number;
  prize: string;
  isOpened: boolean;
}
