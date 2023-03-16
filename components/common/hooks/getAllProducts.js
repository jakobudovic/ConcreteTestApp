const PRODUCTS = [
  {
    id: 100,
    name: "Normal concrete",
    price: 100,
    // @ts-ignore
    image: require("../../../assets/products/concrete1.jpg"),
    description:
      "Normal concrete is a versatile and economical material made from a mixture of cement, water, and aggregates. It is commonly used in construction for foundations, walls, and pavements due to its durability and strength.",
  },
  {
    id: 101,
    name: "Concrete brick",
    price: 20,
    // @ts-ignore
    image: require("../../../assets/products/concrete2.jpg"),
    description:
      "Concrete brick, also known as concrete masonry units (CMUs), are blocks made from a mixture of cement, water, and aggregates. They are popular for their strength, durability, and fire resistance. They are commonly used in construction for load-bearing walls, retaining walls, and fences.",
  },
  {
    id: 102,
    name: "Reinforced concrete",
    price: 300,
    // @ts-ignore
    image: require("../../../assets/products/concrete3.jpg"),
    description:
      "Reinforced concrete is a type of concrete that has steel bars or mesh embedded in it to increase its tensile strength. This makes it ideal for construction in areas where earthquakes, hurricanes, or other natural disasters are common. It is commonly used in bridges, tall buildings, and other structures that require extra strength and durability.",
  },
];

export function getAllProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
