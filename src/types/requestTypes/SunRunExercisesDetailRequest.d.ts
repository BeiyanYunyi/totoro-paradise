import type { Point } from '../RunPoint';

export default interface SunRunDetailRequest {
  pointList: Point[];
  scantronId: string;
  stuNumber: string;
  token: string;
}
// 注：此包无加密
