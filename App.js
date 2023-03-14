import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./pages/home.js";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";

const queryClient = new QueryClient(); // Initialze the client
// https://randomuser.me/api?results=10

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
