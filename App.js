// ? ===============================
// ? ==== Third Party Imports ======
// ? ===============================

import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

// ? ===============================
// ? ====== Local Components =======
// ? ===============================

import Header from './src/components/Header'
import StartGamesScreen from './src/screens/StartGamesScreen'

export default function App(props) {
  const [state, setstate] = useState(undefined)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <View style={styles.container}>
      <Header title='Guess A Number' />
      <StartGamesScreen />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {},
})
