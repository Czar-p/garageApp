import { View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import AppNavigator from "./router";
import { Colors } from "./styles";

const AppContainer = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.backgroundColor,
          }}
        >
          <StatusBar style="auto" />
          <AppNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default AppContainer;
