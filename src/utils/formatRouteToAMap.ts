export const formatPointToAMap = (point: {
  longitude: string;
  latitude: string;
}): [number, number] => [Number(point.longitude), Number(point.latitude)];

const formatRouteToAMap = (route: { longitude: string; latitude: string }[]) =>
  route.map((point) => formatPointToAMap(point));

export default formatRouteToAMap;
