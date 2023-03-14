import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./pages/home.js";

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
