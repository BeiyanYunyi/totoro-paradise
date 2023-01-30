import BaseResponse from "./BaseResponse";

export default interface GetAppAdResponse extends BaseResponse {
  message: string;
  needShow: string;
  appNoticeVoList: null;
}
