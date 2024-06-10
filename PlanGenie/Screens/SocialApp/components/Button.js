import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const MyButton = () => {
  const [loaded] = useFonts({
    inter: require('../../../assets/fonts/inter.ttf'),
    interbold: require('../../../assets/fonts/Inter-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Like</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    width: 75,
    height: 30,
    backgroundColor: '#6750A4', // Example background color (blue)
    borderRadius: 20, // Example border radius
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily:'interbold'
  },
});

export default MyButton;
