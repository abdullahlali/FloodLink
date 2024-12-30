import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DonateScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Donate</Text>
    <TouchableOpacity style={[styles.button, { backgroundColor: '#378D94' }]}>
      <Text style={styles.buttonText}>Donate Food</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, { backgroundColor: '#708090' }]}>
      <Text style={styles.buttonText}>Donate Clothes</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, { backgroundColor: '#B22222' }]}>
      <Text style={styles.buttonText}>Donate Supplies</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, { backgroundColor: '#228B22' }]}>
      <Text style={styles.buttonText}>Donate Money</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DonateScreen;
