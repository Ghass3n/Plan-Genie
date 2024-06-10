import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaginationDots = ({ numPages, activeIndex }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: numPages }).map((_, index) => (
        <Ionicons
          key={index}
          name={index === activeIndex ? 'ellipse' : 'ellipse-outline'}
          size={10}
          color={index === activeIndex ? '#FFFFFF' : '#CCCCCC'}
          style={styles.dot}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom:15
  },
  dot: {
    marginHorizontal: 5,
  },
});

export default PaginationDots;
