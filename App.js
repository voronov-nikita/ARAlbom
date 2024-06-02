// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ARComponent from './lib/ARComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ARComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
