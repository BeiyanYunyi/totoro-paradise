/** Promisified setTimeout function.
  @param {number} ms */
const wait = (ms: number): Promise<void> =>
   
  new Promise((resolve) => setTimeout(resolve, ms));
export default wait;
