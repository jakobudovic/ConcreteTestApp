import React, { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGetUsers } from "../components/common/hooks/getAllUsers";
import Item from "../components/Item";

export default function UsersScreen() {
  const [refreshing, setRefreshing] = useState(false);
  let { data, isLoading, refetch } = useGetUsers();

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // data = user_data; // override data
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
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

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
  },
});
