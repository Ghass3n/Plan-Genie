import React, { useState } from "react";
import { ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import CountryList from "../components/country";
import AllCountries from "../components/CountryList";
import Cities from "../components/Cities";
import SaveChangesButton from "../components/Button";
import { useFonts } from "expo-font";
import PasswordInput from "../components/passwordinput";

const arrow = require('../../../assets/arrow.png');
const image = require('../../../assets/dio.jpg');
const cam = require('../../../assets/cam.png');
const droparrow = require('../../../assets/droparrow.png');
const darkeye= require('../../../assets/darkeye.png');
const grayeye= require('../../../assets/grayeye.png');

export default function ProfileEdit({ navigation }) {
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loaded] = useFonts({
    inter: require('../../../assets/fonts/inter.ttf'),
  });
if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileMainScreen")}>
          <Image source={arrow} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.editProfile}>Edit Profile</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <KeyboardAvoidingView behavior="position" >
          <TouchableOpacity>
            <View style={styles.picturecontainer}>
              <Image source={image} style={styles.image} />
              <View style={styles.circle} />
              <Image source={cam} style={styles.cam} />
            </View>
          </TouchableOpacity>
          <View style={styles.textInputsContainer}>
            <Text style={styles.text1}>Name</Text>
            <TextInput style={styles.input} value="Dio Brando" />
            <Text style={styles.text2}>Email</Text>
            <TextInput style={styles.input} value="Joestar.Slayer123@gmail.com" />
            <Text style={styles.text2}>Password</Text>
            <PasswordInput/>
            <Text style={styles.text2}>Region</Text>
            <CountryList setSelectedContinent={setSelectedContinent} />
            <Text style={styles.text2}>Country</Text>
            <AllCountries continent={selectedContinent} setSelectedCountry={setSelectedCountry} />
            <Text style={styles.text2}>City</Text>
            <Cities selectedCountry={selectedCountry} setSelectedCity={setSelectedCity} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <SaveChangesButton />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 5
  },
  textInputsContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  picturecontainer: {
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    top: 100
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
  circle: {
    position: 'absolute',
    width: 155,
    height: 155,
    borderRadius: 77.5,
    borderWidth: 1.5,
    borderColor: '#000',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    height: 150,
    width: 150,
    borderRadius: 75
  },
  cam: {
    width: 32,
    height: 32,
    top: 53,
    left: 53,
  },
  text1: {
    marginTop: 180,
    fontSize: 16,
    fontFamily:'inter'
  },
  text2: {
    marginTop: 10,
    fontSize: 16,
    fontFamily:'inter'
  },
  input: {
    borderWidth: 0.3,
    borderRadius: 5,
    borderColor: '#544C4C',
    padding: 8,
    marginTop: 10,
    width: '100%',
  },
});
