import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

// reducers para cambiar nuestro estado
import { useAppDispatch } from "../hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../features/counter/counterSlice";

const ButtonRedux = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <TouchableOpacity
        onPress={() => dispatch(increment())}
        style={{
          backgroundColor: "green",
          padding: 15,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          Increment
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          Decrement
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(incrementByAmount(10))}
        style={{
          backgroundColor: "orange",
          padding: 15,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          Increment by 10
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(decrementByAmount(10))}
        style={{
          backgroundColor: "blue",
          padding: 15,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          Decrement by 10
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(reset())}
        style={{
          backgroundColor: "red",
          padding: 15,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          Reset
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonRedux;
