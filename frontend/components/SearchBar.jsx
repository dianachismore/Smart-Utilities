import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"

const SearchBar = ({placeholder = 'Enter', icon}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color='grey' />
      <View style={{width: 10}}></View>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: 'black'
    },
    input: {
        width: '100%',
        height: '100%',
    }
})