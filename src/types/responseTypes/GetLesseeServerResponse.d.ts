import BaseResponse from "./BaseResponse";

export default interface GetLesseeServerResponse extends BaseResponse {
  token: string;
  path: string;
  newsUrl: string;
  registerUrl: string;
  useUrl: string;
}
