import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function CounterButton({ title, onIncrement }) {
  return <Button title={title} onPress={onIncrement} />;
}

export default function App() {
  console.log("App executed!");
  let x = 1;
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
      <StatusBar style="auto" />
      <CounterButton
        title={`Click HERE to increment: ${count}`}
        onIncrement={() => setCount(count + 1)}
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
