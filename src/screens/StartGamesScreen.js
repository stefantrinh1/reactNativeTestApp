import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import Card from '../components/Card'
import globalStyles from '../styles/globalStyles'
export default function StartGamesScreen(props) {
  const [state, setstate] = useState(undefined)
  console.log(globalStyles)
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Game</Text>
      <Card>
        <Text style={styles.subtitle}>Select a Number</Text>
        <TextInput style={styles.inputContainer} />

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='Reset' color={globalStyles.colors.alert} />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' color={globalStyles.colors.success} />
          </View>
        </View>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    textAlign: 'center',
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },

  inputContainer: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginVertical: 20,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 320,
    maxWidth: '80%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: { width: 100 },
})
