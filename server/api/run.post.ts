import runController from '~~/src/controllers/runController';
import { PhoneRequest } from '~~/src/types/requestTypes/BasicRequest';
import RunPoint from '~~/src/types/RunPoint';

export default defineEventHandler(async (e) => {
  const body = await readBody<{ phoneReq: PhoneRequest; mileage: string; route: RunPoint }>(e);
  runController(body.phoneReq, body.mileage, body.route);
  return {
    message: `已经开始在 ${body.route.pointName} 跑步`,
  };
});
