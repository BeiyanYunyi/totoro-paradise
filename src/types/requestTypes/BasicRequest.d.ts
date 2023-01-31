export default interface BasicRequest {
  campusId: string;
  schoolId: string;
  stuNumber: string;
  token: string;
}

export interface PhoneRequest extends BasicRequest {
  phoneNumber: string;
}
