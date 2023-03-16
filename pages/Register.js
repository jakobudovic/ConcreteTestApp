import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen TODO one day.</Text>
      <Text>
        Simple form with email, password (twice), first name, last name and
        location
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 40,
  },
});
