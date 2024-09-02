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
    return <WebMapView x={"126.978"} y={"37.5665"} />;
  } else {
    return <WebMapView x={"126.978"} y={"37.5665"} />;

    // return <WebMapView x={x} y={y} />;
  }
};

export default MapView;
