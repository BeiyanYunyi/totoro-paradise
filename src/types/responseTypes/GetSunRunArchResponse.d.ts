import BaseResponse from "./BaseResponse";

export interface Score {
  scoreId: string;
  mileage: string;
  usedTime: string;
  runTime: string;
  status: string;
  calorie: string;
  runType: string;
  flag: string;
}

export default interface GetSunRunArchResponse extends BaseResponse {
  data: Score[];
  totalMileage: string;
  usedTime: string;
  avgSpeed: string;
  avgPace: string;
  calorie: string;
  requireNumber: string;
  completedTimes: string;
  incompleteTimes: string;
}
