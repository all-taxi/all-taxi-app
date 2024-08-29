import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

interface AudioGuideHeaderProps {
  message: string;
}

const AudioGuideHeader: React.FC<AudioGuideHeaderProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>
        <Ionicons name="volume-medium" size={40} color="black" />
      </Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default AudioGuideHeader;
