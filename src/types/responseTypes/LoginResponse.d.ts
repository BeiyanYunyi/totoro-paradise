import BaseResponse from "./BaseResponse";

export default interface LoginResponse extends BaseResponse {
  token: null;
  studentId: string;
  stuNumber: string;
  stuName: string;
  phoneNumber: string;
  schoolName: string;
  schoolId: string;
  campusName: string;
  campusId: string;
  collegeName: string;
  collegeId: null;
  naturalId: string;
  naturalName: string;
  className: null;
  gender: null;
  headPortrait: string;
  sex: string;
}
