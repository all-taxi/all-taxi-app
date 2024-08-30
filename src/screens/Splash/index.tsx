import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import styles from "./styles";
import { theme } from "@styles/theme";
import Logo from "@assets/svg/Logo.svg";
import FamilyImage from "@assets/svg/Family.svg";

const SplashScreen = () => {
  const USER_NAME = "김소미";
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Logo width={100} height={100} />
        <Text style={styles.titleText}>올택시</Text>
        <Text style={styles.introText}>
          시각장애인과 고령자를 위한 AI 택시 예약
        </Text>

        <ActivityIndicator size="large" color={theme.colors.background} />

        <FamilyImage width={380} height={200} style={styles.familyImage} />
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>{USER_NAME}님,</Text>
        <Text style={styles.infoText}>안녕하세요!</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
