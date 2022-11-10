import { StyleSheet, Text, View, Image , ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const AddPost = ({ navigation, route }) => {
    
    const { user, loading } = useSelector(state => state.auth)
    const [name, setName] = useState(user.name);
    const [avatar, setAvatar] = useState(user.avatar.url);
    
    useEffect(() => {
        if (route.params) {
            if (route.params.image) {
                setAvatar(route.params.image)
            }
        }
    }, [route])
    return (
        <ScrollView style={styles.containerBig}>
        <View style={styles.horizontalPaddingView}>
            <View style={styles.container}>
                <View>
                    <Text style={values.h1Style}>Hello, {name}</Text>
                    <Text style={values.pStyle}>What do you want to share?</Text>
                </View>
                <Image style={styles.image} source={{ uri: avatar}}/>
            </View>
            <View style={{height: 40}}></View>
        </View>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate("camera")}>
            <View style={stylesChoosePhoto.container}>
                <Image style={stylesChoosePhoto.image} source={require('../assets/uploadImage.png')} />
                <Text style={[values.h2Style, {marginTop: 10}]}>Choose a Photo</Text>
            </View>
        </TouchableOpacity>
        </ScrollView>
    );
};

export default AddPost

const stylesChoosePhoto = StyleSheet.create({
    container: {
        width: '75%',
        height: 200,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
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

