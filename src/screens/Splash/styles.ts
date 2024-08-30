import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    flex: 0.8,
    backgroundColor: theme.colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  image: {
    width: 369,
    height: 182,
    resizeMode: "contain",
    marginBottom: -280,
  },
  titleText: {
    fontSize: 50,
    fontFamily: theme.fonts.notoSansKR.extra_bold,
    color: theme.colors.background,
    marginBottom: 20,
  },
  introText: {
    fontSize: 23,
    paddingHorizontal: 60,
    textAlign: "center",
    fontFamily: theme.fonts.notoSansKR.regular,
    color: theme.colors.background,
    paddingBottom: 30,
  },
  info: {
    flex: 0.3,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  infoText: {
    fontSize: 35,
    fontFamily: theme.fonts.notoSansKR.semi_bold,
  },
});
