import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Item = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <View>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription} numberOfLines={2} width={"50%"}>
        {item.description}
      </Text>
    </View>
  </View>
);

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: "#777777",
  },
});
