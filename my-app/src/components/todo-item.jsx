import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function TodoItem({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>Todo #{item.id}</Text>

      <Text style={styles.title}>
        {item.title}
      </Text>

      <Text
        style={[
          styles.status,
          item.completed
            ? styles.completed
            : styles.pending,
        ]}
      >
        {item.completed ? 'Completed' : 'Pending'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginBottom: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
  },
  id: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
  },
  status: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: 'bold',
  },
  completed: {
    backgroundColor: '#DCFCE7',
    color: '#166534',
  },
  pending: {
    backgroundColor: '#FEF3C7',
    color: '#92400E',
  },
});