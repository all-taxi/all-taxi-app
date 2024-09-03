import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import Loading from "@assets/svg/Loading.svg";
import AudioGuideHeader from "@components/AudioGuideHeader/AudioGuideHeader";
import { NavigationProp } from "@types/navigation";
import { ROUTES } from "@constants/routes";
import useTaxiDriverInfoStore from "@states/taxiDriverStore";
import calculateCoordinatesAtDistance from "@utils/calculateCoordinatesAtDistance";
import { useLocationStore } from "@states/locationStore";

type Props = {
  navigation: NavigationProp;
};

const TaxiMatchScreen = ({ navigation }: Props) => {
  const { setTaxiDriverInfo } = useTaxiDriverInfoStore();
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const location = useLocationStore.getState().location;
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const minutesAway = (minutes: number) =>
        calculateCoordinatesAtDistance(
          currentLocation.latitude,
          currentLocation.longitude,
          minutes
        );

      const timer = setTimeout(() => {
        const minutes = 3;
        const driverLocation = minutesAway(minutes);
        setTaxiDriverInfo({
          car_number: "12가 3456",
          driver_name: "홍길동",
          x: driverLocation.longitude.toString(),
          y: driverLocation.latitude.toString(),
          time: minutes,
        });
        navigation.navigate(ROUTES.TAXI);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentLocation]);

  return (
    <View style={styles.container}>
      <AudioGuideHeader message={"택시를 찾고 있어요"} shouldSpeak={true} />
      <Loading height={300} />
    </View>
  );
};

export default TaxiMatchScreen;
