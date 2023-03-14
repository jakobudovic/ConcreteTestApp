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

const items = [
  {
    id: 1,
    name: "Concrete 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Concrete 2",
    description: "Nulla tempus vestibulum metus vel tincidunt.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Concrete 3",
    description:
      "Praesent bibendum, lacus at accumsan efficitur, purus libero aliquam quam.",
    image: "https://via.placeholder.com/80",
  },
];

export default function App() {
  // const getUsers = async () => {
  //   const res = await fetch("https://randomuser.me/api?results=10");
  //   return res.json();
  // };

  // const { data, error, isLoading } = useQuery("randomFacts", getUsers);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
{
  /* <SafeAreaView style={styles.container}>
  <ScrollView style={styles.container}>
    {items.map((item) => (
      <Item key={item.id} item={item} />
    ))}
  </ScrollView>
</SafeAreaView> */
}
