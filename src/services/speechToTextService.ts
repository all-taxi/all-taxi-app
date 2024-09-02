import { GOOGLE_SPEECH_TO_TEXT_API_KEY } from "@env";

export const fetchSpeechToText = async (audioFile: string) => {
  try {
    const API_KEY = GOOGLE_SPEECH_TO_TEXT_API_KEY;
    const response = await fetch(
      `https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          config: {
            encoding: "LINEAR16",
            sampleRateHertz: 44100,
            languageCode: "ko-KR",
          },
          audio: {
            content: audioFile,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results[0]?.alternatives[0]?.transcript || "";
  } catch (error) {
    console.error("Failed to recognize speech", error);
    return "";
  }
};
