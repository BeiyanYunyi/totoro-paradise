export default interface LoginRequest {
  code: string;
  latitude: string;
  loginWay: string;
  longitude: string;
  password: string | "";
  phoneNumber: string | "";
  token: string;
}
