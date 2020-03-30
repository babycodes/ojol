import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.centeringView}>
      <Text> Hello React Native Ojol</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeringView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;