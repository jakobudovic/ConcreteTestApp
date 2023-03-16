import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { CartContext } from "../CartContext";

export function CartIcon({ navigation }) {
  const { getItemsCount } = useContext(CartContext);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Cart");
      }}
    >
      <Text style={styles.text}>🛒 ({getItemsCount()})</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "lightblue",
    height: 38,
    padding: 8,
    borderRadius: 12,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
