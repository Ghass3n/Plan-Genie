import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const OutlinedButton = ({ onPress }) => {
  const [loaded] = useFonts({
    inter: require('../../../assets/fonts/inter.ttf'),
    interbold: require('../../../assets/fonts/Inter-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Dislike</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 30,
    borderRadius: 75,
    borderWidth: 0.75,
    borderColor: '#79747E',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 14,
    fontFamily:'interbold',
    color: '#6750A4',
  },
});

export default OutlinedButton;
