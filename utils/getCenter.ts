import type RunPoint from '~~/src/types/RunPoint';

/** 从跑步路径找出地图中心点 */
const getCenter = (points: RunPoint[]) => {
  let lon = 0;
  let lat = 0;
  points.forEach((point) => {
    lon += Number(point.longitude);
    lat += Number(point.latitude);
  });
  lon /= points.length;
  lat /= points.length;
  return { lon, lat };
};

export default getCenter;
