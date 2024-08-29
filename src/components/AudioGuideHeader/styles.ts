import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingBottom: 30,
    minHeight: 100,
    borderRadius: 30,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  icon: {
    paddingTop: 3,
    paddingRight: 2,
  },

  message: {
    fontFamily: theme.fonts.notoSansKR.bold,
    fontSize: 30,
    paddingRight: 40,
  },
});
