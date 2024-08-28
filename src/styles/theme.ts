const colors = {
  white: "fff",
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
