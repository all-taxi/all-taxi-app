import { Animated } from "react-native";

export const createBarAnimations = (animations: Animated.Value[]) => {
  const animateBar = (index: number) => {
    Animated.sequence([
      Animated.timing(animations[index], {
        toValue: 1,
        duration: 300 + Math.random() * 200,
        useNativeDriver: true,
      }),
      Animated.timing(animations[index], {
        toValue: 0,
        duration: 300 + Math.random() * 200,
        useNativeDriver: true,
      }),
    ]).start(() => animateBar(index));
  };

  animations.forEach((_, index) => animateBar(index));

  return () => animations.forEach((anim) => anim.stopAnimation());
};
