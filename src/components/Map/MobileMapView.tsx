import React from "react";
import { useMapLogic } from "@hooks/useMapLogic";
import { MapViewProps } from ".";
import styles from "./styles";
import { View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { theme } from "@styles/theme";

const MobileMapView: React.FC<MapViewProps> = ({ x, y }) => {
  const { origin, destination, routeCoordinates, initialRegion } = useMapLogic(
    x,
    y
  );
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

export default MobileMapView;
