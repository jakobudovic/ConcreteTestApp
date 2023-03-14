const PRODUCTS = [
  {
    id: 100,
    name: "Normal concrete",
    price: 100,
    // @ts-ignore
    image: require("../../../assets/products/concrete1.jpg"),
    description:
      "A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).",
  },
  {
    id: 101,
    name: "Concrete brick",
    price: 20,
    // @ts-ignore
    image: require("../../../assets/products/concrete2.jpg"),
    description:
      "A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.",
  },
  {
    id: 102,
    name: "Reinforced concrete",
    price: 300,
    // @ts-ignore
    image: require("../../../assets/products/concrete3.jpg"),
    description:
      "A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.",
  },
];

export function getAllProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
