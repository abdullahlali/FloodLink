import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    {/* Logo Section */}
    <View style={styles.logoContainer}>
      <Image 
        source={require('../assets/images/logo.png')} // Ensure this path points to your logo
        style={styles.logo}
      />
    </View>

    {/* Button Section */}
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('VolunteerScreen')}
    >
      <Text style={styles.buttonText}>Get Involved</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.button, {backgroundColor:'#B22222'}]}
      onPress={() => navigation.navigate('ReportScreen')}
    >
      <Text style={styles.buttonText}>Make a Report</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BCD3D9',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
