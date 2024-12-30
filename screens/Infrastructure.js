import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Infrastructure = () => (
  <View style={styles.container}>
    <Text>Infrastructure Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Infrastructure;
