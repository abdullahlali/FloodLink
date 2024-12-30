import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const handleEditProfile = () => {
    // Add functionality for editing the profile
    console.log('Edit Profile Pressed');
  };

  const handleLogout = () => {
    // Add functionality for logout
    console.log('Logout Pressed');
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture Section */}
      <View style={styles.profileHeader}>
        <Image 
          source={require('../assets/images/profile-placeholder.png')} // Placeholder image
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>Fartass Muhammad</Text>
        <Text style={styles.userEmail}>FartassMuhammad@example.com</Text>
      </View>

      {/* Action Buttons Section */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Large Logo Below Action Buttons */}
      <Image 
        source={require('../assets/images/logo.png')} // Replace with your logo image
        style={styles.largeLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCD3D9', // Matches the theme
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#71727A', // Placeholder background
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  actionButtons: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  largeLogo: {
    marginTop: 30,
    width: 150, // Adjust size for a big logo
    height: 150,
    resizeMode: 'contain', // Keeps the aspect ratio
  },
});

export default ProfileScreen;
