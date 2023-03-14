import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsScreen } from "./pages/Products.js";

import React from "react";
import { Button } from "react-native";
import HomeScreen from "./pages/Home.js";
import UsersScreen from "./pages/Users.js";

const queryClient = new QueryClient(); // Initialze the client
const Stack = createNativeStackNavigator();
// https://randomuser.me/api?results=10

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Users" component={UsersScreen} />
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={({ navigation }) => ({
              headerLeft: () => <></>, // Remove back button <Button onPress={navigation.goBack} />
              headerRight: () => (
                // TODO create shopping cart or side bar
                <Button title="Cart" onPress={navigation.goBack} />
              ), // Remove back button <Button onPress={navigation.goBack} />
            })}
            // options={{ presentation: 'modal' }}  // add this to register
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
