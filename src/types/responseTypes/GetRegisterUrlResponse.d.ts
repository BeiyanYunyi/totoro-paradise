import type BaseResponse from "./BaseResponse";

export default interface GetRegisterUrlResponse extends BaseResponse {
  registerUrl: string;
}
