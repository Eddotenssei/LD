import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";

import { GetTodos } from "../../api/todos.api";
import TodoItem from "../../components/todo-item";
import TodoModal from "../../components/todo-modal";

export default function TodosScreen() {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(null);
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

  const onClose = () => {
    setVisible(false);
  };

  const onUpdate = (updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === updatedTodo.id
          ? { ...todo, ...updatedTodo }
          : todo
      )
    );

    setVisible(false);
  };

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
              setId(item.id);
              setVisible(true); 
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        refreshing={isFetching}
        onRefresh={refetch}
      />

      <TodoModal
        visible={visible}
        onClose={onClose}
        id={id}
        todoData={todos.find((todo) => todo.id === id)}
        onUpdate={onUpdate}
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