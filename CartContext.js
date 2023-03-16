import React, { createContext, useState } from "react";
import { getProduct } from "./components/common/hooks/getAllProducts.js";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]); // list of items in a cart

  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        // Item not yet in the list, append it
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        // Item already in the list, increase its number
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  }

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  // Returns whole app wrapped in CartContext
  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
