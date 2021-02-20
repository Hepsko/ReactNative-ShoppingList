import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import {Navigation} from './src/routes/shoppingListStack'
LogBox.ignoreAllLogs(true);


export default function App() {
  return (<Navigation/>);
}
