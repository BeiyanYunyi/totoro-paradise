 
import { format, intervalToDuration } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import type SunRunExercisesRequest from '../types/requestTypes/SunRunExercisesRequest';
import calCalculator from '../utils/calCalculator';
import generateMac from '../utils/generateMac';
import normalRandom from '../utils/normalRandom';
import timeUtil from '../utils/timeUtil';

/** @param minTime 最短用时，以分钟计
 *  @param maxTime 最长用时，以分钟计
 */
const generateRunReq = ({
  distance,
  routeId,
  taskId,
  token,
  schoolId,
  stuNumber,
  phoneNumber,
  minTime,
  maxTime,
}: {
  distance: string;
  routeId: string;
  taskId: string;
  token: string;
  schoolId: string;
  stuNumber: string;
  phoneNumber: string;
  minTime: string;
  maxTime: string;
}) => {
  const { minSecond, maxSecond } = {
    minSecond: Number(minTime) * 60,
    maxSecond: Number(maxTime) * 60,
  };
  const avgSecond = minSecond + maxSecond / 2;
  /** 正态分布，以最短和最长用时的平均值为平均值，以 1/2 区间的 1/3 为标准差 */
  const waitSecond = Math.floor(normalRandom(minSecond + maxSecond / 2, (maxSecond - avgSecond) / 3));
  const startTime = new Date();
  const endTime = new Date(Number(startTime) + waitSecond * 1000);
  const distanceNum = Number(distance);
  const avgSpeed = (distanceNum / (waitSecond / 3600)).toFixed(2);
  const duration = intervalToDuration({ start: startTime, end: endTime });
  const mac = generateMac(stuNumber);
  const req: SunRunExercisesRequest = {
    LocalSubmitReason: '',
    avgSpeed,
    baseStation: 'mcc:0 mnc:0 lac:false ci:false strength:0',
    consume: calCalculator(distance),
    endTime: format(endTime, 'HH:mm:ss'),
    evaluateDate: '',
    fitDegree: '1',
    flag: '1',
    headImage: '',
    ifLocalSubmit: '0',
    km: distance,
    mac,
    phoneInfo: 'CN001/null/unknown/unknown/10',
    phoneNumber,
    pointList: [],
    routeId,
    runType: '0',
    schoolId,
    sensorString: '',
    startTime: format(startTime, 'HH:mm:ss'),
    steps: `${1000 + Math.floor(Math.random() * 1000)}`,
    stuNumber,
    submitDate: format(endTime, 'yyyy-MM-dd'),
    taskId,
    token,
    usedTime: timeUtil.getHHmmss(duration),
    uuid: uuidv4(),
    version: '2.0.4',
    warnFlag: '0',
    warnType: '',
  };
  return { req, endTime };
};

export default generateRunReq;
