import BaseResponse from "./BaseResponse";

export interface Term {
  termName: string;
  termId: string;
  isCurrent: string;
}

export default interface GetSchoolTermResponse extends BaseResponse {
  data: Term[];
}
