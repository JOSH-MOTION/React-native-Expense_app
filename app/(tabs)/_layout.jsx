import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Tabs, Redirect } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'



const Tabslatout = () => {
   const tabBarIcon = ({ color, size }) => (
    <Ionicons name="home" color={color} size={size} />
  );

  return (
    <>
    <Tabs>
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tabs.Screen name="savingsScreen" options={{
        title: "Savings",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="card" color={color} size={size} />
        ),
      }} />
      <Tabs.Screen name="profile" options={{
        title: "Profile",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }} />
      <Tabs.Screen name="reports" options={{
        title: "Reports",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="stats-chart" color={color} size={size} />
        ),
      }} />
      <Tabs.Screen name="expensesScreen" options={{
        title: "expenses",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="wallet" color={color} size={size} />
        ),
      }} />

    </Tabs>
    
    </>
  )
}

export default Tabslatout

const styles = StyleSheet.create({})