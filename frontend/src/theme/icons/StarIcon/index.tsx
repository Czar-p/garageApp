
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native";
import { StarProps } from "./interface";
import { Colors } from "../../../styles";

const StarIcon = (props: StarProps) => (
  <TouchableOpacity onPress={props.onPress}>
    <AntDesign
    size={props.size}
    name={props.star ? "star" : "staro"}
    color={props.star ? Colors.starColor : Colors.textColor}
  />
  </TouchableOpacity>
);

export default StarIcon;
