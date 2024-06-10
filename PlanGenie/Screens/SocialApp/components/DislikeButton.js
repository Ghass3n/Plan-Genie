import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function DislikeButton({ onPress, dislikes }) {
  const [loaded] = useFonts({
    inter: require('../../../assets/fonts/inter.ttf'),
    interbold: require('../../../assets/fonts/Inter-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Dislike {dislikes}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 74,
    height: 35,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#6C21DC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#6C21DC',
    fontSize: 15,
    fontFamily: 'interbold',
  },
});