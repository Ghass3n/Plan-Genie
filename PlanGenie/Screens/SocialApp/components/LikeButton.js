import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function LikeButton({ onPress, likes }) {
  const [loaded] = useFonts({
    //inter: require('../../../assets/fonts/inter.ttf'),
    //interbold: require('../../../assets/fonts/Inter-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Like {likes}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 74,
    height: 35,
    backgroundColor: '#6C21DC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'interbold',
  },
});