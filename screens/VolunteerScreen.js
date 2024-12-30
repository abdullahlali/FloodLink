import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VolunteerScreen = () => {
  const navigation = useNavigation();

  return(
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.header}>Get Involved</Text>
    <TouchableOpacity style={styles.donateButton} onPress={() => navigation.navigate('DonateScreen')}>
      <Text style={styles.donateButtonText}>Donate Now</Text>
    </TouchableOpacity>
    <Text style={styles.subHeader}>Volunteer here:</Text>
    <TouchableOpacity style={[styles.volunteerButton, { backgroundColor: '#378D94' }]}>
      <Text style={styles.volunteerButtonText}>ADRA Canada</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.volunteerButton, { backgroundColor: '#708090' }]}>
      <Text style={styles.volunteerButtonText}>samaritanspurse.ca</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.volunteerButton, { backgroundColor: '#B22222' }]}>
      <Text style={styles.volunteerButtonText}>Red Cross Canada</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.volunteerButton, { backgroundColor: '#228B22' }]}>
      <Text style={styles.volunteerButtonText}>Urban Reforestation</Text>
    </TouchableOpacity>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  donateButton: {
    backgroundColor: '#4682B4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
  volunteerButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  volunteerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VolunteerScreen;
