export default function calculateCoordinatesAtDistance(
  startLat: number,
  startLng: number,
  distanceInMinutes: number,
  speedKmPerHour: number = 30
): { latitude: number; longitude: number } {
  // 지구의 반지름 (km)
  const earthRadius = 6371;

  // 시간을 시간 단위로 변환
  const timeInHours = distanceInMinutes / 60;

  // 거리 계산 (km)
  const distance = speedKmPerHour * timeInHours;

  // 위도 1도의 거리 (약 111km)
  const latDegreeDistance = 111;

  // 경도 1도의 거리 (위도에 따라 다름)
  const lngDegreeDistance = 111 * Math.cos(startLat * (Math.PI / 180));

  // 임의의 방향 선택 (0 ~ 2π)
  const randomDirection = Math.random() * 2 * Math.PI;

  // 위도와 경도의 변화 계산
  const latChange = (distance * Math.cos(randomDirection)) / latDegreeDistance;
  const lngChange = (distance * Math.sin(randomDirection)) / lngDegreeDistance;

  // 새로운 좌표 계산
  const newLat = startLat + latChange;
  const newLng = startLng + lngChange;

  return { latitude: newLat, longitude: newLng };
}
