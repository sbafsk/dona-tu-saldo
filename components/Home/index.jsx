import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'

import Form from '../Form'

export default function Home() {
  return (
    <View>
      <Text variant="displaySmall">Dona tu saldo!</Text>
      <Form />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px red solid'
  }
})
