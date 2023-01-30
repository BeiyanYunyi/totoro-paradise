import BaseResponse from "./BaseResponse";

export interface Month {
  monthId: string;
  monthName: string;
  ifCurrent: string;
}

export default interface GetSchoolMonthByTermResponse extends BaseResponse {
  monthList: Month[];
}
