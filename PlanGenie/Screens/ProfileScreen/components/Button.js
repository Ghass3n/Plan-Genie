import React from 'react';
import { TouchableOpacity,View , Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const SaveChangesButton = ({ onPress }) => {
  const [loaded] = useFonts({
      inter: require('../../../assets/fonts/inter.ttf'),
    });
  if (!loaded) {
      return null;
    }
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
        <Text style={styles.buttonText}>Save changes</Text>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2111AD',
    borderRadius:7,
    alignItems: 'center',
    justifyContent: 'center',
    width:221,
    height:45,
    alignSelf:'center',
    margin:20,
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily:'inter'
  }
});

export default SaveChangesButton;
