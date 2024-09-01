import React from "react";
import Map from "./Map";
import { useMapLogic } from "@hooks/useMapLogic";

interface MapViewProps {
  x?: string;
  y?: string;
}

const MapView: React.FC<MapViewProps> = ({ x, y }) => {
  const { origin, destination, routeCoordinates, initialRegion } = useMapLogic(
    x,
    y
  );

  return (
    <Map
      origin={origin}
      destination={destination}
      routeCoordinates={routeCoordinates}
      initialRegion={initialRegion}
    />
  );
};

export default MapView;
