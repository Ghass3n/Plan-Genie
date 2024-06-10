import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
const Img=require('../../assets/images/new.jpg');

export default function Feature({navigation}) {
  const [loaded] = useFonts({
    inter: require('../../assets/fonts/inter.ttf')
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={styles.container5}><Text style={styles.text10}>X</Text></View>
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>Share your buisinesses/events</Text>
      </View>
      <View><Text style={styles.text1}>free trial available</Text><Text style= {styles.text2}>Get <Text style={{color:'#196EEE'}}>1 month</Text> for free</Text></View>
      <View style={styles.container2}><Text style={styles.text3}>$15 <Text style={styles.text4}>/mo</Text></Text><Text style={styles.text5}>Excl. Vat</Text></View>
      <View style={styles.line}/>
      <View><Text style={styles.text6}>Make the most out of your app usage by sharing your buisiness</Text></View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Free Trial</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.text7}>Features Included:</Text>
        <View style={styles.container4}><Text style={styles.text8}>Targeted Ads   </Text><Image source={Img} style={styles.img}/></View>
        <View style={styles.container4}><Text style={styles.text8}>Interaction Reviews   </Text><Image source={Img} style={styles.img}/></View>
        <View style={styles.container4}><Text style={styles.text8}>Seller Ratings   </Text><Image source={Img} style={styles.img}/></View>
        <View style={styles.container4}><Text style={styles.text8}>Location Based Event Planning   </Text><Image source={Img} style={styles.img}/></View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop:40
  },
  container2:{
    paddingTop:35
  },
  container3:{
    backgroundColor: '#2111AD',
    borderRadius: 5,
    textAlign:'center',
    width:10,
  },
  container4:{
    flexDirection:'row',
    alignItems:'center'
  },
  container5:{
    backgroundColor: '#2111AD',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width:50,
    height:50,
    left:260,
    top:-10
  },
  text: {
    fontSize:28,
    fontWeight:'bold',
    fontFamily:'inter'
  },
  text1: {
    fontSize: 17,
    marginBottom:-4,
    fontFamily:'inter'
  },
  text2: {
    fontSize: 17,
    fontFamily:'inter'
  },
  text3:{
    fontSize:50,
    fontWeight:'bold',
    fontFamily:'inter'
  },
  text4:{
    fontSize:20,
    color:'#AEAEAE',
    fontFamily:'inter'
  },
  text5: {
    fontSize:17,
    fontWeight:'500',
    marginTop:-2,
    fontFamily:'inter'
  },
  text6:{
    fontSize:17.5,
    marginTop:10,
    fontFamily:'inter'
  },
  text7:{
    fontSize:21,
    fontWeight:'bold',
    marginTop:30,
    fontFamily:'inter'
  },
  text8:{
    fontSize:16,
    marginTop:10,
    fontFamily:'inter'
  },
  text9:{
    color:'white',
    fontFamily:'inter'
  },
  text10:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    fontFamily:'inter'
  },
  img:{
    height:15,
    width:30,
    top:7
  },
  line: {
    width: '100%',
    height: 1, 
    backgroundColor: '#AEAEAE',
    marginTop:15
  },
  button: {
    backgroundColor: '#2111AD',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'inter'
  },
  close:{
    padding:0,
    backgroundColor:'blue'
  },
});