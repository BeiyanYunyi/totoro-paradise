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
    return { message: null, code: res[1] }; //code
  } catch (e) {
    console.log(e);
    return {
      message: '扫码失败',
      code: null,
    };
  }
});
