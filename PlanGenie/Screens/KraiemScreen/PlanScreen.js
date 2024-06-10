import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from "react-native";
import { useFonts } from "expo-font";

const arrow = require('../../assets/SearchScreenAssets/arrow.png');

export default function PlanScreen({ navigation, city, place, description, time, price, next, back, isFirst, isLast, photo }) {
  const [loaded] = useFonts({
    inter: require('../../assets/fonts/inter.ttf'),
    interbold: require('../../assets/fonts/Inter-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={arrow} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.editProfile}>Plan</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.skipContainer}>
          {!isFirst && (
            <TouchableOpacity onPress={back} style={{ alignSelf: 'center' }}>
              <Image source={arrow} style={styles.arrow1} />
            </TouchableOpacity>
          )}
          <View style={{ flex: 1 }} />
          <Text style={styles.time}>{time}</Text>
          <View style={{ flex: 1 }} />
          {!isLast && (
            <TouchableOpacity onPress={next} style={{ alignSelf: 'center' }}>
              <Image source={arrow} style={styles.arrow2} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.imageContainer}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.fetchedImage} />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.place}>{place}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.budget}>Budget Needed: <Text style={{ color: '#176FF2' }}>{price}</Text></Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 5,
    justifyContent: 'center',
    paddingLeft:20
  },
  skipContainer: {
    backgroundColor: '#D7E5FF',
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textContainer: {
    paddingVertical: 20
  },
  place: {
    fontSize: 25,
    fontFamily: 'inter',
    marginTop: 10,
    fontWeight:'bold',
    marginBottom:10
  },
  budget: {
    fontFamily: 'inter',
    fontSize: 19,
    marginTop: 15
  },
  arrow: {
    width: 17,
    height: 30,
    alignSelf: "center",
    position: 'absolute',
    top: -20,
    left: -165
  },
  arrow1: {
    width: 17,
    height: 30,
    marginLeft: 15
  },
  arrow2: {
    width: 17,
    height: 30,
    marginRight: 15,
    transform: [{ rotate: '180deg' }],
  },
  editProfile: {
    fontSize: 20,
    left: -7,
    top: -5
  },
  description: {
    fontSize: 18,
    fontFamily: 'inter'
  },
  time: {
    fontSize: 22,
    fontFamily: 'inter'
  },
  imageContainer: {
    width:'100%',
    height:320,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop:20,
    borderWidth:1
  },
  fetchedImage: {
    width:'100%',
    height:'100%',
    alignSelf:'center'
  }
});
