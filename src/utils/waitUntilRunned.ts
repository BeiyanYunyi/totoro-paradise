/* eslint-disable no-console */
import { format } from 'date-fns';
import wait from './wait';

const waitUntilRunned = async (targetDate: Date) => {
  console.log(`请等到${format(targetDate, 'HH:mm:ss')}`);
  const targetDateNum = Number(targetDate);
  const now = Date.now();
  const waitms = targetDateNum - now;
  await wait(waitms);
};

export default waitUntilRunned;
