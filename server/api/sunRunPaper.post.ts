import type BasicRequest from '~~/src/types/requestTypes/BasicRequest';
import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  const body = await readBody<BasicRequest>(e);
  try {
    const paper = await TotoroApiWrapper.getSunRunPaper(body);
    if (paper.ifHasRun === '0') {
      return {
        message: '登录成功',
        paper,
      };
    } else {
      return {
        message: '你已经跑过了',
        paper: null,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: '龙猫服务器错误',
      paper: null,
    };
  }
});
