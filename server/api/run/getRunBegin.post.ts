import type BasicRequest from '~~/src/types/requestTypes/BasicRequest';
import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  try {
    const body = await readBody<BasicRequest>(e);
    const res = await TotoroApiWrapper.getRunBegin(body);
    return res;
  } catch (e) {
    return { message: (e as Error).message };
  }
});
