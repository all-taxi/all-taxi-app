import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import styles from "./styles";
import { createBarAnimations } from "./animationUtils";

const BAR_COUNT = 5;

const VoiceWaveform: React.FC = () => {
  const animations = useRef(
    Array.from({ length: BAR_COUNT }, () => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const cleanupAnimations = createBarAnimations(animations);
    return cleanupAnimations;
  }, []);

  return (
    <View style={styles.waveformContainer}>
      {animations.map((anim, index) => (
        <Animated.View
          key={index}
          style={[
            styles.bar,
            {
              transform: [
                {
                  scaleY: anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.4, 1],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

export default VoiceWaveform;
