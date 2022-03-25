import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Garage } from "../../../screens";


const Stack = createNativeStackNavigator();

const PublicStak = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="garage"
  >
    <Stack.Screen name={"garage"} component={Garage} />
    <Stack.Screen name={"details"} component={Details} />
  </Stack.Navigator>
);

export default PublicStak;
