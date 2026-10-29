import React from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { useQuery } from "@tanstack/react-query";
import TodoItem from "../components/todo-item";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
};

export default function TodosScreen() {
  const { data, isLoading, isError, error, refetch, isFetching, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.message}>Loading todos...</Text>
      </View>
    );
  }
  useFocusEffect(() => {
    if (isPending) {
      console.log("Refetching todos...");
    }
  });


  if (isPending) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.message}>Refetching todos...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error.message}</Text>

        <Text style={styles.retry} onPress={() => refetch()}>
          Try again
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo List</Text>

      <Text style={styles.subtitle}>JSONPlaceholder • {data.length} tasks</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        refreshing={isFetching}
        onRefresh={refetch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 20,
  },
  list: {
    paddingBottom: 24,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  message: {
    marginTop: 12,
    color: "#64748B",
  },
  error: {
    color: "#DC2626",
    fontSize: 16,
    textAlign: "center",
  },
  retry: {
    marginTop: 16,
    color: "#2563EB",
    fontWeight: "bold",
  },
});
