
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";

import { GetTodos } from "../../../api/todos.api";

export default function TodoDetailsScreen() {
  const { id } = useLocalSearchParams();

  const {
    data: todos,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: GetTodos,
  });

  if (isPending) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  const todo = todos?.find(
    (item) => item.id === Number(id)
  );

  if (!todo) {
    return (
      <View style={styles.center}>
        <Text>Todo not found!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.id}>TODO #{todo.id}</Text>

        <Text style={styles.title}>
          {todo.title}
        </Text>

        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>
            Status:
          </Text>

          <Text
            style={[
              styles.status,
              {
                color: todo.completed
                  ? "#16A34A"
                  : "#EA580C",
              },
            ]}
          >
            {todo.completed ? "Completed" : "Pending"}
          </Text>
        </View>

        <Text style={styles.userId}>
          User ID: {todo.userId}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 16,
    elevation: 3,
  },
  id: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#64748B",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 24,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statusLabel: {
    fontSize: 16,
    color: "#64748B",
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userId: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 20,
  },
});
