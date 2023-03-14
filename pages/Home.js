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
        <Text>Building connections, one project at a time.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Users")}>
          <Text>Go to users tab</Text>
        </TouchableOpacity>
        <View style={styles.authButtonsContainer}>
          <TouchableOpacity style={[styles.authButton, styles.blueButton]}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.authButton, styles.redButton]}>
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
    textAlign: "center",
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
});
