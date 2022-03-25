import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useScreenDimensions } from "../../../../hooks/useScreenDimensions";
import {StarIcon} from "../../../../theme";
import { ItemListElementProps } from "./interface";


const Compact = ({
  image,
  model,
  make,
  year,
  isFavorite,
  onFavoritePress,
}: ItemListElementProps) => {
  const size = useScreenDimensions();
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image.url }}
        style={{
          width: "100%",
          height: size.width * 0.5,
        }}
      />

      <View style={styles.details}>
        <View style={styles.header}>
          <Text style={styles.model}>{model}</Text>
          <StarIcon star={isFavorite} size={25} onPress={onFavoritePress} />
        </View>
        <View style={styles.line} />
        <Text style={styles.makeYear}>
          {make} | {year}
        </Text>
      </View>
    </View>
  );
};

export default Compact;
