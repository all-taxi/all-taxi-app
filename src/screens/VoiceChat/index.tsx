import React, { useState, useCallback, useRef } from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationProp } from "@types/navigation";
import { ROUTES } from "@constants/routes";
import VoiceButton from "@components/VoiceButton/VoiceButton";
import styles from "./styles";
import AudioGuideHeader from "@components/AudioGuideHeader/AudioGuideHeader";
import useDestinationStore from "@states/destinationStore";

type Props = {
  navigation: NavigationProp;
};

const VoiceChatScreen = ({ navigation }: Props) => {
  const [recognizedText, setRecognizedText] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [shouldSpeak, setShouldSpeak] = useState(false);
  const prevServerMessageRef = useRef<string>("");
  const { destination } = useDestinationStore();

  const handleServerMessageChange = useCallback((text: string) => {
    setServerMessage(text);
    if (text !== prevServerMessageRef.current) {
      setShouldSpeak(true);
      prevServerMessageRef.current = text;
    }
  }, []);

  const handleRecognizedTextChange = useCallback((text: string) => {
    setRecognizedText(text);
  }, []);

  if (destination != null) {
    navigation.navigate(ROUTES.DESTINATIONLIST);
  }

  return (
    <View style={styles.container}>
      <AudioGuideHeader message={serverMessage} shouldSpeak={shouldSpeak} />
      <View style={styles.button}>
        <VoiceButton
          onServerMessageChange={handleServerMessageChange}
          onRecognizedTextChange={handleRecognizedTextChange}
        />
      </View>
      <ScrollView style={styles.speech}>
        <Text style={styles.txet}>{recognizedText}</Text>
      </ScrollView>
    </View>
  );
};

export default VoiceChatScreen;
