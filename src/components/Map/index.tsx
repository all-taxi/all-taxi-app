import React from "react";
import { Platform } from "react-native";
import WebMapView from "./WebMapView";
import MobileMapView from "./MobileMapView";

export interface MapViewProps {
  x?: string;
  y?: string;
}

const MapView: React.FC<MapViewProps> = ({ x, y }) => {
  if (Platform.OS === "web") {
    return <WebMapView x={x} y={y} />;
  } else {
    return <WebMapView x={x} y={y} />;

    // return <WebMapView x={x} y={y} />;
  }
};

export default MapView;
