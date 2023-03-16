import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CartContext } from "../CartContext";

export function CartIcon({ navigation }) {
  const { getItemsCount } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          console.log("TODO redirect to cart screen");
          //   navigation.navigate("Cart");
        }}
      >
        🛒 ({getItemsCount()})
      </Text>
    </View>
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
