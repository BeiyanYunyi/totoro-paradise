export default class UserSession {
  code: string;

  phoneNumber = "";

  campusId = "";

  schoolId = "";

  stuNumber = "";

  token = "";

  loginCount = 0;

  constructor(code: string) {
    this.code = code;
  }

  setToken(token: string) {
    this.token = token;
  }

  addLoginCount() {
    this.loginCount += 1;
  }

  setDetailInfo({
    campusId,
    schoolId,
    stuNumber,
    phoneNumber,
  }: {
    campusId: string;
    schoolId: string;
    stuNumber: string;
    phoneNumber: string;
  }) {
    this.campusId = campusId;
    this.schoolId = schoolId;
    this.stuNumber = stuNumber;
    this.phoneNumber = phoneNumber;
  }

  getBasicRequest() {
    return {
      campusId: this.campusId,
      schoolId: this.schoolId,
      stuNumber: this.stuNumber,
      token: this.token,
    };
  }
}
