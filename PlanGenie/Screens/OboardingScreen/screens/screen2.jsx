import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import FlatButton1 from '../components/nextbutton';
import FlatButton3 from '../components/backbutton';
import PaginationDots from '../components/pagination';

const Img1 = require('../../../assets/image2.png');

export default function Screen1({ navigation }) {
  const [loaded] = useFonts({
    FatFace: require('../../../assets/fonts/AbrilFatface-Regular.ttf'),
    DMsans: require('../../../assets/fonts/DMSans-Thin.ttf'),
    Montserrat: require('../../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={Img1} style={styles.image} />
      </View>
      <View style={styles.container1}>
        <Text style={styles.text}>Create Your Plans</Text>
        <Text style={styles.text1}>Start here now!</Text>
      </View>
      <View style={styles.container2}>
      <FlatButton3 text="Back" navigation={navigation} />
        <View style={{ flex: 1 }} />
        <PaginationDots numPages={3} activeIndex={1} />
        <View style={{ flex: 1 }} />
        <FlatButton1 text='Next' screen='Screen3' navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C21DC',
    alignItems: 'center',
    paddingTop: 100,
  },
  container1: {
    alignItems: 'center',
  },
  container2: {
    paddingTop: 165,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    top:60
  },
  image: {
    width: 275,
    height: 275,
  },
  text: {
    color: '#fff',
    fontSize: 34,
    marginTop: 40,
    fontFamily: 'FatFace',
  },
  text1: {
    color: '#fcf5ff',
    fontSize: 20,
    fontFamily: 'DMsans',
    marginTop: 30,
  },
});
