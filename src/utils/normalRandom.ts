/** 按正态分布生成随机数
 * @param mean 平均值
 * @param std 标准差
 */
const normalRandom = (mean: number, std: number) => {
  let u = 0.0;
  let v = 0.0;
  let w = 0.0;
  let c = 0.0;
  do {
    u = Math.random() * 2 - 1.0;
    v = Math.random() * 2 - 1.0;
    w = u * u + v * v;
  } while (w === 0 || w >= 1.0);
  c = Math.sqrt((-2 * Math.log(w)) / w);
  return mean + u * c * std;
};

export default normalRandom;
