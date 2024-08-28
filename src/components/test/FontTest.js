import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "@styles/theme";

const fonts = [
  { family: theme.fonts.pretendard.bold },
  { family: theme.fonts.pretendard.regular },
  { family: theme.fonts.pretendard.thin },
  { family: theme.fonts.notoSansKR.black },
  { family: theme.fonts.notoSansKR.bold },
  { family: theme.fonts.notoSansKR.extra_bold },
  { family: theme.fonts.notoSansKR.semi_bold },
  { family: theme.fonts.notoSansKR.medium },
  { family: theme.fonts.notoSansKR.regular },
  { family: theme.fonts.notoSansKR.light },
  { family: theme.fonts.notoSansKR.extra_light },
  { family: theme.fonts.notoSansKR.thin },
];

const FontTest = () => {
  return (
    <View style={styles.container}>
      {fonts.map((font, index) => (
        <Text key={index} style={[styles.text, { fontFamily: font.family }]}>
          {font.family}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default FontTest;
