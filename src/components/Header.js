import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Header(props) {
  const [state, setstate] = useState(undefined)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 36,
    backgroundColor: 'cadetblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
