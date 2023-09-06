import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { useAppSelector } from "../hooks";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Counter</Text>
      <Text style={{ fontSize: 62, color: "green", fontWeight: "bold" }}>
        {count}
      </Text>
    </View>
  );
};

export default Counter;
