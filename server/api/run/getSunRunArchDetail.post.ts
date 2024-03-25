import type BasicRequest from '~~/src/types/requestTypes/BasicRequest';
import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  try {
    const body = await readBody<{ scantronId: string; basicReq: BasicRequest }>(e);
    const res = await TotoroApiWrapper.getSunRunArchDetail(body.scantronId, body.basicReq);
    return res;
  } catch (e) {
    return { message: (e as Error).message };
  }
});
