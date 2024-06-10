import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text,TextInput, ScrollView } from "react-native";
import ProfileTemplate from "../components/profiletemplate";
import { useFonts } from "expo-font";

const arrow = require('../../../assets/arrow.png');
const search = require('../../../assets/Search.png');
const jotaro = require('../../../assets/jotaro.webp');
const joseph = require('../../../assets/joseph.jpg');
const trump = require('../../../assets/trump.webp');
const cat = require('../../../assets/cat.jpeg');



export default function AddFriends({navigation}){
    const [loaded] = useFonts({
        inter: require('../../../assets/fonts/inter.ttf'),
      });
    if (!loaded) {
        return null;
      }
    
    return(
        <View>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("ProfileMainScreen")}>
                    <Image source={arrow} style={styles.arrow} />
                </TouchableOpacity>
                <Text style={styles.editProfile}>Add Friends</Text>
                
            </View>
            <View style={styles.input}><Image source={search} style={styles.search}/><TextInput style={styles.textinput} placeholder="Search"/></View>
            <ScrollView contentContainerStyle={{paddingBottom:40}}>
                <ProfileTemplate image={jotaro} name={'Jotaro Kujoh'} description={'Crusador'} navigation={navigation}/>
                <ProfileTemplate image={joseph} name={'Joseph Joestar'} description={'clown'} navigation={navigation}/>
                <ProfileTemplate image={trump} name={'donald trump'} description={'US President'} navigation={navigation}/>
                <ProfileTemplate image={cat} name={'felix hmida'} description={'cat?'} navigation={navigation}/>
                <ProfileTemplate image={cat} name={'felix hmida'} description={'cat?'} navigation={navigation}/>
                <ProfileTemplate image={cat} name={'felix hmida'} description={'cat?'} navigation={navigation}/>
                <ProfileTemplate image={cat} name={'felix hmida'} description={'cat?'} navigation={navigation}/>
                <ProfileTemplate image={cat} name={'felix hmida'} description={'cat?'} navigation={navigation}/>
                <ProfileTemplate image={cat} name={'felix hmida'} description={'cat?'} navigation={navigation}/>
                <ProfileTemplate image={cat} name={'felix hmida'} description={'cat?'} navigation={navigation}/>
                <ProfileTemplate image={cat} name={'felix hmida'} description={'cat?'} navigation={navigation}/>
            </ScrollView>
            

        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:20
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 5
    },
    arrow: {
        width: 17,
        height: 30,
        left: -110,
        top: 2,
    },
    editProfile: {
        fontSize: 20,
        left: -7,
        fontFamily:'inter'
    },
    input: {
        borderWidth: 0.3,
        borderRadius: 5,
        borderColor: '#544C4C',
        padding: 8,
        marginTop: 10,
        width: '90%',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    textinput:{
        flex:1
    },
    search:{
        width:20,
        height:20,
        marginRight:5
    }
})