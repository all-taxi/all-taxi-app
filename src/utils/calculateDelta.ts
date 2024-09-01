import { Coordinate } from "@types/map";

// 현위치와 목적지 좌표를 기준으로 화면에 보일 배율 설정
export const calculateDelta = (origin: Coordinate, destination: Coordinate) => {
  const latDelta = Math.abs(origin.latitude - destination.latitude) + 0.4;
  const lngDelta = Math.abs(origin.longitude - destination.longitude) + 0.4;
  return { latitudeDelta: latDelta, longitudeDelta: lngDelta };
};
