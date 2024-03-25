import type { Point } from "./RunPoint";

export default interface Route {
  mockRoute: Point[];
  distance: string;
  routeId: string;
  taskId: string;
}
