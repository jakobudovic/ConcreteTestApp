import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
  console.log("navigation");
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Concrete App</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Users")}>
        <Text>Go to users tab</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "rgb(59,108,212)",
    fontSize: 42,
    fontWeight: "100",
    textAlign: "center",
  },
});
