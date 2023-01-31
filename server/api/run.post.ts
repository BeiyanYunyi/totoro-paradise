import runController from '~~/src/controllers/runController';
import RunPoint from '~~/src/types/RunPoint';
import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  const body = await readBody<{ token: string; mileage: string; route: RunPoint }>(e);
  runController(body.token, body.mileage, body.route);
  return {
    message: `已经开始在 ${body.route.pointName} 跑步`,
  };
});
