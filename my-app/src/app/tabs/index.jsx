
import { useRouter } from "expo-router";
import { useState } from "react";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import CardForm from "../../components/card-form";
import CardItem from "../../components/card-item";

export default function Index() {
  const router = useRouter();

  const [cards, setCards] = useState([]);

  const handleAddCard = (newCard) => {
    const card = {
      id: `${Date.now()}-${Math.random()}`,
      ...newCard,
    };

    setCards((prevCards) => [card, ...prevCards]);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Native App</Text>

        <CardForm onAddCard={handleAddCard} />

        <FlatList
          data={cards}
          renderItem={({ item }) => <CardItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.cardList}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />

        <TouchableOpacity
          onPress={() => router.push("/screens/test")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Go to Test Screen
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
    color: "#1E293B",
  },
  cardList: {
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
