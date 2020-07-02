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
          padding: 20,
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            backgroundColor: 'dodgerblue',
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: 'gold',
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: 'tomato',
            width: 100,
            height: 100,
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
