import { useState, useRef } from "react";
import { Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";
import { AUDIO_HIGH_QUALITY } from "@constants/audio";

export const useAudioRecording = () => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const recordingRef = useRef<Audio.Recording | null>(null);

  const startRecording = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("마이크 사용 권한을 허가해주세요.");
      return false;
    }

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    const { recording } = await Audio.Recording.createAsync(AUDIO_HIGH_QUALITY);
    recordingRef.current = recording;
    setRecording(recording);
    return true;
  };

  const stopRecording = async () => {
    if (!recordingRef.current) return null;

    await recordingRef.current.stopAndUnloadAsync();
    const uri = recordingRef.current.getURI();

    recordingRef.current = null;
    setRecording(null);

    if (uri) {
      return await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
    }
    return null;
  };

  return { startRecording, stopRecording };
};
