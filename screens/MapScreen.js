import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapComponent from '@/components/MapComponent';

const MapScreen = () => (
  <View style={styles.container}>
    <MapComponent style={styles.map} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCD3D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;
