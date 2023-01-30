const formatNumber = (num: number | undefined) => {
  if (!num) return "00";
  if (num >= 0 && num <= 9) return `0${num.toString()}`;
  return num.toString();
};

const getHHmmss = (duration: Duration) => {
  const { hours, minutes, seconds } = duration;
  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
    seconds
  )}`;
};

export default { getHHmmss };
