import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CartContext } from "../CartContext";
import { getProduct } from "../components/common/hooks/getAllProducts.js";

export function ProductDetails({ route }) {
  const { productId } = route.params; // Gets passed product id
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext); // import addtoCart funcition from context

  useEffect(() => {
    setProduct(getProduct(productId)); // Gets the product for displaying it later
  });

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <Image style={styles.image} source={product.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button onPress={onAddToCart} title="Add to cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safearea: {
    height: "100%", // without weirdly cuts off screen
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
