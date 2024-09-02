import { useState } from "react";
import { useAudioRecording } from "./useAudioRecording";
import { useVoiceAnimationControl } from "./useVoiceAnimationControl";
import { fetchSpeechToText } from "@services/speechToTextService";
import { Platform } from "react-native";

const useVoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");

  const { startRecording, stopRecording } = useAudioRecording();
  const { animatedValue, startAnimation, stopAnimation } =
    useVoiceAnimationControl();

  const startListening = async () => {
    const success = await startRecording();
    if (success) {
      setIsListening(true);
      setRecognizedText("");
      startAnimation();
    }
  };

  const stopListening = async () => {
    setIsListening(false);
    stopAnimation();
    const audioFile = await stopRecording();
    if (audioFile) {
      const transcript = await fetchSpeechToText(
        audioFile,
        Platform.OS === "web"
      );
      setRecognizedText(transcript);
    }
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
