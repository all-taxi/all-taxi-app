import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import styles, { fixedStyles } from "./styles";

interface AudioGuideHeaderProps {
  message: string;
  shouldSpeak: boolean;
}

const AudioGuideHeader: React.FC<AudioGuideHeaderProps> = ({
  message,
  shouldSpeak,
}) => {
  const prevMessageRef = useRef<string>("");

  useEffect(() => {
    if (shouldSpeak && message !== prevMessageRef.current) {
      Speech.speak(message);
      prevMessageRef.current = message;
    }
  }, [message, shouldSpeak]);

  return (
    <View style={[styles.container, fixedStyles.header]}>
      <Text style={styles.icon}>
        <Ionicons name="volume-medium" size={40} color="black" />
      </Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default AudioGuideHeader;
