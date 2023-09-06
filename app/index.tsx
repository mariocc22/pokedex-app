import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaView } from "react-native-safe-area-context";
import Counter from "./components/Counter";
import ButtonRedux from "./components/ButtonRedux";

const Home = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ paddingHorizontal: 10 }}>
        <Counter />
        <ButtonRedux />
      </SafeAreaView>
    </Provider>
  );
};

export default Home;
