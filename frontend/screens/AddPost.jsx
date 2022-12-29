import { StyleSheet, Text, View, Image , ScrollView, TextInput, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { Button } from 'react-native-paper'
import { addPost, loadUser } from '../redux/action'

const AddPost = ({ navigation, route }) => {
    
    const {user} = useSelector(state => state.auth)
    const [name, setName] = useState(user.name);
    const [avatar, setAvatar] = useState(user.avatar.url);
    const [postDescription, setPostDescription] = useState("");
    const [postImage, setPostImage] = useState("");
    const { loading, message, error } = useSelector(state => state.message)

    const dispatch = useDispatch()

    const handleImage = () => {
        navigation.navigate("camera", {
            addPost: true
        })
    };

    useEffect(() => {

        if (route.params) {
            if (route.params.image) {
                setPostImage(route.params.image)
            }
        }

    }, [route])

    const addPostHandler = async () => {
        await dispatch(addPost(postImage,postDescription))
        dispatch(loadUser())
    }

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch({ type: "clearError" });
            dispatch({ type: "clearError" });
        }
        if (message) {
            alert(message)
            dispatch({ type: "clearMessage" });
        }
    }, [alert, error, message, dispatch])

    return (
        <ScrollView style={styles.containerBig}>
        <View style={{justifyContent: 'center'}}>
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
        <TouchableOpacity style={{alignItems: 'center'}} onPress={handleImage}>
            <View style={stylesChoosePhoto.container}>
                <Image style={stylesChoosePhoto.image} source={{ uri: postImage ? postImage : null}}/>
                {!postImage &&
                <>
                <Image style={stylesChoosePhoto.icon} source={require('../assets/uploadImage.png')}/>
                <Text style={values.h2Style}>Choose a Photo</Text>
                </>}
            </View>
        </TouchableOpacity>
        <View style={{height: 40}}></View>
        <View style={{alignItems: "center"}}>
        <View style={{ width: "75%"}}>
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={postDescription}
                onChangeText={setPostDescription}
            />
        </View>
        <View style={{height: 40}}></View>
        <Button
            style={styles.btn}
            onPress={addPostHandler}>
            <Text style={{ color: "#fff" }}>Post</Text>
        </Button>
        </View>
        </View>
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
        width: '100%',
        height: 200,
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
        paddingTop: values.verticalPadding + 40,
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

