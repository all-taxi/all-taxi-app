import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationProp } from "@types/navigation";
import { ROUTES } from "@constants/routes";

import VoiceButton from "@components/VoiceButton/VoiceButton";
import AudioGuideHeader from "@components/AudioGuideHeader/AudioGuideHeader";

type Props = {
  navigation: NavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View>
      <AudioGuideHeader message="기사님이 찾기 쉽도록 상의를 촬영해주세요" />
      <VoiceButton />
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate(ROUTES.DETAIL)}
      />
    </View>
  );
};

export default HomeScreen;
