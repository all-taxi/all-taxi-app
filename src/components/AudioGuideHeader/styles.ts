import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export default StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    paddingBottom: 30,
    minHeight: 140,
    borderRadius: 30,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 10,
    top: 0,

    // 그림자 설정
    shadowColor: "#000", // 그림자 색상
    shadowOffset: { width: 0, height: 3 }, // 그림자 오프셋 (x, y)
    shadowOpacity: 0.28, // 그림자 불투명도
    shadowRadius: 3, // 그림자 반경
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

export const fixedStyles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // 다른 콘텐츠 위에 렌더링되도록 zIndex 설정
  },
});
