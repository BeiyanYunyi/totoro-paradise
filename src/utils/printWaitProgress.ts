/* eslint-disable no-console */
import { format } from "date-fns";
import argv from "./argv";
import progressBar from "./progressBar";

const printWaitProgress = (targetDate: Date, status: string): Promise<void> =>
  new Promise((resolve) => {
    console.log(`请等到${format(targetDate, "HH:mm:ss")}`);
    const targetDateNum = Number(targetDate);
    const startDateNum = Date.now();
    const waitms = targetDateNum - startDateNum;
    if (!argv.server) progressBar.start(100, 0, { status });
    const timeInterval = setInterval(() => {
      const dateNowNum = Date.now();
      const timeLeft = targetDateNum - dateNowNum;
      const timePassed = dateNowNum - startDateNum;
      // 你括号好多 ((((((()))))))
      if (!argv.server) progressBar.update((timePassed / waitms) * 100);
      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        resolve();
      }
    }, 200);
  });

export default printWaitProgress;
