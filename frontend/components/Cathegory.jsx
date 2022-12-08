import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const { width } = Dimensions.get("screen")
const Category = ({category}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(category.navigate)}>
      <View style={styles.container}>
        <Image style={styles.image} source={category.img} />
        <Text style={[values.h2Style, {marginTop: 10}]}>{category.heading}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    container: {
        width: width * 0.4,
        height: 150,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30
    },
    image: {
        width: 45,
        height: 45,
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