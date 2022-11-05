import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Transaction = ({transaction, onPress}) => {
  return (
    <TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.leftSection}>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={transaction.img} />
          </View>
          <View>
              <Text style={values.pStyle}>{transaction.heading}</Text>
              <Text style={values.h2Style}>-{transaction.price}</Text>
          </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 70,
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingEnd: 15,
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    image: {
      width: 25,
      height: 25,
    },
    imageContainer: {
      height: 50,
      width: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
    }
})


const values = {
    horizontalPadding: 25,
    verticalPadding: 20,
    h1Style: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    h2Style: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    pStyle: {
        color: 'grey',
        fontSize: 12,
    },
    pWhiteStyle: {
        color: 'white',
        fontSize: 12,
    }
}