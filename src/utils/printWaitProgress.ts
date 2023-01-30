/* eslint-disable no-console */
import { format } from 'date-fns';

const printWaitProgress = (targetDate: Date, status: string): Promise<void> =>
  new Promise((resolve) => {
    console.log(`请等到${format(targetDate, 'HH:mm:ss')}`);
    const targetDateNum = Number(targetDate);
    const now = Date.now();
    const waitms = targetDateNum - now;
    setTimeout(() => {
      resolve();
    }, waitms);
    // const startDateNum = Date.now();
    // const waitms = targetDateNum - startDateNum;
    //if (!argv.server) progressBar.start(100, 0, { status });
    /*
    const timeInterval = setInterval(() => {
      const dateNowNum = Date.now();
      const timeLeft = targetDateNum - dateNowNum;
      // const timePassed = dateNowNum - startDateNum;
      // 你括号好多 ((((((()))))))
      //if (!argv.server) progressBar.update((timePassed / waitms) * 100);
      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        resolve();
      }
    }, 1000);
    */
  });

export default printWaitProgress;
