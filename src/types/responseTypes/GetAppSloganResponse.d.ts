import BaseResponse from "./BaseResponse";

export default interface GetAppSloganResponse extends BaseResponse {
  content: string;
  picPath: string;
}
