
import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

import CardForm from '../components/card-form';
import CardItem from '../components/card-item';

export default function Index() {
  const [cards, setCards] = useState([]);

  const handleAddCard = (newCard) => {
    const card = {
      id: `${Date.now()}-${Math.random()}`,
      ...newCard,
    };

    setCards((prevCards) => [card, ...prevCards]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Native App</Text>

     {/* <FlatList
        data={cards}
        renderItem={({ item }) => (
          <CardItem item={item} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <CardForm onAddCard={handleAddCard} />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No cards yet. Create your first card!
            </Text>
          </View>
        }
        contentContainerStyle={styles.cardList}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />  */}


      <CardForm onAddCard={handleAddCard} />

      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <CardItem item={item} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
    color: '#1E293B',
  },
  cardList: {
    paddingBottom: 20,
  },
});
