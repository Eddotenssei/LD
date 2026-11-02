import { useEffect, useState } from "react";

import {
  Alert,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Switch,
} from "react-native";

export default function TodoModal({
  visible,
  onClose,
  id,
  todoData,
  onUpdate,
}) {
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
  });

  useEffect(() => {
    if (visible && todoData) {
      setTodo({
        title: todoData.title,
        completed: todoData.completed,
      });
    }
  }, [visible, todoData]);

  const handleSave = () => {
    if (!todo.title.trim()) {
      Alert.alert("Error", "Todo title cannot be empty");
      return;
    }

    onUpdate({
      id,
      title: todo.title,
      completed: todo.completed,
    });

    Alert.alert("Success", "Todo updated successfully");
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Edit Todo</Text>

        <Text style={styles.label}>Todo ID</Text>
        <Text style={styles.id}>{id}</Text>

        <Text style={styles.label}>Title</Text>

        <TextInput
          value={todo.title}
          onChangeText={(text) =>
            setTodo((prev) => ({
              ...prev,
              title: text,
            }))
          }
          placeholder="Enter todo title"
          style={styles.input}
          multiline
        />

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Completed</Text>

          <Switch
            value={todo.completed}
            onValueChange={(value) =>
              setTodo((prev) => ({
                ...prev,
                completed: value,
              }))
            }
          />
        </View>

        <TouchableOpacity
          style={styles.updateButton}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
        >
          <Text style={styles.buttonText}>Close Modal</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    padding: 24,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 10,
  },
  id: {
    fontSize: 16,
    color: "#64748B",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: "top",
    marginBottom: 25,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  updateButton: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  closeButton: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});