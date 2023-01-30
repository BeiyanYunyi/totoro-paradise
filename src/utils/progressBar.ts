import cliProgress from "cli-progress";

/** 定义了进度条类的一个实例，然后导出 */
const progressBar = new cliProgress.SingleBar({
  format: "进度：{bar} | {percentage}% || 还剩: {eta}s || 当前: {status}",
  barCompleteChar: "█",
  barIncompleteChar: "░",
  hideCursor: true,
});

export default progressBar;
