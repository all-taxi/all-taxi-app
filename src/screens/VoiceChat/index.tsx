import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationProp } from "@types/navigation";
import { ROUTES } from "@constants/routes";
import VoiceButton from "@components/VoiceButton/VoiceButton";
import styles from "./styles";
import AudioGuideHeader from "@components/AudioGuideHeader/AudioGuideHeader";

type Props = {
  navigation: NavigationProp;
};

const VocieChatScreen = ({ navigation }: Props) => {
  const [recognizedText, setRecognizedText] = useState("");

  const handleRecognizedTextChange = (text: string) => {
    setRecognizedText(text);
  };

  return (
    <View style={styles.container}>
      <AudioGuideHeader message={"직접 말하기를 눌러 목적지를 말씀해주세요"} />
      <View style={styles.button}>
        <VoiceButton onRecognizedTextChange={handleRecognizedTextChange} />
      </View>
      <ScrollView style={styles.speech}>
        <Text style={styles.txet}>{recognizedText}</Text>
      </ScrollView>
    </View>
  );
};

export default VocieChatScreen;
