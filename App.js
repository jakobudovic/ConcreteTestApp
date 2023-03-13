import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";

const items = [
  {
    id: 1,
    name: "Concrete 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Concrete 2",
    description: "Nulla tempus vestibulum metus vel tincidunt.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Concrete 3",
    description:
      "Praesent bibendum, lacus at accumsan efficitur, purus libero aliquam quam.",
    image: "https://via.placeholder.com/80",
  },
];

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

export default function App() {
  let x = 1;
  const [count, setCount] = useState(0);
  const countEvery3 = Math.floor(count / 3);

  useEffect(() => {
    console.log(countEvery3);
  }, [countEvery3]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

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
