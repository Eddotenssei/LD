import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const cards = [
  { id: '1', title: 'Card 1', description: 'Welcome to React Native!' },
  { id: '2', title: 'Card 2', description: 'Learn how to build mobile apps.' },
  { id: '3', title: 'Card 3', description: 'Practice your JavaScript skills.' },
  { id: '4', title: 'Card 4', description: 'Create beautiful user interfaces.' },
  { id: '5', title: 'Card 5', description: 'Explore reusable components.' },
  { id: '6', title: 'Card 6', description: 'Scroll down to see more cards.' },
  { id: '7', title: 'Card 7', description: 'Keep learning and building!' },
  { id: '8', title: 'Card 8', description: 'You have reached the last card.' },
];

export default function Index() {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>

      <Text style={styles.cardDescription}>
        {item.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() =>
          Alert.alert('Card Selected', `${item.title} clicked!`)
        }
      >
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Native App</Text>

      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
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
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});