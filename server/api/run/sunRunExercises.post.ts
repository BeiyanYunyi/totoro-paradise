import type SunRunExercisesRequest from '~~/src/types/requestTypes/SunRunExercisesRequest';
import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  try {
    const body = await readBody<SunRunExercisesRequest>(e);
    const res = await TotoroApiWrapper.sunRunExercises(body);
    return res;
  } catch (e) {
    return { message: (e as Error).message };
  }
});
