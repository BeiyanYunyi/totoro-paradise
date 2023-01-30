import { Point } from "../RunPoint";

export default interface SunRunDetailRequest {
  faceData: "";
  pointList: Point[];
  scantronId: string;
  stuNumber: string;
  token: string;
}
// 注：此包无加密
