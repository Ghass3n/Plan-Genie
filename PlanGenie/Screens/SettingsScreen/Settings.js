import React,{createContext, useContext} from 'react';
import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { AuthContext } from '../../context/AuthContext';



const profile =require('../../assets/profile.png');
const lock =require('../../assets/lock.png');
const privacy = require('../../assets/privacy.png');
const notification = require('../../assets/notification.png');
const help=require('../../assets/help.png');
const terms=require('../../assets/terms.png');
const sub=require('../../assets/sub.png');
const log=require('../../assets/log.png');
const add=require('../../assets/add.png');
const report=require('../../assets/report.png');




const Settings = ({navigation}) => {
    const {logout} =useContext(AuthContext);
  return (
    <View style={styles.container}>
    
        <Text style={{paddingBottom:30,alignSelf:'center',fontSize:24,fontWeight:700}}>Settings </Text>
        <Text style={{textAlign:'left',paddingBottom:10,fontSize:16,fontWeight:600}} >Account </Text>
        <View style={styles.accountContainer}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ProfileEditScreen')}} style={styles.button}>
            <Image source={profile} style={styles.image}/>
            <Text> edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
             <Image source={privacy} style={styles.image}/>
            <Text> security</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={notification} style={styles.image}/>
            <Text> Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={lock} style={{height:30,width:24,marginLeft:5,marginRight:22}}/>
            <Text> Privacy</Text>
          </TouchableOpacity>
        </View>

        <Text style={{textAlign:'left',paddingBottom:10,paddingTop:10,fontSize:16,fontWeight:600}} >Support & about </Text>

        <View style={styles.supportContainer} >
          <TouchableOpacity style={styles.button}>
            <Image source={sub} style={styles.image}/>
            <Text> My Subscribtion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
             <Image source={help} style={styles.image}/>
            <Text> Help & support</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={terms} style={styles.image}/>
            <Text> Terms & policies</Text>
          </TouchableOpacity>
        </View>

        <Text style={{textAlign:'left',paddingBottom:10,paddingTop:10,fontSize:16,fontWeight:600}} >Actions </Text>
        <View style={styles.supportContainer} >
          <TouchableOpacity style={styles.button}>
            <Image source={report} style={styles.image}/>
            <Text> Report a problem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
             <Image source={add} style={styles.image}/>
            <Text> Add account</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{logout()}} style={styles.button}>
            <Image source={log} style={styles.image}/>
            <Text> Log out</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingTop:50,
    padding:20,
  },
  accountContainer:{
      width:'100%',
      height: 172,
      borderRadius: 6,
      backgroundColor: 'rgba(36, 39, 96, 0.05)',
      padding:10
  
  }, 
  supportContainer:{
    width:'100%',
      height: 132,
      borderRadius: 6,
      backgroundColor: 'rgba(36, 39, 96, 0.05)',
      padding:10
  },
  text:{
      fontSize:16,
      fontWeight:600
  },
     
  image:{
    width:30,
    height:30,
    marginRight:20

  },
  button:{
    flexDirection:'row',
    paddingBottom:10,
    alignItems:'center'
  }


})
export default Settings;