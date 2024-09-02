import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapLogic } from "@hooks/useMapLogic";
import { MapViewProps } from ".";
import L from "leaflet";
import StartMarker from "@assets/svg/StartMarker.svg";
import EndMarker from "@assets/svg/EndMarker.svg";

// divIcon 생성 함수
const createIcon = (svg: string) => {
  return L.divIcon({
    className: "custom-icon",
    html: svg,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
  });
};

const startIcon = createIcon(StartMarker);
const endIcon = createIcon(EndMarker);

const WebMapView: React.FC<MapViewProps> = ({ x, y }) => {
  const { origin, destination, routeCoordinates, initialRegion } = useMapLogic(
    x,
    y
  );

  return (
    <MapContainer
      center={[initialRegion.latitude, initialRegion.longitude]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {origin && (
        <Marker
          position={[origin.latitude, origin.longitude]}
          icon={startIcon}
        />
      )}
      {destination && (
        <Marker
          position={[destination.latitude, destination.longitude]}
          icon={endIcon}
        />
      )}
      <Polyline
        positions={routeCoordinates.map((coord) => [
          coord.latitude,
          coord.longitude,
        ])}
        color="#007AFF"
        weight={5}
      />
    </MapContainer>
  );
};

export default WebMapView;
