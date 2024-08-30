import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
