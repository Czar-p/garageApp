import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useScreenDimensions } from "../../../../hooks/useScreenDimensions";
import { styles } from "./styles";
import { IconWithText, StarIcon } from "../../../../theme";
import { ItemListElementProps } from "./interface";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from "react-native-reanimated";

const Extended = ({
  image,
  model,
  make,
  year,
  isFavorite,
  onFavoritePress,
}: ItemListElementProps) => {
  const size = useScreenDimensions();
  const position = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: size.height / position.value }],
    };
  });
  useEffect(()=>{
    position.value = withSpring(2.7)
  },[])
  return (
    <>
      <Image
        source={{ uri: image.url }}
        style={{
          width: "100%",
          marginTop: 15,
          height: size.width * 0.7,
        }}
      />

      <Animated.View
        style={[
          styles.detailContainer,
          { height: size.height, width: size.width },
          animatedStyles,
        ]}
      >
        <Text style={styles.headerText}>Details</Text>
        <View style={styles.iconContainer}>
          <IconWithText iconName={"tago"} iconSize={30} text={make} delay={1} />
          <IconWithText iconName={"car"} iconSize={30} text={model} delay={2} />
          <IconWithText iconName={"calendar"} iconSize={30} text={year} delay={3} />
        </View>
      </Animated.View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 25,
          right: 0,
          padding: 15,
        }}
      >
        <StarIcon star={isFavorite} size={35} onPress={onFavoritePress} />
      </View>
    </>
  );
};

export default Extended;
