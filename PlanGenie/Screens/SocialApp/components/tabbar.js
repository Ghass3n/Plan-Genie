// TabBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function TabBar({ activeTab, setActiveTab }) {
  
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const [loaded] = useFonts({
    inter: require('../../../assets/fonts/inter.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Tab1' && styles.activeTab]}
        onPress={() => handleTabPress('Tab1')}
      >
        <Text style={[styles.tabText,activeTab === 'Tab1' && styles.activeText]}>Trips</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Tab2' && styles.activeTab]}
        onPress={() => handleTabPress('Tab2')}
      >
        <Text style={[styles.tabText,activeTab === 'Tab2' && styles.activeText]}>Guides</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Tab3' && styles.activeTab]}
        onPress={() => handleTabPress('Tab3')}
      >
        <Text style={[styles.tabText,activeTab === 'Tab3' && styles.activeText]}>Activities</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingTop:20,
    width:300,
    marginHorizontal:18
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#1D9BF0',
  },
  activeText:{
    fontSize: 14,
    color: '#333',
    fontFamily: 'inter',
    color:'#1D9BF0'
  },
  tabText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'inter'
  },
});
