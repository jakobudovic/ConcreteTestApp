import { UseGetUsers } from "../components/common/hooks/getAllUsers";
import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  const { data, isLoading } = UseGetUsers();
  console.log(data.results[0]);
  return (
    <View>
      <Text>Home Screen works!</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        data.results.map((item, key) => {
          return (
            <View>
              <Text>
                {item.email} {key}
              </Text>
            </View>
          );
        })
      ) : null}
    </View>
  );
}
