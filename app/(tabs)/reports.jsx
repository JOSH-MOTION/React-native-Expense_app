import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const Reports = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Reports</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monthly Report</Text>
        <Text style={styles.sectionContent}>
          This section displays your monthly expense summary and balance updates.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expense Breakdown</Text>
        <Text style={styles.sectionContent}>
          View detailed breakdowns by expense type: Food, Transport, Bills, etc.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Suggestions</Text>
        <Text style={styles.sectionContent}>
          Get tips on managing your budget based on your spending patterns.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937', // Dark gray background
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#93C5FD', // Light blue text
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#374151', // Slightly lighter gray
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E5E7EB', // Light gray text
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 14,
    color: '#D1D5DB', // Gray text
    lineHeight: 20,
  },
});
