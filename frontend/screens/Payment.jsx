import { StyleSheet, Text, View, Image , SafeAreaView, FlatList, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { categories, transactions, transfer } from '../components/Data';
import Category from '../components/Cathegory';
import SearchBar from '../components/SearchBar';
import Transaction from '../components/Transaction';

const Payment = ({ navigation, route }) => {
    const { user, loading } = useSelector(state => state.auth)
    const [name, setName] = useState(user.name);
    const [avatar, setAvatar] = useState(user.avatar.url);
    return (
        <View style={styles.containerBig}>
        <View style={styles.horizontalPaddingView}>
            <View style={styles.container}>
                <View>
                    <Text style={values.h1Style}>Hello, {name}</Text>
                    <Text style={values.pStyle}>Welcome back to your wallet!</Text>
                </View>
                <Image style={styles.image} source={{ uri: avatar}}/>
            </View>
            <View style={{height: 20}}></View>
            <SearchBar placeholder='Search' icon='search-outline' />
            <View style={{height: 20}}></View>
            
        </View>
            <View style={styles.horizontalPaddingView}>
            <Text style={values.h2Style}>Payment</Text>
            <View style={{height: 20}}></View>
                <FlatList 
                    horizontal
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Category category={item} />}
                />
            </View>
            <View style={styles.horizontalPaddingView}>
            <View style={{height: 20}}></View>
            <Text style={values.h2Style}>Transactions History</Text>
            <View style={{height: 20}}></View>
            <FlatList
                data={transactions}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Transaction transaction={item} onPress={(val) => console.warn(`Clicked ${val}`)} />}
            />
        </View>
        <View style={{height: 60}}></View>
        </View>
    );
};

export default Payment

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
        paddingTop: values.verticalPadding + 40,
        backgroundColor: 'white'
    },
    horizontalPaddingView: {
        paddingHorizontal: values.horizontalPadding,
    }
})

