/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Router from './Router';
import Main from './components/Main';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
{/* <Header header="Stripes - Daily BJJ Training"></Header> */ }

class App extends Component {
  render() {
    return (
      <>
        {/* <Header header="Daily BJJ" /> */}
        {/* <View style={styles.container}> */}
          {/* <LoginForm /> */}
          <Router />
        {/* </View> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
});

export default App;