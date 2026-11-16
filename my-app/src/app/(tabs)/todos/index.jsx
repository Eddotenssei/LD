
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";

import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";

import { GetTodos } from "../../../api/todos.api";
import TodoItem from "../../../components/todo-item";

export default function TodosScreen() {
  const router = useRouter();
  const [todos, setTodos] = useState([]);

  const {
    data,
    isPending,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: GetTodos,
  });

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo List</Text>

      <Text style={styles.subtitle}>
        JSONPlaceholder • {todos.length} tasks
      </Text>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onPress={() => {
              router.push(`/todos/${item.id}`);
            }}
          />
        )}
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
});
