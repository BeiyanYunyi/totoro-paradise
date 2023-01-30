import axios from "axios";
import generateSunRunExercisesReq from "../controllers/generateSunRunExercisesReq";
import sessionController from "../controllers/sessionController";
import GetSchoolMonthByTermRequest from "../types/requestTypes/GetSchoolMonthByTermRequest";
import GetSchoolTermRequest from "../types/requestTypes/GetSchoolTermRequest";
import GetSunRunArchDetailRequest from "../types/requestTypes/GetSunRunArchDetailRequest";
import GetSunRunArchRequest from "../types/requestTypes/GetSunRunArchRequest";
import SunRunExercisesDetailRequest from "../types/requestTypes/SunRunExercisesDetailRequest";
import SunRunExercisesRequest from "../types/requestTypes/SunRunExercisesRequest";
import UpdateAppVersionRequest from "../types/requestTypes/UpdateAppVersionRequest";
import GetAppAdResponse from "../types/responseTypes/GetAppAdResponse";
import GetAppFrontPageResponse from "../types/responseTypes/GetAppFrontPageResponse";
import GetAppNoticeResponse from "../types/responseTypes/GetAppNoticeResponse";
import GetAppSloganResponse from "../types/responseTypes/GetAppSloganResponse";
import GetLesseeServerResponse from "../types/responseTypes/GetLesseeServerResponse";
import GetRegisterUrlResponse from "../types/responseTypes/GetRegisterUrlResponse";
import GetRunBeginResponse from "../types/responseTypes/GetRunBeginResponse";
import GetSchoolMonthByTermResponse from "../types/responseTypes/GetSchoolMonthByTermResponse";
import GetSchoolTermResponse from "../types/responseTypes/GetSchoolTermResponse";
import GetSunRunArchDetailResponse from "../types/responseTypes/GetSunRunArchDetailResponse";
import GetSunRunArchResponse from "../types/responseTypes/GetSunRunArchResponse";
import GetSunRunPaperResponse from "../types/responseTypes/GetSunRunPaperResponse";
import LoginResponse from "../types/responseTypes/LoginResponse";
import SunRunExercisesDetailResponse from "../types/responseTypes/SunRunExercisesDetailResponse";
import SunRunExercisesResponse from "../types/responseTypes/SunRunExercisesResponse";
import UpdateAppVersionResponse from "../types/responseTypes/UpdateAppVersionResponse";
import Route from "../types/Route";
import { Point } from "../types/RunPoint";
import encryptRequestContent from "../utils/encryptRequestContent";

const TotoroApiWrapper = {
  client: axios.create({
    baseURL: "https://app.xtotoro.com/app",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Content-Length": "0",
      Host: "app.xtotoro.com",
      Connection: "Keep-Alive",
      "Accept-Encoding": "gzip",
      "User-Agent": "okhttp/4.9.0",
    },
  }),

  async getRegisterUrl(): Promise<GetRegisterUrlResponse> {
    const { data } = await this.client.post(
      "/platform/serverlist/getRegisterUrl"
    );
    return data;
  },

  async getLesseeServer(code: string): Promise<GetLesseeServerResponse> {
    sessionController.addSession(code);
    const { data }: { data: GetLesseeServerResponse } = await this.client.post(
      "/platform/serverlist/getLesseeServer",
      encryptRequestContent({ code })
    );
    const session = sessionController.getSession(code);
    session.setToken(data.token);
    return data;
  },

  async getAppAd(code: string) {
    const { data }: { data: GetAppAdResponse } = await this.client.post(
      "/platform/serverlist/getAppAd",
      encryptRequestContent({ code })
    );
    return data;
  },

  async login(token: string): Promise<LoginResponse> {
    const session = sessionController.getSession(token);
    const { data }: { data: LoginResponse } = await this.client.post(
      "/platform/login/login",
      encryptRequestContent({
        code: session.code,
        latitude: "null",
        loginWay: "2",
        longitude: "null",
        password: "",
        phoneNumber: "",
        token: session.token,
      })
    );
    session.setDetailInfo({
      campusId: data.campusId,
      stuNumber: data.stuNumber,
      schoolId: data.schoolId,
      phoneNumber: data.phoneNumber,
    });
    return data;
  },

  async getAppSlogan(token: string): Promise<GetAppSloganResponse> {
    const session = sessionController.getSession(token);
    const { data } = await this.client.post(
      "/platform/serverlist/getAppSlogan",
      encryptRequestContent(session.getBasicRequest())
    );
    return data;
  },

  async getAppFrontPage(token: string): Promise<GetAppFrontPageResponse> {
    const session = sessionController.getSession(token);
    const { data } = await this.client.post(
      "/platform/login/getAppFrontPage",
      encryptRequestContent(session.getBasicRequest())
    );
    return data;
  },

  async updateAppVersion(token: string): Promise<UpdateAppVersionResponse> {
    const session = sessionController.getSession(token);
    const req: UpdateAppVersionRequest &
      Record<string, string | number | null> = {
      campusId: session.campusId,
      schoolId: session.schoolId,
      token: session.token,
      version: "2.0.3",
      deviceType: "1",
      stuNo: session.stuNumber,
    };
    const { data } = await this.client.post(
      "/platform/serverlist/updateAppVersion",
      encryptRequestContent(req)
    );
    return data;
  },

  async getAppNotice(token: string): Promise<GetAppNoticeResponse> {
    const session = sessionController.getSession(token);
    const { data } = await this.client.post(
      "/platform/serverlist/getAppNotice",
      encryptRequestContent(session.getBasicRequest())
    );
    return data;
  },

  async getSunRunPaper(token: string): Promise<GetSunRunPaperResponse> {
    const session = sessionController.getSession(token);
    const { data }: { data: GetSunRunPaperResponse } = await this.client.post(
      "/sunrun/getSunrunPaper",
      encryptRequestContent(session.getBasicRequest())
    );
    return data;
  },

  async getRunBegin(token: string) {
    const session = sessionController.getSession(token);
    const { data }: { data: GetRunBeginResponse } = await this.client.post(
      "/sunrun/getRunBegin",
      encryptRequestContent(session.getBasicRequest())
    );
    return data;
  },

  async sunRunExercises(
    route: Route,
    token: string
  ): Promise<SunRunExercisesResponse> {
    const session = sessionController.getSession(token);
    const req: SunRunExercisesRequest & Record<string, unknown> =
      await generateSunRunExercisesReq({
        ...session.getBasicRequest(),
        ...route,
        phoneNumber: session.phoneNumber,
      });
    const { data }: { data: SunRunExercisesResponse } = await this.client.post(
      "/platform/recrecord/sunRunExercises",
      encryptRequestContent(req)
    );
    return data;
  },

  async sunRunExercisesDetail({
    pointList,
    scantronId,
    token,
  }: {
    pointList: Point[];
    scantronId: string;
    token: string;
  }) {
    const session = sessionController.getSession(token);
    const req: SunRunExercisesDetailRequest = {
      faceData: "",
      pointList,
      scantronId,
      stuNumber: session.stuNumber,
      token: session.token,
    };
    const { data }: { data: SunRunExercisesDetailResponse } =
      await this.client.post("/platform/recrecord/sunRunExercisesDetail", req);
    return data;
  },

  async getSchoolTerm(token: string): Promise<GetSchoolTermResponse> {
    const session = sessionController.getSession(token);
    const req: GetSchoolTermRequest & Record<string, string | number | null> = {
      schoolId: session.schoolId,
      token: session.token,
    };
    const { data }: { data: GetSchoolTermResponse } = await this.client.post(
      "/platform/course/getSchoolTerm",
      encryptRequestContent(req)
    );
    return data;
  },

  async getSchoolMonthByTerm(
    termId: string,
    token: string
  ): Promise<GetSchoolMonthByTermResponse> {
    const session = sessionController.getSession(token);
    const req: GetSchoolMonthByTermRequest &
      Record<string, string | number | null> = {
      schoolId: session.schoolId,
      stuNumber: session.stuNumber,
      token: session.token,
      termId,
    };
    const { data } = await this.client.post(
      "/platform/course/getSchoolMonthByTerm",
      encryptRequestContent(req)
    );
    return data;
  },

  async getSunRunArch(
    monthId: string,
    termId: string,
    token: string
  ): Promise<GetSunRunArchResponse> {
    const session = sessionController.getSession(token);
    const req: GetSunRunArchRequest & Record<string, string | number | null> = {
      ...session.getBasicRequest(),
      runType: "0",
      monthId,
      termId,
    };
    const { data } = await this.client.post(
      "/sunrun/getSunrunArch",
      encryptRequestContent(req)
    );
    return data;
  },

  async getSunRunArchDetail(
    scoreId: string,
    token: string
  ): Promise<GetSunRunArchDetailResponse> {
    const session = sessionController.getSession(token);
    const req: GetSunRunArchDetailRequest & Record<string, string> = {
      scoreId,
      token: session.token,
    };
    const { data } = await this.client.post(
      "/sunrun/getSunrunArchDetail",
      encryptRequestContent(req)
    );
    return data;
  },
};

export default TotoroApiWrapper;
