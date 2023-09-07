import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonList from "./components/PokemonList";

const Home = () => {
  return (
    <Provider store={store}>
      <View>
        <PokemonList />
      </View>
    </Provider>
  );
};

export default Home;
