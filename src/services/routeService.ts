import axios from "axios";
import { NAVER_API_KEY, NAVER_API_KEY_ID } from "@env";
import { Coordinate } from "@types/map";

export const fetchRoute = async (
  origin: Coordinate,
  destination: Coordinate
) => {
  const url = "https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving";
  const params = {
    start: `${origin.longitude},${origin.latitude}`,
    goal: `${destination.longitude},${destination.latitude}`,
    option: "trafast",
  };

  const headers = {
    "X-NCP-APIGW-API-KEY-ID": NAVER_API_KEY_ID,
    "X-NCP-APIGW-API-KEY": NAVER_API_KEY,
  };

  try {
    const response = await axios.get(url, { params, headers });

    if (response.data.code === 0) {
      const path = response.data.route.trafast[0].path;
      return path.map((point: number[]) => ({
        latitude: point[1],
        longitude: point[0],
      }));
    } else {
      throw new Error(`API returned code: ${response.data.code}`);
    }
  } catch (error) {
    // alert("경로를 가져오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
    console.error("Error fetching route:", error);
    throw error;
  }
};
