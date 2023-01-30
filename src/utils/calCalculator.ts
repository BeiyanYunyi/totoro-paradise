/** @param {string} distance 里程数，单位为千米，字符串 */
const calCalculator = (distance: string) => {
  const distanceNum = Number(distance);
  // 别问题 67.34 是哪来的，这是龙猫自己使用的魔法数字
  return Math.floor(67.34 * distanceNum).toString();
};

export default calCalculator;
