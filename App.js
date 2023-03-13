import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  let x = 1;
  const [count, setCount] = useState(0);
  const countEvery3 = Math.floor(count / 3);

  useEffect(() => {
    console.log(countEvery3);
  }, [countEvery3]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.large} />
        <ScrollView horizontal>
          <View style={styles.small} />
          <View style={styles.small} />
          <View style={styles.small} />
        </ScrollView>
        <View style={styles.large} />
        <View style={styles.small} />
        <View style={styles.large} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  small: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "skyblue",
  },
  large: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "steelblue",
  },
});
