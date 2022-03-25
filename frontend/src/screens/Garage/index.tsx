import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../../componets/ItemList";
import { Car, RootStackParamList } from "../../interfaces";

import { getCars } from "../../store/cars/actions";
import { getCarsList } from "../../store/selectors";
import { styles } from "./styles";



const Garage = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  const dispatch = useDispatch();
  const cars = useSelector(getCarsList);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  const goToDetails = (car:Car) =>{
    navigation.navigate("details", { car })
  }

  const renderItem = ({ item }: { item: Car }) => (
    <TouchableOpacity
      onPress={() => goToDetails(item)}
    >
      <ItemList
        id={item.id}
        image={item.image}
        model={item.model}
        make={item.make}
        year={item.year}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Garage</Text>
      <View style={styles.list}>
        <FlatList data={cars.data} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Garage;
