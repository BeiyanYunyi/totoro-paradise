import BaseResponse from "./BaseResponse";

export default interface GetAppNoticeResponse extends BaseResponse {
  appNoticeVoList: {
    title: string;
    alert: string;
    picPath: string;
  }[];
}
