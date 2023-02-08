import TotoroApiWrapper from '~~/src/wrappers/TotoroApiWrapper';

export default defineEventHandler(async (e) => {
  let code: string;
  try {
    const scanResult = await $fetch<string>(
      `https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=${e.context.params.uuid}&f=url`,
    );
    console.log('scanned');
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
    TotoroApiWrapper.getAppAd(code);
    const loginResult = await loginPromise;
    if (!loginResult.token) {
      return {
        message: loginResult.message!,
      };
    }
    // 获取额外信息
    const personalInfo = await TotoroApiWrapper.login({ token: loginResult.token, code });
    return {
      message: '登录成功',
      session: { ...personalInfo, token: loginResult.token, code, data: null },
    };
  } catch (e) {
    console.log(e);
    return {
      message: '龙猫服务器错误',
    };
  }
});
