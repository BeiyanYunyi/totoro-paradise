import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  const { token }: { token: string } = e.context.params;
  try {
    const paper = await TotoroApiWrapper.getSunRunPaper(decodeURIComponent(token));
    if (paper.ifHasRun === '0') {
      return {
        message: '登录成功',
        paper,
      };
    } else {
      return {
        message: '你已经跑过了',
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: '龙猫服务器错误',
    };
  }
});
