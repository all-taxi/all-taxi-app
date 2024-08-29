import { useState, useRef } from "react";
import { Animated } from "react-native";

const useVoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const animatedValue = useRef(new Animated.Value(1)).current;

  const startListening = () => {
    setIsListening(true);
    setRecognizedText("음성 인식 시작");
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const stopListening = () => {
    setIsListening(false);
    setRecognizedText("음성 인식 종료");
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return { isListening, recognizedText, toggleListening, animatedValue };
};

export default useVoiceRecognition;
