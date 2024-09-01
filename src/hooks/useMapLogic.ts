import { useState, useEffect } from "react";
import { useLocationStore } from "@states/locationStore";
import { fetchRoute } from "@services/routeService";
import { Coordinate } from "@types/map";
import { calculateDelta } from "@utils/calculateDelta";

export const useMapLogic = (x?: string, y?: string) => {
  const location = useLocationStore.getState().location;
  const [routeCoordinates, setRouteCoordinates] = useState<Coordinate[]>([]);
  const [origin, setOrigin] = useState<Coordinate>({
    latitude: location?.coords?.latitude ?? 37.5665,
    longitude: location?.coords?.longitude ?? 126.978,
  });
  const [destination, setDestination] = useState<Coordinate>({
    latitude: y ? Number(y) : 0,
    longitude: x ? Number(x) : 0,
  });

  useEffect(() => {
    if (x && y) {
      setDestination({
        latitude: Number(y),
        longitude: Number(x),
      });
      fetchRouteData();
    }
  }, [x, y]);

  const fetchRouteData = async () => {
    try {
      const coordinates = await fetchRoute(origin, destination);
      setRouteCoordinates(coordinates);
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  const { latitudeDelta, longitudeDelta } =
    destination.latitude !== 0 && destination.longitude !== 0
      ? calculateDelta(origin, destination)
      : { latitudeDelta: 0.02, longitudeDelta: 0.02 };

  const initialRegion =
    destination.latitude !== 0 && destination.longitude !== 0
      ? {
          latitude: (origin.latitude + destination.latitude) / 2,
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta,
          longitudeDelta,
        }
      : {
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta,
          longitudeDelta,
        };

  return { origin, destination, routeCoordinates, initialRegion };
};
