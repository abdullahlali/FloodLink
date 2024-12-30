import React from 'react';
import { View, StyleSheet } from 'react-native';
import App from '../../App'; // Correct relative path to App.js

export default function AppLayout() {
  return (
    <View style={styles.container}>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Ensure the background is visible
  },
});
