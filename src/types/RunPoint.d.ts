export interface Point {
  longitude: string;
  latitude: string;
}

export default interface RunPoint {
  taskId: string;
  pointId: string;
  pointName: string;
  longitude: string;
  latitude: string;
  pointList: Point[];
}
