/** 按正态分布生成随机数
 * @param mean 平均值
 * @param std 标准差
 */
const normalRandom = (mean: number, std: number) => {
  let u = 0.0;
  let v = 0.0;
  let w = 0.0;
  let c = 0.0;
  let result = mean + u * c * std;
  do {
    u = Math.random() * 2 - 1.0;
    v = Math.random() * 2 - 1.0;
    w = u * u + v * v;
    c = Math.sqrt((-2 * Math.log(w)) / w);
    result = mean + u * c * std;
  } while (w === 0 || w >= 1.0 || result < mean - 3 * std || result > mean + 3 * std);
  return result;
};

export default normalRandom;
