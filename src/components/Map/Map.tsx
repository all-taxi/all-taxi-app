import React from "react";
import { View } from "react-native";
import MapView, { Polyline, Marker, Region } from "react-native-maps";
import styles from "./styles";
import { theme } from "@styles/theme";
import { Coordinate } from "@types/map";

interface MapProps {
  origin: Coordinate;
  destination: Coordinate;
  routeCoordinates: Coordinate[];
  initialRegion: Region;
}

const Map: React.FC<MapProps> = ({
  origin,
  destination,
  routeCoordinates,
  initialRegion,
}) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {origin && !isNaN(origin.latitude) && !isNaN(origin.longitude) && (
          <Marker coordinate={origin} title="현위치: 현위치" pinColor="green" />
        )}
        {destination &&
          !isNaN(destination.latitude) &&
          !isNaN(destination.longitude) && (
            <Marker
              coordinate={destination}
              title="목적지: 목적지"
              pinColor="red"
            />
          )}
        <Polyline
          coordinates={routeCoordinates}
          strokeWidth={5}
          strokeColor={theme.colors.primary}
        />
      </MapView>
    </View>
  );
};

export default Map;
