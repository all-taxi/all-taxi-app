import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationProp } from "@types/navigation";
import AudioGuideHeader from "@components/AudioGuideHeader/AudioGuideHeader";
import MapView from "@components/Map/index";
import { ROUTES } from "@constants/routes";
import NavButton from "@components/VoiceButton/NavButton";
import useTaxiDriverInfoStore from "@states/taxiDriverStore";
type Props = {
  navigation: NavigationProp;
};

const TaxiScreen = ({ navigation }: Props) => {
  const { data } = useTaxiDriverInfoStore();

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapView x={data.x} y={data.y} />
      </View>

      <AudioGuideHeader
        message={`차번호 ${data.car_number}, ${data.driver_name} 기사님이  ${data.time}분 후 도착 예정입니다.`}
        shouldSpeak={true}
      />
    </View>
  );
};

export default TaxiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: "100%",

    zIndex: 99,
    backgroundColor: "pink",
  },
});
