import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationProp } from "@types/navigation";
import VoiceButton from "@components/VoiceButton/VoiceButton";
import AudioGuideHeader from "@components/AudioGuideHeader/AudioGuideHeader";
import MapView from "@components/Map/index";
import { ROUTES } from "@constants/routes";
import NavButton from "@components/VoiceButton/NavButton";

type Props = {
  navigation: NavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapView />
        {/* <MapView x="126.978" y="37.5665" /> */}
      </View>

      <AudioGuideHeader message="어디로 갈까요?" />
      <NavButton onPress={() => navigation.navigate(ROUTES.DETAIL)} />
    </View>
  );
};

export default HomeScreen;

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
