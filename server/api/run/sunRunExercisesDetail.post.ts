import type { Point } from '~~/src/types/RunPoint';
import type BasicRequest from '~~/src/types/requestTypes/BasicRequest';
import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  try {
    const body = await readBody<{ pointList: Point[]; scantronId: string; breq: BasicRequest }>(
      e,
    );
    const res = await TotoroApiWrapper.sunRunExercisesDetail(body);
    return res;
  } catch (e) {
    return { message: (e as Error).message };
  }
});
