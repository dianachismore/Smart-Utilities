import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import Post from '../components/Post';

const Home = ({ navigation }) => {
  return (
    <View style={{backgroundColor: 'white', height: '100%', paddingTop: 10}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingTop: 20,
          alignItems: 'center',
        }}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} onPress={() => navigation.navigate("addpost")}/>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>

      <ScrollView>
        <Post />
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;