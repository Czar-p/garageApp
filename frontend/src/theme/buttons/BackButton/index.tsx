import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

import { BackButtonProps } from "./interface";
import { useScreenDimensions } from "../../../hooks/useScreenDimensions";

const BackButton = ({ onBack = ()=>{} }: BackButtonProps) => {
  const size = useScreenDimensions();
  return (
    <TouchableOpacity
      onPress={onBack}
      style={[
        styles.back,
        {
          top: size.height - size.height * 0.07,
          left: size.width / 2 - 60,
        },
      ]}
    >
      <AntDesign
        name="leftcircleo"
        size={24}
        style={{ alignSelf: "center" }}
        color="black"
      />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
