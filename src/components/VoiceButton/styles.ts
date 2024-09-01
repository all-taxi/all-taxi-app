import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 99,
    bottom: 0,
    width: "100%",
  },
  button: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: theme.colors.listening,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
    fontFamily: theme.fonts.notoSansKR.semi_bold,
    color: theme.colors.background,
    marginTop: 10,
  },
  recognizedText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  waveformContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 80,
    height: 60,
  },
  bar: {
    width: 7,
    height: 40,
    backgroundColor: theme.colors.background,
    borderRadius: 3,
  },
});
