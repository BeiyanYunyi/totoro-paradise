import BaseResponse from "./BaseResponse";

export default interface GetAppFrontPageResponse extends BaseResponse {
  imageUrl: null;
  todayTotalKm: string;
  todayCalorie: string;
  slogan: null;
  sunRunInfoVo: {
    totalMileage: string;
    usedTime: string;
    avgSpeed: string;
    avgPace: string;
    calorie: string;
  };
  freeRunInfoVo: { totalMileage: string };
  mornsignInfoVo: { completedTimes: string };
}
