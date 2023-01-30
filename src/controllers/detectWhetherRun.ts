import { format } from "date-fns";
import TotoroApiWrapper from "../wrappers/TotoroApiWrapper";

const detectWhetherRun = async (token: string) => {
  const getSchoolTermRes = await TotoroApiWrapper.getSchoolTerm(token);
  const currentTerm = getSchoolTermRes.data.find(
    (term) => term.isCurrent === "1"
  );
  if (!currentTerm) throw new Error("无学期数据");
  const getSchoolMonthByTermRes = await TotoroApiWrapper.getSchoolMonthByTerm(
    currentTerm.termId,
    token
  );
  const currentMonth = getSchoolMonthByTermRes.monthList.find(
    (month) => month.ifCurrent === "1"
  );
  if (!currentMonth) throw new Error("无学期数据");
  const getSunRunArchRes = await TotoroApiWrapper.getSunRunArch(
    currentMonth.monthId,
    currentTerm.termId,
    token
  );
  const currentyyyyMMdd = format(new Date(), "yyyy-MM-dd");
  const todayRun = getSunRunArchRes.data.findIndex(
    (run) => run.runTime === currentyyyyMMdd
  );
  if (todayRun === -1) return false;
  return getSunRunArchRes.data[todayRun].scoreId;
};

export default detectWhetherRun;
