import React, { useState, useCallback, useEffect, useRef } from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useMapLogic } from "@hooks/useMapLogic";
import { MapViewProps } from ".";
import { GOOGLE_SPEECH_TO_TEXT_API_KEY } from "@env";

const containerStyle = {
  width: "100%",
  height: "100%",
};

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const WebMapView: React.FC<MapViewProps> = ({ x, y }) => {
  const { origin, destination, initialRegion } = useMapLogic(x, y);
  const [directions, setDirections] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const directionsServiceRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_SPEECH_TO_TEXT_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      window.initMap = () => {
        setMapLoaded(true);
      };

      return () => {
        document.head.removeChild(script);
      };
    } else {
      setMapLoaded(true);
    }
  }, []);

  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
    directionsServiceRef.current = new window.google.maps.DirectionsService();
  }, []);

  useEffect(() => {
    if (
      mapRef.current &&
      directionsServiceRef.current &&
      origin &&
      destination
    ) {
      const request = {
        origin: { lat: origin.latitude, lng: origin.longitude },
        destination: { lat: destination.latitude, lng: destination.longitude },
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsServiceRef.current.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Directions request failed due to ${status}`);
        }
      });
    }
  }, [origin, destination]);

  if (!mapLoaded) return null;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: initialRegion.latitude,
        lng: initialRegion.longitude,
      }}
      zoom={10}
      onLoad={onMapLoad}
    >
      {origin && !isNaN(origin.latitude) && !isNaN(origin.longitude) && (
        <Marker
          position={{
            lat: origin.latitude,
            lng: origin.longitude,
          }}
          title="현위치: 현위치"
        />
      )}
      {destination &&
        !isNaN(destination.latitude) &&
        !isNaN(destination.longitude) && (
          <Marker
            position={{
              lat: destination.latitude,
              lng: destination.longitude,
            }}
            title="목적지: 목적지"
          />
        )}
      {directions && (
        <DirectionsRenderer
          options={{
            directions: directions,
            suppressMarkers: true,
          }}
        />
      )}
    </GoogleMap>
  );
};

export default WebMapView;
