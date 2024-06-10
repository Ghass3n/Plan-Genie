import React from 'react';
import { View, TouchableOpacity, StyleSheet,Image } from 'react-native';

export default function Pictures ({ onPress, img }) {

    return (
        <TouchableOpacity onPress={onPress} style={{marginRight:10}}>
            <Image style={{ height: 74, width: 72, borderRadius: 16}} source={img} />
        </TouchableOpacity>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
      overflow: 'hidden',
      borderRadius: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3, // For Android
    },
    button: {
      padding: 10,
      backgroundColor: '#3498db',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      transform: [{ scale: 1 }], // Initial scale
    },
    buttonHovered: {
      transform: [{ scale: 1.05 }], // Slightly larger scale on hover
    },
  });
  