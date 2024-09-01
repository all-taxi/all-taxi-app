import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@styles/theme";

import styles from "./styles";

interface NavButtonProps {
  onPress: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ onPress }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.button}>
          <FontAwesome5
            name="microphone"
            size={59}
            color={theme.colors.background}
          />
          <Text style={styles.buttonText}>직접 말하기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavButton;
