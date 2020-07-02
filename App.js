import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'green',
          width: '100%',
          padding: 30,
          height: landscape ? '70%' : '30%',
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: 'dodgerblue',
            flex: 2,
          }}
        />
        <View
          style={{
            backgroundColor: 'gold',
            flex: 1,
          }}
        />
        <View
          style={{
            backgroundColor: 'tomato',
            flex: 1,
          }}
        />
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
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
