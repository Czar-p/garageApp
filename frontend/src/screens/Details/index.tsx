import { View} from "react-native";
import React from "react";
import ItemList from "../../componets/ItemList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../interfaces";



const Details = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "details">) => {
  const {
    params: { car },
  } = route;
  const onBack = () => navigation.pop()
  return (
    <View style={{ paddingTop: 15 }}>
      <ItemList
        id={car.id}
        image={car.image}
        make={car.make}
        model={car.model}
        year={car.year}
        isDetails
        onBack={onBack}
      />
      
    </View>
  );
};

export default Details;
