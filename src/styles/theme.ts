const colors = {
  primary: "#E17551", // 주 버튼과 아이콘에 사용된 오렌지 계열 색상
  secondary: "#FBE5DA", // 배경과 보조 요소에 사용된 연한 살구색
  background: "#FFFFFF", // 기본 배경색 (흰색)
  text: {
    primary: "#000000", // 주 텍스트 색상 (검정)
    secondary: "#666666", // 부 텍스트 색상 (회색)
  },
  button: {
    primary: "#E17551", // 주 버튼 색상 (오렌지)
    secondary: "#F8F8F8", // 보조 버튼 색상 (연한 회색)
  },
  border: "#E0E0E0", // 경계선 색상 (연한 회색)
  shadow: "rgba(0, 0, 0, 0.1)", // 그림자 색상
  success: "#4CAF50", // 성공 상태를 나타내는 색상 (녹색)
  error: "#F44336", // 오류 상태를 나타내는 색상 (빨간색)
  listening: "#e27343", // 음성 인식 중 상태를 나타내는 색상 (주황색)
};

const fonts = {
  pretendard: {
    bold: "Pretendard-Bold",
    regular: "Pretendard-Regular",
    thin: "Pretendard-Thin",
  },
  notoSansKR: {
    black: "NotoSansKR-Black",
    bold: "NotoSansKR-Bold",
    extra_bold: "NotoSansKR-ExtraBold",
    extra_light: "NotoSansKR-ExtraLight",
    light: "NotoSansKR-Light",
    medium: "NotoSansKR-Medium",
    regular: "NotoSansKR-Regular",
    semi_bold: "NotoSansKR-SemiBold",
    thin: "NotoSansKR-Thin",
  },
};

export const theme = {
  colors,
  fonts,
};

export type Theme = typeof theme;
