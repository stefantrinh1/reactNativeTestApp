import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native'

export default function App() {
  const [goals, setGoals] = useState([])
  const [currentEnteredGoal, setCurrentEnteredGoal] = useState('')

  const textInputHandler = text => {
    setCurrentEnteredGoal(text)
  }

  const addGoals = () => {
    setGoals([
      ...goals,
      { key: Math.random().toString(), value: currentEnteredGoal },
    ])
  }

  const clearState = () => {
    setGoals([])
    setCurrentEnteredGoal('')
  }

  useEffect(() => {
    console.log(currentEnteredGoal)
    return () => {}
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={currentEnteredGoal}
          placeholder='Course Goals'
          style={styles.textInput}
          onChangeText={textInputHandler}
        />

        <Button
          title='Test Button'
          style={styles.inputButton}
          onPress={addGoals}
        />
      </View>

      <FlatList
        data={goals}
        renderItem={itemData => (
          <View style={styles.goalListItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />

      {/* 
      <View style={styles.clearStateButton}>
        <Button
          onPress={() => {
            clearState()
          }}
          title='clear State'
        />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    flexGrow: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  inputButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  goalListItem: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },

  clearStateButton: {
    paddingVertical: 10,
    // marginVertical: 20,
  },
})
