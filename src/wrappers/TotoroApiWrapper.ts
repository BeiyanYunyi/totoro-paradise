import axios from 'axios';
import type { Point } from '../types/RunPoint';
import type BasicRequest from '../types/requestTypes/BasicRequest';
import type GetSchoolMonthByTermRequest from '../types/requestTypes/GetSchoolMonthByTermRequest';
import type GetSchoolTermRequest from '../types/requestTypes/GetSchoolTermRequest';
import type GetSunRunArchDetailRequest from '../types/requestTypes/GetSunRunArchDetailRequest';
import type GetSunRunArchRequest from '../types/requestTypes/GetSunRunArchRequest';
import type SunRunExercisesDetailRequest from '../types/requestTypes/SunRunExercisesDetailRequest';
import type SunRunExercisesRequest from '../types/requestTypes/SunRunExercisesRequest';
import type UpdateAppVersionRequest from '../types/requestTypes/UpdateAppVersionRequest';
import type GetAppAdResponse from '../types/responseTypes/GetAppAdResponse';
import type GetAppFrontPageResponse from '../types/responseTypes/GetAppFrontPageResponse';
import type GetAppNoticeResponse from '../types/responseTypes/GetAppNoticeResponse';
import type GetAppSloganResponse from '../types/responseTypes/GetAppSloganResponse';
import type GetLesseeServerResponse from '../types/responseTypes/GetLesseeServerResponse';
import type GetRegisterUrlResponse from '../types/responseTypes/GetRegisterUrlResponse';
import type GetRunBeginResponse from '../types/responseTypes/GetRunBeginResponse';
import type GetSchoolMonthByTermResponse from '../types/responseTypes/GetSchoolMonthByTermResponse';
import type GetSchoolTermResponse from '../types/responseTypes/GetSchoolTermResponse';
import type GetSunRunArchDetailResponse from '../types/responseTypes/GetSunRunArchDetailResponse';
import type GetSunRunArchResponse from '../types/responseTypes/GetSunRunArchResponse';
import type GetSunRunPaperResponse from '../types/responseTypes/GetSunRunPaperResponse';
import type LoginResponse from '../types/responseTypes/LoginResponse';
import type SunRunExercisesDetailResponse from '../types/responseTypes/SunRunExercisesDetailResponse';
import type SunRunExercisesResponse from '../types/responseTypes/SunRunExercisesResponse';
import type UpdateAppVersionResponse from '../types/responseTypes/UpdateAppVersionResponse';
import encryptRequestContent from '../utils/encryptRequestContent';

const TotoroApiWrapper = {
  client: axios.create({
    baseURL: 'https://app.xtotoro.com/app',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // "Content-Length": "0",
      Host: 'app.xtotoro.com',
      Connection: 'Keep-Alive',
      'Accept-Encoding': 'gzip',
      'User-Agent': 'okhttp/4.9.0',
    },
  }),

  async getRegisterUrl(): Promise<GetRegisterUrlResponse> {
    const { data } = await this.client.post('/platform/serverlist/getRegisterUrl');
    return data;
  },

  async getLesseeServer(code: string): Promise<GetLesseeServerResponse> {
    const { data }: { data: GetLesseeServerResponse } = await this.client.post(
      '/platform/serverlist/getLesseeServer',
      encryptRequestContent({ code }),
    );
    return data;
  },

  async getAppAd(code: string) {
    const { data }: { data: GetAppAdResponse } = await this.client.post(
      '/platform/serverlist/getAppAd',
      encryptRequestContent({ code }),
    );
    return data;
  },

  async login({ token, code }: { token: string; code: string }): Promise<LoginResponse> {
    const { data }: { data: LoginResponse } = await this.client.post(
      '/platform/login/login',
      encryptRequestContent({
        code,
        latitude: 'null',
        loginWay: '2',
        longitude: 'null',
        password: '',
        phoneNumber: '',
        token,
      }),
    );
    return data;
  },

  async getAppSlogan(req: BasicRequest): Promise<GetAppSloganResponse> {
    const { data } = await this.client.post(
      '/platform/serverlist/getAppSlogan',
      encryptRequestContent(req),
    );
    return data;
  },

  async getAppFrontPage(req: BasicRequest): Promise<GetAppFrontPageResponse> {
    const { data } = await this.client.post(
      '/platform/login/getAppFrontPage',
      encryptRequestContent(req),
    );
    return data;
  },

  async updateAppVersion(breq: BasicRequest): Promise<UpdateAppVersionResponse> {
    const req: UpdateAppVersionRequest & Record<string, string | number | null> = {
      campusId: breq.campusId,
      schoolId: breq.schoolId,
      token: breq.token,
      version: '2.0.4',
      deviceType: '1',
      stuNo: breq.stuNumber,
    };
    const { data } = await this.client.post(
      '/platform/serverlist/updateAppVersion',
      encryptRequestContent(req),
    );
    return data;
  },

  async getAppNotice(req: BasicRequest): Promise<GetAppNoticeResponse> {
    const { data } = await this.client.post(
      '/platform/serverlist/getAppNotice',
      encryptRequestContent(req),
    );
    return data;
  },

  async getSunRunPaper(req: BasicRequest): Promise<GetSunRunPaperResponse> {
    const { data }: { data: GetSunRunPaperResponse } = await this.client.post(
      '/sunrun/getSunrunPaper',
      encryptRequestContent(req),
    );
    return data;
  },

  async getRunBegin(req: BasicRequest) {
    const { data }: { data: GetRunBeginResponse } = await this.client.post(
      '/sunrun/getRunBegin',
      encryptRequestContent(req),
    );
    return data;
  },

  async sunRunExercises(req: SunRunExercisesRequest): Promise<SunRunExercisesResponse> {
    const { data }: { data: SunRunExercisesResponse } = await this.client.post(
      '/platform/recrecord/sunRunExercises',
      encryptRequestContent(req),
    );
    return data;
  },

  async sunRunExercisesDetail({
    pointList,
    scantronId,
    breq,
  }: {
    pointList: Point[];
    scantronId: string;
    breq: BasicRequest;
  }) {
    const req: SunRunExercisesDetailRequest = {
      faceData: '',
      pointList,
      scantronId,
      stuNumber: breq.stuNumber,
      token: breq.token,
    };
    const { data }: { data: SunRunExercisesDetailResponse } = await this.client.post(
      '/platform/recrecord/sunRunExercisesDetail',
      req,
    );
    return data;
  },

  async getSchoolTerm(breq: BasicRequest): Promise<GetSchoolTermResponse> {
    const req: GetSchoolTermRequest & Record<string, string | number | null> = {
      schoolId: breq.schoolId,
      token: breq.token,
    };
    const { data }: { data: GetSchoolTermResponse } = await this.client.post(
      '/platform/course/getSchoolTerm',
      encryptRequestContent(req),
    );
    return data;
  },

  async getSchoolMonthByTerm(
    termId: string,
    breq: BasicRequest,
  ): Promise<GetSchoolMonthByTermResponse> {
    const req: GetSchoolMonthByTermRequest & Record<string, string | number | null> = {
      schoolId: breq.schoolId,
      stuNumber: breq.stuNumber,
      token: breq.token,
      termId,
    };
    const { data } = await this.client.post(
      '/platform/course/getSchoolMonthByTerm',
      encryptRequestContent(req),
    );
    return data;
  },

  async getSunRunArch(
    monthId: string,
    termId: string,
    breq: BasicRequest,
  ): Promise<GetSunRunArchResponse> {
    const req: GetSunRunArchRequest & Record<string, string | number | null> = {
      ...breq,
      runType: '0',
      monthId,
      termId,
    };
    const { data } = await this.client.post('/sunrun/getSunrunArch', encryptRequestContent(req));
    return data;
  },

  async getSunRunArchDetail(
    scoreId: string,
    breq: BasicRequest,
  ): Promise<GetSunRunArchDetailResponse> {
    const req: GetSunRunArchDetailRequest & Record<string, string> = {
      scoreId,
      token: breq.token,
    };
    const { data } = await this.client.post(
      '/sunrun/getSunrunArchDetail',
      encryptRequestContent(req),
    );
    return data;
  },
};

export default TotoroApiWrapper;
