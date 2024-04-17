import ky from 'ky';
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
  client: ky.create({
    prefixUrl: '/api/totoro',
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // "Content-Length": "0",
      Host: 'app.xtotoro.com',
      Connection: 'Keep-Alive',
      'Accept-Encoding': 'gzip',
      'User-Agent': 'okhttp/4.9.0',
    },
  }),

  async getRegisterUrl() {
    return this.client.post('platform/serverlist/getRegisterUrl').json<GetRegisterUrlResponse>();
  },

  async getLesseeServer(code: string) {
    return this.client
      .post('platform/serverlist/getLesseeServer', {
        body: encryptRequestContent({ code }),
      })
      .json<GetLesseeServerResponse>();
  },

  async getAppAd(code: string) {
    return this.client
      .post('platform/serverlist/getAppAd', {
        body: encryptRequestContent({ code }),
      })
      .json<GetAppAdResponse>();
  },

  async login({ token }: { token: string }) {
    return this.client
      .post('platform/login/login', {
        body: encryptRequestContent({
          code: '',
          latitude: '',
          loginWay: '',
          longitude: '',
          password: '',
          phoneNumber: '',
          token,
        }),
      })
      .json<LoginResponse>();
  },

  async getAppSlogan(req: BasicRequest): Promise<GetAppSloganResponse> {
    return this.client
      .post('platform/serverlist/getAppSlogan', {
        body: encryptRequestContent(req),
      })
      .json();
  },

  async getAppFrontPage(req: BasicRequest): Promise<GetAppFrontPageResponse> {
    return this.client
      .post('platform/login/getAppFrontPage', {
        body: encryptRequestContent(req),
      })
      .json();
  },

  async updateAppVersion(breq: BasicRequest): Promise<UpdateAppVersionResponse> {
    const req: UpdateAppVersionRequest & Record<string, string | number | null> = {
      campusId: breq.campusId,
      schoolId: breq.schoolId,
      token: breq.token,
      version: '1.2.14',
      deviceType: '2',
      stuNumber: breq.stuNumber,
    };
    return this.client
      .post('platform/serverlist/updateAppVersion', {
        body: encryptRequestContent(req),
      })
      .json();
  },

  async getAppNotice(req: BasicRequest): Promise<GetAppNoticeResponse> {
    return this.client
      .post('platform/serverlist/getAppNotice', {
        body: encryptRequestContent({ ...req, version: '' }),
      })
      .json();
  },

  async getSunRunPaper(req: BasicRequest): Promise<GetSunRunPaperResponse> {
    return this.client.post('sunrun/getSunrunPaper', { body: encryptRequestContent(req) }).json();
  },

  async getRunBegin(req: BasicRequest) {
    return await this.client
      .post('sunrun/getRunBegin', {
        body: encryptRequestContent(req),
      })
      .json<GetRunBeginResponse>();
  },

  async sunRunExercises(req: SunRunExercisesRequest): Promise<SunRunExercisesResponse> {
    return this.client
      .post('platform/recrecord/sunRunExercises', {
        body: encryptRequestContent(req),
      })
      .json();
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
      pointList,
      scantronId,
      stuNumber: breq.stuNumber,
      token: breq.token,
    };
    return this.client
      .post('platform/recrecord/sunRunExercisesDetail', { json: req })
      .json<SunRunExercisesDetailResponse>();
  },

  async getSchoolTerm(breq: BasicRequest): Promise<GetSchoolTermResponse> {
    const req: GetSchoolTermRequest & Record<string, string | number | null> = {
      schoolId: breq.schoolId,
      token: breq.token,
    };
    return this.client
      .post('platform/course/getSchoolTerm', { body: encryptRequestContent(req) })
      .json();
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
    return this.client
      .post('platform/course/getSchoolMonthByTerm', {
        body: encryptRequestContent(req),
      })
      .json();
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
    return this.client
      .post('sunrun/getSunrunArch', {
        body: encryptRequestContent(req),
      })
      .json();
  },

  async getSunRunArchDetail(
    scoreId: string,
    breq: BasicRequest,
  ): Promise<GetSunRunArchDetailResponse> {
    const req: GetSunRunArchDetailRequest & Record<string, string> = {
      scoreId,
      token: breq.token,
    };
    return this.client
      .post('sunrun/getSunrunArchDetail', {
        body: encryptRequestContent(req),
      })
      .json();
  },
};

export default TotoroApiWrapper;
