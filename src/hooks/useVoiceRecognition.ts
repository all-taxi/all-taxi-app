import { useState } from "react";
import { useAudioRecording } from "./useAudioRecording";
import { useVoiceAnimationControl } from "./useVoiceAnimationControl";
import { fetchSpeechToText } from "@services/speechToTextService";
import { Platform } from "react-native";
import io from "socket.io-client";
import { VOICE_CHAT_URL } from "@env";
import { useRef } from "react";
import { useEffect } from "react";
import useDestinationStore from "@states/destinationStore";

const useVoiceRecognition = () => {
  const [serverMessage, setServerMessage] = useState("");
  const { destination, setDestination } = useDestinationStore();
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const socketRef = useRef<any>(null);
  const { startRecording, stopRecording } = useAudioRecording();
  const { animatedValue, startAnimation, stopAnimation } =
    useVoiceAnimationControl();

  useEffect(() => {
    socketRef.current = io(VOICE_CHAT_URL);

    socketRef.current.on("connect", () => {
      console.log("Connected to server");
    });

    socketRef.current.on(
      "response",
      (data: { message: string; destination: string }) => {
        setServerMessage(data.message);
        if (data.destination) {
          setDestination(data.destination);
        }
      }
    );

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

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
      socketRef.current?.emit("message", { message: transcript });
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return {
    isListening,
    recognizedText,
    toggleListening,
    animatedValue,
    serverMessage,
    destination,
  };
};

export default useVoiceRecognition;
