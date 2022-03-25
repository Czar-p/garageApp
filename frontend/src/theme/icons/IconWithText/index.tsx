import { Text } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { IconWithTextProps } from "./interface";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withTiming
} from "react-native-reanimated";

const IconWithText = ({ text, iconName, iconSize,delay }: IconWithTextProps) => {
  const opacity = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(()=>{
    return {
      flexDirection:'row',
      opacity: opacity.value
    }
  })

  useEffect(()=>{
    opacity.value = withDelay(200 * delay,withTiming(1,{duration:750}))
  },[])
  return (
    <Animated.View style={animatedStyle}>
      <AntDesign name={iconName} size={iconSize} color="black" />
      <Text style={{ fontSize: 18, textAlignVertical: "center" }}>{text}</Text>
    </Animated.View>
  );
};

export default IconWithText;
