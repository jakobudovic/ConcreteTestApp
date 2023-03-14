import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { getAllProducts } from "../components/common/hooks/getAllProducts.js";
import { Product } from "../components/Product.js";

export function ProductsScreen({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <Product
        {...product} // extracts product info values (name, price, image)
        onPress={() => {
          navigation.navigate("ProductDetails", {
            productId: product.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]); // Init Products to empty list

  useEffect(() => {
    setProducts(getAllProducts()); // Get Products (mimic API call) and set them with setter setProducts
  });

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer} // Container for products
      keyExtractor={(item) => item.id.toString()} // Needs id for RN semantics
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    marginHorizontal: 8,
  },
});
