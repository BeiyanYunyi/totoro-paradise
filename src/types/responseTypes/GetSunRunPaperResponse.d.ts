import RunPoint from "../RunPoint";
import BaseResponse from "./BaseResponse";

export default interface GetSunRunPaperResponse extends BaseResponse {
  faceFlag: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  offsetRange: string;
  mileage: string;
  fitDegree: string;
  minSpeed: string;
  maxSpeed: string;
  minTime: string;
  maxTime: string;
  ifHasRun: string;
  minWalkTotal: string;
  maxWalkTotal: string;
  runPointList: RunPoint[];
}
