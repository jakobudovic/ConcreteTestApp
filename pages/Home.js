import { Block, Button, Input } from "galio-framework";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// @ts-ignore
import BgImage from "../assets/home_background.png";
export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={BgImage}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Concrete App</Text>
        <Text style={styles.slogan}>
          Building connections, one project at a time.
        </Text>
        <View style={styles.input}>
          <Input placeholder="Email or username" />
          <Input placeholder="Password" password viewPass />
        </View>
        <Block></Block>
        <Button
          onPress={() => navigation.navigate("Users")}
          color="#68C5DB"
          size="large"
          style={styles.usersBtn}
        >
          Check out random users 👀
        </Button>
        <View style={styles.authButtonsContainer}>
          <TouchableOpacity
            style={[styles.authButton, styles.blueButton]}
            onPress={() => navigation.navigate("Products")}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.authButton, styles.redButton]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "300",
  },
  slogan: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    paddingTop: 10,
  },
  usersBtn: {
    // width: "100%",
    // paddingHorizontal: 18,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
  },
  authButtonsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  authButton: {
    paddingVertical: 24,
    alignItems: "center",
  },
  redButton: {
    backgroundColor: "#D7263D",
  },
  blueButton: {
    backgroundColor: "#0197F6",
  },
  input: {
    width: "100%",
    padding: 20,
  },
});
