import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  let x = 1;
  const [count, setCount] = useState(0);
  const countEvery3 = Math.floor(count / 3);

  useEffect(() => {
    console.log(countEvery3);
  }, [countEvery3]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
      <Button
        title={`Increment ${count}`}
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "rgb(59,108,212)",
    fontSize: 42,
    fontWeight: "100",
    textAlign: "center",
  },
});
