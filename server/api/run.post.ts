import runController from '~~/src/controllers/runController';
import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  const body = await readBody<{ token: string; route: string }>(e);
  const paper = await TotoroApiWrapper.getSunRunPaper(body.token);
  runController(body.token, paper, body.route);
  return {
    message: `已经开始在 ${
      paper.runPointList.find((it) => it.pointId === body.route)!.pointName
    } 跑步`,
  };
});
