import BaseResponse from "./BaseResponse";

export default interface UpdateAppVersionResponse extends BaseResponse {
  version: null;
  url: null;
  needUpdate: string;
  forceUpdate: string;
  picPath: null;
  updateDescription: null;
}
