/* eslint-disable no-console */
import { PhoneRequest } from '../types/requestTypes/BasicRequest';
import RunPoint from '../types/RunPoint';
import argv from '../utils/argv';
import generateRoute from '../utils/generateRoute';
import normalRandom from '../utils/normalRandom';
import wait from '../utils/wait';
import TotoroApiWrapper from '../wrappers/TotoroApiWrapper';

const runController = async (phoneReq: PhoneRequest, mileage: string, runPoint: RunPoint) => {
  const { phoneNumber, ...rest } = phoneReq;
  if (!argv.server) {
    const waitms = normalRandom(5000, 1000);
    console.log(`你有 ${Math.floor(waitms / 1000)} 秒时间核对有无异常`);
    await wait(waitms);
  }

  await TotoroApiWrapper.getRunBegin(rest);
  const route = generateRoute(mileage, runPoint);
  const sunRunRes = await TotoroApiWrapper.sunRunExercises(
    {
      ...route,
      routeId: runPoint.pointId,
      taskId: runPoint.taskId,
    },
    phoneReq,
  );
  if (!argv.server) console.log(sunRunRes);
  const sunRunDetailRes = await TotoroApiWrapper.sunRunExercisesDetail({
    pointList: route.mockRoute,
    scantronId: sunRunRes.scantronId,
    breq: rest,
  });
  if (!argv.server) console.log(sunRunDetailRes);
  await wait(Math.abs(normalRandom(0, 500)));
  const sunRunArchDetailRes = await TotoroApiWrapper.getSunRunArchDetail(
    sunRunRes.scantronId,
    rest,
  );
  if (sunRunArchDetailRes.flag === '1') {
    console.log('艹猫成功');
  } else {
    console.log('艹猫失败');
  }
};

export default runController;
