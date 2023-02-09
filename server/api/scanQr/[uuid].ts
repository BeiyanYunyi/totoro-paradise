import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  let code: string;
  try {
    const scanResult = await $fetch<string>(
      `https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=${e.context.params!.uuid}&f=url`,
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
    await TotoroApiWrapper.getRegisterUrl();
    const loginPromise = TotoroApiWrapper.getLesseeServer(code);
    const getAppAdPromise = TotoroApiWrapper.getAppAd(code);
    const loginResult = (await Promise.all([loginPromise, getAppAdPromise]))[0];
    if (!loginResult.token) {
      return {
        message: loginResult.message!,
      };
    }
    return {
      message: '登录成功',
      session: {
        ...(await TotoroApiWrapper.login({ token: loginResult.token, code })),
        token: loginResult.token,
        code,
        data: null,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      message: '龙猫服务器错误',
    };
  }
});
