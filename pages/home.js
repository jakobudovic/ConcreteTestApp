import React from "react";
import { ScrollView, Text } from "react-native";
import { UseGetUsers } from "../components/common/hooks/getAllUsers";
import Item from "../components/Item";
import user_data from "../user_data";

export default function HomeScreen() {
  let { data, isLoading } = UseGetUsers();
  data = user_data; // override data
  return (
    <ScrollView>
      <Text>User data base</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        data.results.map((item, key) => {
          return <Item item={item} key={key} />;
        })
      ) : (
        <Text>We don't have the data ...</Text>
      )}
    </ScrollView>
  );
}
