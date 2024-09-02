import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  button: {
    flex: 0.5,
  },
  speech: {
    flex: 0.5,
    maxHeight: 350,
    marginTop: 60,
    padding: 20,
    borderTopWidth: 0.5,
    borderTopColor: "gray",
  },

  txet: {
    fontFamily: theme.fonts.notoSansKR.regular,
    fontSize: 30,
    display: "flex",
    textAlign: "center",
  },
});
