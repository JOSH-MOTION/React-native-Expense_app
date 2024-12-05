import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to Expense Tracker</Text>
        <Text style={styles.subtitle}>
          Manage your finances with ease and efficiency.
        </Text>
        <Link href="/home" style={styles.button}>
          Go to Home
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6', // Tailwind gray-100
  },
  card: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    width: '90%', // equivalent to w-11/12
    maxWidth: 400, // equivalent to max-w-md
  },
  title: {
    fontSize: 24,
    fontWeight: '700', // equivalent to font-bold
    color: '#4B5563', // equivalent to text-gray-800
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280', // equivalent to text-gray-600
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#2563EB', // equivalent to bg-blue-600
    color: 'white',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 9999, // equivalent to rounded-full
    fontWeight: '600', // equivalent to font-semibold
    textDecorationLine: 'none',
  },
});

export default Index;
