import { StyleSheet, Text, View, Image , ScrollView, TextInput, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons";

const PayYourRent = ({ navigation, route}) => {
    const [amount, setAmount] = useState(0);
    const [password, setPassword] = useState("");
    return (
        <ScrollView style={styles.containerBig}>
            <Text style={{ fontSize: 20, margin: 20,fontWeight: 'bold' }}>Pay Your Rent</Text>
        <View style={{justifyContent: 'center'}}>
        <TouchableOpacity style={{alignItems: 'center'}}>
            <View style={stylesChoosePhoto.container}>
                <Image style={stylesChoosePhoto.image} source={require('../assets/card.png')}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginRight: 40}}>
            <Icon name="add-circle-outline" size={20} color="black" />
            <Text style={{ fontSize: 15 }} onPress={() => navigation.navigate("paycard")}>Add another cart</Text>
        </TouchableOpacity>
        <View style={{height: 30}}></View>
        <View style={{alignItems: "center"}}>
        <View style={{ width: "75%"}}>
            <TextInput
                style={styles.input}
                placeholder="Amount"
                value={amount}
                onChangeText={setAmount}
            />
            <TextInput
                secureTextEntry
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
        </View>
        <View style={{height:30}}></View>
        <Button
            style={styles.btn}>
            <Text style={{ color: "#fff" }}>Send to your landlord</Text>
        </Button>
        </View>
        </View>
        </ScrollView>
    );
};

export default PayYourRent

const stylesChoosePhoto = StyleSheet.create({
    container: {
        width: '80%',
        height: 190,
        borderRadius: 15,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 190,
        borderRadius: 15,
    },
    icon: {
        width: 50,
        height: 50,
        marginTop: -200
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    containerBig: {
        flex: 1,
        paddingTop: values.verticalPadding + 20,
        backgroundColor: 'white'
    },
    horizontalPaddingView: {
        paddingHorizontal: values.horizontalPadding,
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 15,
        marginVertical: 15,
        fontSize: 15,
    },
    btn: {
        backgroundColor: "#900",
        padding: 5,
        width: "70%",
    },
})

