import { FONT_FILES } from "@constants/fonts";
import { useFonts } from "expo-font";

const useFontsLoader = () => {
  return useFonts(FONT_FILES);
};

export default useFontsLoader;
