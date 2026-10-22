
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Formik } from 'formik';

export default function CardForm({ onAddCard }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Card</Text>

      <Formik
        initialValues={{ title: '', description: '' }}
        validate={(values) => {
          const errors = {};

          if (!values.title.trim()) {
            errors.title = 'Title is required';
          }

          if (!values.description.trim()) {
            errors.description = 'Description is required';
          }

          return errors;
        }}
        onSubmit={(values) => {
          onAddCard({
            title: values.title.trim(),
            description: values.description.trim(),
          });

          
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Card title"
              value={values.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              maxLength={60}
            />

            {touched.title && errors.title && (
              <Text style={styles.error}>{errors.title}</Text>
            )}

            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Card description"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              maxLength={250}
            />

            {touched.description && errors.description && (
              <Text style={styles.error}>
                {errors.description}
              </Text>
            )}

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Add Card</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1E293B',
    marginBottom: 8,
  },
  descriptionInput: {
    minHeight: 85,
    textAlignVertical: 'top',
  },
  error: {
    color: '#DC2626',
    fontSize: 13,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  disabledButton: {
    opacity: 0.45,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
