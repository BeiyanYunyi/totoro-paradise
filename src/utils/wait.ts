/** Promisified setTimeout function.
 * @param {number} ms */
const wait = (ms: number): Promise<void> =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, ms));
export default wait;
