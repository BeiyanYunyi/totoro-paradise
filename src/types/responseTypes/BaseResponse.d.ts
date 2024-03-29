 
import type { Term } from "./GetSchoolTermResponse";
import type { Score } from "./GetSunRunArchResponse";

export default interface BaseResponse {
  status: string;
  msg: null;
  data: null | Term[] | Score[];
  obj: null;
  body: null;
  obj1: null;
  resultMap: null;
  total: number;
  wxLoginStatus: number;
  msgList: unknown[];
  message: null | string;
  code: string;
  token: null | string;
}
