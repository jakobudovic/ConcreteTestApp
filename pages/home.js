import { UseGetUsers } from "../components/common/hooks/getAllUsers";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import Item from "../components/Item";
import user_data from "../user_data";

export default function HomeScreen() {
  let { data, isLoading } = UseGetUsers();
  data = user_data; // override data
  return (
    <ScrollView>
      <Text>Home Screen works!</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        data.results.map((item, key) => {
          return (
            <View>
              <Item item={item} />
            </View>
          );
        })
      ) : (
        <Text>We don't have the data ...</Text>
      )}
    </ScrollView>
  );
}
