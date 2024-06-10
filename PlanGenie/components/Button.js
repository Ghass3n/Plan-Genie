import React from 'react';
import { TouchableOpacity,View , Text, StyleSheet } from 'react-native';

const Button = ({ name,screen, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(screen)}
      activeOpacity={0.8}
    >
        <Text style={styles.buttonText}>{name}</Text>
      
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
  }
});

export default Button;
