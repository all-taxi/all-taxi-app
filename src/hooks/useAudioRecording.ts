import { useState, useRef } from "react";
import { Alert, Platform } from "react-native";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";
import { AUDIO_HIGH_QUALITY } from "@constants/audio";

export const useAudioRecording = () => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const recordingRef = useRef<Audio.Recording | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    if (Platform.OS === "web") {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.start();
        setRecording(mediaRecorder as any);
        return true;
      } catch (error) {
        console.error("Error accessing microphone for recording:", error);
        Alert.alert("마이크 사용 권한을 허가해주세요.");
        return false;
      }
    } else {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("마이크 사용 권한을 허가해주세요.");
        return false;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        AUDIO_HIGH_QUALITY
      );
      recordingRef.current = recording;
      setRecording(recording);
      return true;
    }
  };

  const stopRecording = async () => {
    if (Platform.OS === "web") {
      if (!mediaRecorderRef.current) return null;

      mediaRecorderRef.current.stop();
      return new Promise<string | null>((resolve) => {
        mediaRecorderRef.current!.onstop = async () => {
          const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
          const reader = new FileReader();

          reader.onloadend = () => {
            const base64data = reader.result?.toString().split(",")[1];
            resolve(base64data || null);
          };

          reader.readAsDataURL(blob);
        };
      });
    } else {
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
    }
  };

  return { startRecording, stopRecording };
};
