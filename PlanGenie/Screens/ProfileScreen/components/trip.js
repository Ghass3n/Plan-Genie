import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Trip({image,place,date}) {
  return (
    <View style={styles.container}>
        <Image style={{height:50,width:50,borderRadius:17.5}} source={image}/>
        <View style={{flex:1}}/>
        <View>
            <Text style={{fontSize:18}}>{place}</Text>
            <Text style={{fontSize:12,color:'#a7a7a7'}}>{date}</Text>
        </View>
        <View style={{flex:1}}/>
    </View>
)}
const styles=StyleSheet.create({
    container:{
        width:350,
        height:65,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:30,
        paddingRight:100,
        backgroundColor:'#fafafa',
        borderWidth:0.5,
        marginBottom:15
    }
})