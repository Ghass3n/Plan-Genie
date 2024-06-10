import { useState } from 'react';
import { View, ScrollView, SafeAreaView,Text,Image,FlatList,TextInput,} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, FONT, icons, images,SIZES,} from '../../../constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import * as React from 'react';
import { StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function AddMethod({navigation}){
  const paymentMethod =['visa','mastercard','jazzCash'];
  const [activepaymentMethod, setactivepaymentMethod]=useState('visa');


return(
  <SafeAreaView style={{flex:1,backgroundColor:'#D7E5FF' }}>
   
    <GestureHandlerRootView >
    <TouchableOpacity onPress={()=>{navigation.navigate('PaymentMethod')}}>
       <Image source={icons.arrow} style={{marginLeft:20,marginBottom:40}} />
    </TouchableOpacity>
    </GestureHandlerRootView >
    <Stack.Screen 
      options={{
        headerStyle : {backgroundColor : '#D7E5FF'},
        headerShadowVisible: false,
        headerTitle:""}}
        
    />
        
      <View style={styles.headercontainer}>
       <Text style={styles.text}>
         Add method
       </Text>
     </View>
     <GestureHandlerRootView>
      <View>
        <FlatList
          data={paymentMethod}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.tab()}
              onPress={() => {
                setactivepaymentMethod(item);
              }}
             
            >
              <Image source={icons[item]} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ paddingHorizontal: SIZES.xxLarge}}
          horizontal
        />
      </View>
    </GestureHandlerRootView>
    <View style={styles.TextInput}>
    <TextInput
          style={styles.textHolder}
          value=""
          onChange={()=>{}}
          placeholder="Name On Card"


        />
    </View>
    <View style={styles.TextInput}>
    <TextInput
          style={styles.textHolder}
          value=""
          onChange={()=>{}}
          placeholder="Card Number"


        />
    </View>
    <View style={styles.inputContainer}>
      <View style={styles.TextInput}>
        <TextInput
              style={styles.textHolder}
              value=""
              onChange={()=>{}}
              placeholder="Card Number"


            />
      </View>
      <View style={styles.TextInput}>
        <TextInput
              style={styles.textHolder}
              value=""
              onChange={()=>{}}
              placeholder="Card Number"


            />
      </View>

    </View>
    
    <View style={styles.TextInput}>
    <TextInput
          style={styles.textHolder}
          value=""
          onChange={()=>{}}
          placeholder="ZIP/Postal Code"


        />
    </View>
    <GestureHandlerRootView >
      <TouchableOpacity style={styles.button}  >
        <Text style={[styles.text,{color:'#FFF',marginLeft:110,marginTop:10}]}>
          Add
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
  },
  tab: (activepaymentMethod, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activepaymentMethod === item ? COLORS.secondary : COLORS.gray2,
    marginLeft :15,
    
  }),
    TextInput: {
      width: 253.371,
      height: 50.172,
      borderRadius: 16.724,
      backgroundColor: '#FFF',
      flexShrink: 0,
      paddingLeft:20,
      paddingTop:10,
      marginTop:25,
      marginLeft:15,
      flex :1
      
  
    },
    textHolder: {
      
      color: '#454545',
      fontSize: 14.246,
      fontStyle: 'normal',
      fontWeight: '700',
      textTransform: 'capitalize',
    
    },
    inputContainer :{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      paddingHorizontal: 10,

    },
button: {
  width: 271,
  height: 49,
  borderRadius: 95.535 / 2,
  backgroundColor: '#2111AD',
  shadowColor: 'rgba(0, 0, 0, 0.28)',
  shadowOpacity: 0.838,
  shadowRadius: 9.218,
  elevation: 5,
  marginTop:28,
  marginBottom:40,
  marginLeft:25
}
});