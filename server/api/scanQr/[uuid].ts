import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  let code: string;
  try {
    const scanResult = await $fetch<string>(
      `https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=${e.context.params.uuid}&f=url`,
    );
    const reg = new RegExp(/:\/\/oauth\?code=(\w+)&/);
    const res = reg.exec(scanResult);
    if (res === null) throw new Error('no code');
    code = res[1];
  } catch (e) {
    console.log(e);
    return {
      message: '扫码失败',
    };
  }
  try {
    const loginResult = await TotoroApiWrapper.getLesseeServer(code);
    if (!loginResult.token) {
      return {
        message: loginResult.message,
      };
    }
    // 获取额外信息
    const personalInfo = await TotoroApiWrapper.login(loginResult.token);
    const paper = await TotoroApiWrapper.getSunRunPaper(loginResult.token);
    if (paper.ifHasRun === '0') {
      return {
        message: '登录成功',
        token: loginResult.token,
        routes: paper.runPointList.map((it) => ({
          value: it.pointId,
          label: it.pointName,
        })),
      };
    } else {
      return {
        message: '你已经跑过了',
      };
    }
  } catch (e) {
    console.log(e);
    return {
      message: '龙猫服务器错误',
    };
  }
});
