import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false); // Modal visibility
  const [expenses, setExpenses] = useState([]);
  const [salary, setSalary] = useState(0); // Initial salary
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  // Handle add expense
  const handleAddExpense = () => {
    if (!expenseName || !expenseAmount || isNaN(expenseAmount)) {
      Alert.alert("Invalid Input", "Please enter a valid name and amount.");
      return;
    }

    const newExpense = {
      name: expenseName,
      amount: parseFloat(expenseAmount),
      color: generateRandomColor(),
      legendFontColor: "#D1D5DB",
      legendFontSize: 15,
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setExpenseName("");
    setExpenseAmount("");
    setModalVisible(false);
  };

  // Function to generate random colors
  const generateRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Total Balance</Text>
        <Text style={styles.balance}>
          GH₵
          {(
            salary - expenses.reduce((acc, curr) => acc + curr.amount, 0)
          ).toFixed(2)}
        </Text>
        <Pressable
          style={styles.addExpenseButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addExpenseText}>Add Expense</Text>
        </Pressable>
      </View>

      {/* Pie Chart Section */}
      <View style={styles.pieChartContainer}>
        <Text style={styles.pieChartTitle}>Expense Distribution</Text>
        {expenses.length > 0 ? (
          <PieChart
            data={expenses.map((item) => ({
              name: item.name,
              population: item.amount,
              color: item.color,
              legendFontColor: item.legendFontColor,
              legendFontSize: item.legendFontSize,
            }))}
            width={screenWidth - 32} // Dynamic width
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#2D3748",
              backgroundGradientTo: "#1A202C",
              color: () => `rgba(255, 255, 255, 0.1)`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        ) : (
          <Text style={styles.noDataText}>No expenses to display</Text>
        )}
      </View>

      {/* Recent Transactions */}
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsTitle}>Recent Transactions</Text>
        {expenses.map((expense, index) => (
          <View key={index} style={styles.transactionRow}>
            <Text style={styles.transactionName}>{expense.name}</Text>
            <Text style={styles.transactionAmount}>
              - GH₵{expense.amount.toFixed(2)}
            </Text>
          </View>
        ))}
      </View>

      {/* Modal for Adding Expense */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Expense</Text>
          <TextInput
            style={styles.input}
            placeholder="Expense Name"
            placeholderTextColor="#B0B0B0"
            value={expenseName}
            onChangeText={setExpenseName}
          />
          <TextInput
            style={styles.input}
            placeholder="Expense Amount"
            placeholderTextColor="#B0B0B0"
            keyboardType="numeric"
            value={expenseAmount}
            onChangeText={setExpenseAmount}
          />
          <TextInput
            style={styles.input}
            placeholder="Salary"
            placeholderTextColor="#B0B0B0"
            keyboardType="numeric"
            value={String(salary)}
            onChangeText={(value) => setSalary(parseFloat(value) || 0)}
          />
          <Pressable style={styles.addButton} onPress={handleAddExpense}>
            <Text style={styles.addButtonText}>Add</Text>
          </Pressable>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2937", // bg-gray-900
    padding: 16,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: "#374151", // bg-gray-800
    borderRadius: 12,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700", // font-bold
    color: "#93C5FD", // text-blue-300
  },
  balance: {
    fontSize: 36,
    fontWeight: "800", // font-extrabold
    color: "#34D399", // text-green-400
    marginTop: 8,
  },
  addExpenseButton: {
    backgroundColor: "#2563EB", // bg-blue-600
    marginTop: 16,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  addExpenseText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600", // font-semibold
  },
  pieChartContainer: {
    backgroundColor: "#374151", // bg-gray-800
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  pieChartTitle: {
    fontSize: 18,
    fontWeight: "700", // font-bold
    color: "#E5E7EB", // text-gray-300
    marginBottom: 12,
  },
  noDataText: {
    fontSize: 16,
    color: "#9CA3AF", // text-gray-400
    textAlign: "center",
  },
  transactionsContainer: {
    backgroundColor: "#374151", // bg-gray-800
    borderRadius: 12,
    padding: 20,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: "700", // font-bold
    color: "#E5E7EB", // text-gray-300
    marginBottom: 16,
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  transactionName: {
    fontSize: 16,
    color: "#9CA3AF", // text-gray-400
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600", // font-semibold
    color: "#F87171", // text-red-400
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#374151", // bg-gray-800
    padding: 20,
    borderRadius: 12,
    width: "90%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700", // font-bold
    color: "#E5E7EB", // text-gray-300
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#1F2937", // bg-gray-900
    color: "#E5E7EB", // text-gray-300
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#34D399", // text-green-400
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFFFFF", // text-white
    fontWeight: "600", // font-semibold
    fontSize: 16,
  },
});

export default Home;
