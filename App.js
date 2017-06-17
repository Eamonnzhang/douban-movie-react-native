import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import BottomTab from './src/components/BottomTab'
import Http from './src/utils/Http'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <BottomTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
