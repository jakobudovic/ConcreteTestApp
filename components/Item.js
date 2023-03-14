import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Item = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.picture.thumbnail }} style={styles.itemImage} />
    <View>
      <Text style={styles.itemName}>
        {item.name.first} {item.name.last}
      </Text>
      <Text style={styles.itemDescription}>
        {item.location.city}, {item.location.country}
      </Text>
      <Text style={styles.itemDescription}>{item.email}</Text>
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
    marginVertical: 2,
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
