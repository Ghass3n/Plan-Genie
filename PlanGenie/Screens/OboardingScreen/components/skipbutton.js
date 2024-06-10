import React from 'react';
import { View, Image, StyleSheet,Text, Button, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
export default function FlatButton2({ text, screen, navigation }) {
  const [loaded] = useFonts({
    FatFace: require('../../../assets/fonts/AbrilFatface-Regular.ttf'),
    DMsans: require('../../../assets/fonts/DMSans-Thin.ttf'),
    Montserrat: require('../../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  });
  
    if (!loaded) {
      return null;
    }
  
    return (
      <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    button: {
        paddingVertical:10,
        paddingHorizontal:10,
    },
    buttonText: {
        color: 'white',
        fontSize:22,
        textAlign:'center',
        fontFamily:'Montserrat',
    }
});