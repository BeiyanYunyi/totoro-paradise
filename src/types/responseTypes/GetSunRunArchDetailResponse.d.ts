import { Point } from "../RunPoint";
import BaseResponse from "./BaseResponse";

export default interface GetSunRunArchDetailResponse extends BaseResponse {
  date: string;
  time: string;
  mileage: string;
  usedTime: string;
  avgSpeed: string;
  avgPace: string;
  runType: string;
  pointList: Point[];
  calorie: string;
  flag: string;
}
