import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Loading from "@assets/svg/Loading.svg";
import AudioGuideHeader from "@components/AudioGuideHeader/AudioGuideHeader";

const TaxiMatchScreen = () => {
  return (
    <View style={styles.container}>
      <AudioGuideHeader message={"택시를 찾고 있어요"} />
      <Loading height={300} />
    </View>
  );
};

export default TaxiMatchScreen;
