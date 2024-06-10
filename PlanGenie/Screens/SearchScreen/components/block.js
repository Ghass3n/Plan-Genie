import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const star = require('../../../assets/SearchScreenAssets/star.png');


export default function Block({name,description,profileimg,numberOfStars}) {
    const firstLetter = name ? name.charAt(0) : '';
    const starsArray = Array.from({ length: numberOfStars }, (_, index) => index);
    return(
            <TouchableOpacity style={styles.container}>
                    {profileimg ? (
                        <Image source={profileimg} style={styles.profileimg}/>
                    ) :(
                        <View style={styles.profileimg1}><Text style={styles.profileletter}>{firstLetter}</Text></View>
                    )}
                    <View style={styles.textcontainer}>
                        <View style={styles.namecontainer}>
                            <Text style={{fontSize:20}}>{name}</Text>
                            <View style={{flex:1}}/>
                            <View style={styles.starcontainer}>
                            {starsArray.map((_, index) => (
                                <Image source={star} key={index} style={styles.star} />
                            ))}
                            </View>
                        </View>
                        <Text style={styles.description}>{description}</Text>
                    </View>
            </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'95%',
        height:105,
        flexDirection:'row',
        backgroundColor:'white',
        elevation:15,
        borderColor: 'transparent',
        marginBottom:10,
        alignItems:'center',
        alignSelf:'center'
    },
    textcontainer:{
        height:'80%',
        flex:1,
        margin:5
    },
    starcontainer:{
        flexDirection:'row',
        marginRight:5,
        width:140
    },
    star:{
        height:28,
        width:28
    },
    description:{
        fontSize:16,
        color:'#868686',
        marginTop:5,
        
    },
    namecontainer:{
        justifyContent:'flex-start',
        flexDirection:'row'
    },
    profileimg:{
        width:64,
        height:80,
        marginLeft:10
    },
    profileimg1:{
        width:64,
        height:80,
        backgroundColor:'blue',
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center'
    },
    profileletter:{
        fontSize:24,
        color:'white'
    },
    txt8:{
        fontWeight:'bold',
        fontSize:24,
        color:'white',
        borderWidth:1,
        backgroundColor:'#2111AD',
        textAlign:'center', 
        textAlignVertical:'center',
        borderColor:'#2111AD',
        width:64,
        height:80,
      },
})