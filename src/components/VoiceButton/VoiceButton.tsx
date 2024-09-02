import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@styles/theme";

import VoiceWaveform from "./VoiceWaveform";
import useVoiceRecognition from "@hooks/useVoiceRecognition";
import styles from "./styles";

interface VoiceButtonProps {
  onRecognizedTextChange: (text: string) => void;
  onServerMessageChange: (text: string) => void;
}

const VoiceButton: React.FC<VoiceButtonProps> = ({
  onRecognizedTextChange,
  onServerMessageChange,
}) => {
  const {
    isListening,
    recognizedText,
    toggleListening,
    animatedValue,
    serverMessage,
    destination,
  } = useVoiceRecognition();

  React.useEffect(() => {
    onRecognizedTextChange(recognizedText);
  }, [recognizedText, onRecognizedTextChange]);

  React.useEffect(() => {
    onServerMessageChange(serverMessage);
  }, [serverMessage, onServerMessageChange]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleListening}>
        <Animated.View
          style={[styles.button, { transform: [{ scale: animatedValue }] }]}
        >
          {isListening ? (
            <VoiceWaveform />
          ) : (
            <FontAwesome5
              name="microphone"
              size={59}
              color={theme.colors.background}
            />
          )}
          <Text style={styles.buttonText}>
            {isListening ? "듣는 중" : "직접 말하기"}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default VoiceButton;
