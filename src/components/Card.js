import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Card(props) {
  const [state, setstate] = useState(undefined)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <View style={{ ...styles.container, ...props.styles }}>
      {props.children}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
})
