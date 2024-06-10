import React,{ useState } from 'react';
import {} from 'react-native';
import { icons, images, SIZES, COLORS } from '../../../constants';
import { StyleSheet } from 'react-native';
import NavBar from '../../../components/navbar';

import { FONT } from "../../../constants";
import { ScrollView, Text, Image, FlatList, TextInput, View, TouchableOpacity } from 'react-native';

const premuim=require('../../../assets/premuim.png')

const Welcome = ({ navigation }) => {

  return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection:'row',paddingHorizontal:20}}>
            <View>
              <Text style={styles.welcome}>Explore</Text>
              <Text style={styles.welcomeMessage}>PlanGenie</Text>
            </View>
            <View style={{flex:1}}/>
            <View style={{justifyContent:'center',flexDirection:'row',alignItems:'flex-end'}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('PaymentMethod')}}><Image source={premuim} style={{height:40,width:40}}/></TouchableOpacity>
              <TouchableOpacity><Image style={{height:40,width:40,marginLeft:5}} source={require('../../../assets/bell.png')}/></TouchableOpacity>
            </View>
          </View>
          
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for interesting places"
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} >
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('TimerScreen')}} style={styles.imagecontainer}>
            <Image source={require('../../../assets/images/travel.png')} style={styles.image} />
          </TouchableOpacity> 
          <View style={styles.popular}>
            <Text style={styles.populartext}>Popular destinations</Text>
            <ScrollView horizontal={true} style={styles.scrollView}>
              <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen',{location:"Paris, France"})}}><Image style={styles.scrollimage} source={require('../../../assets/paris.jpg')}/></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen',{location:"New York, USA"})}}><Image style={styles.scrollimage} source={require('../../../assets/newyork.webp')}/></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen',{location:"Tokyo, Japan"})}}><Image style={styles.scrollimage} source={require('../../../assets/tokyo.webp')}/></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen',{location:"Rome, Italy"})}}><Image style={styles.scrollimage} source={require('../../../assets/rome.webp')}/></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen',{location:"Sydney, Australia"})}}><Image style={styles.scrollimage} source={require('../../../assets/sydney.jpg')}/></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen',{location:"Cairo, Egypt"})}}><Image style={styles.scrollimage} source={require('../../../assets/cairo.jpg')}/></TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:30,
    backgroundColor:'white',
  },
  topContainer:{
  },
  image: {
    position:'relative',
    width:376,
    height:512
  },
  imagecontainer:{
    marginTop:20,
  },
  scrollView:{
  },
  scrollimage:{
    width:188,
    height:240,
    borderRadius:30,
    marginRight:15,
    marginLeft:10
  },
  popular:{
    paddingTop:20,
  },
  populartext:{
    fontSize:18,
    marginLeft:10,
    marginBottom:15
  },
  userName: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
    paddingHorizontal:20
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activePlanType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activePlanType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activePlanType, item) => ({
    color: activePlanType === item ? COLORS.secondary : COLORS.gray2,
  }),
})

export default Welcome;
