import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsScreen } from "./pages/Products.js";

import React from "react";
import { CartProvider } from "./CartContext.js";
import { CartIcon } from "./components/CartIcon.js";
import { Cart } from "./pages/Cart.js";
import HomeScreen from "./pages/Home.js";
import { ProductDetails } from "./pages/ProductDetails.js";
import RegisterScreen from "./pages/Register.js";
import UsersScreen from "./pages/Users.js";

const queryClient = new QueryClient(); // Initialze the client
const Stack = createNativeStackNavigator();
// https://randomuser.me/api?results=10

export default function App() {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ presentation: "modal" }}
            />
            <Stack.Screen name="Users" component={UsersScreen} />
            <Stack.Screen
              name="Products"
              component={ProductsScreen}
              options={({ navigation }) => ({
                headerLeft: () => <></>, // Remove back button <Button onPress={navigation.goBack} />
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={({ navigation }) => ({
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </CartProvider>
  );
}
