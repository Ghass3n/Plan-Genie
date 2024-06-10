 import { useState } from 'react';
 import { View, ScrollView, SafeAreaView,Text,Image} from 'react-native';
 import { icons } from '../../../constants';
 import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
 import { StyleSheet } from "react-native";
 import { TouchableOpacity } from 'react-native-gesture-handler';

 const PaymentMethod = ({navigation}) =>{

   return(
     <SafeAreaView style={{flex:1,backgroundColor:'#D7E5FF',justifyContent:'center',alignItems:'center',paddingTop:150 }}>
       <View style={styles.headercontainer}>
         <Text style={styles.text}>
           Payment Method
         </Text>
       </View>
       <GestureHandlerRootView>
         <TouchableOpacity style={styles.methodContainer} onPress={ ()=>{} }>
           <View style={styles.icon}>
             <Image source={icons.apple}/>
           </View>
           <View style={{flex:1}}/> 
           <View style={{marginTop:15 }} >
             <Text style={styles.name}>Apple ID</Text>
             <Text style={styles.text}>Balance:PKR2,6000</Text>
           </View>
           <View style={{flex:1}}/> 
                
         </TouchableOpacity>
         <TouchableOpacity style={styles.methodContainer} onPress={ ()=>{navigation.navigate('FeatureScreen')} }>
           <View style={styles.icon}>
             <Image source={icons.mastercard}/>
           </View>
           <View style={{flex:1}}/> 
           <View style={{marginTop:15,marginRight:76}} >
             <Text style={styles.name}>Master Card</Text>
             <Text style={styles.text}>****6356</Text>
           </View>
           <View style={{flex:1}}/> 
         </TouchableOpacity>
         <TouchableOpacity style={styles.methodContainer} onPress={ ()=>{navigation.navigate('FeatureScreen')} }>
           <View style={styles.icon}>
             <Image source={icons.visa}/>
           </View>
           <View style={{flex:1}}/> 
           <View style={{marginTop:15,marginRight:100}} >
             <Text style={styles.name}>Visa</Text>
             <Text style={styles.text}>****5645</Text>
           </View>
           <View style={{flex:1}}/> 
    
          
         </TouchableOpacity>
       </GestureHandlerRootView>
 <GestureHandlerRootView>
<TouchableOpacity style={{marginLeft:30,marginTop:40}} onPress={()=>{navigation.navigate('FeatureScreen')}}>
  <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
    Add Method
  </Text>
</TouchableOpacity>
</GestureHandlerRootView> 
     </SafeAreaView>
     )
 }


 const styles=StyleSheet.create({
   headercontainer :{
     display: 'flex',
     paddingBottom: 33,
     paddingLeft: 19,
     flexDirection: 'column',
     flexShrink : 1,
     backgroundColor: '#D7E5FF',
   },
   text: {
     color: '#2111AD', 
     fontSize: 23,
     fontStyle: 'normal',
     fontWeight: '700',
     textTransform: 'capitalize',
   },
   methodContainer : {
     flexDirection:'row',
     width: 333,
     height: 80,
     flexShrink: 0, 
     borderWidth: 1,
     borderColor: 'rgba(153, 153, 153, 0.15)',
   },
   icon:{
     flex: 1,
     justifyContent: 'center', 
     alignItems: 'flex-start',
     paddingLeft: 10,
    
   },
   name:{
     color: '#454545',
     fontSize: 22,
     fontStyle: 'normal',
     fontWeight: '700',
   }

 });

 export default PaymentMethod;
