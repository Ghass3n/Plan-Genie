import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function CountryList({setSelectedContinent}) {
  

  const continents = [
    { key: "1", value: "Africa" },
    { key: "2", value: "Europe" },
    { key: "3", value: "South America" },
    { key: "4", value: "North America" },
    { key: "5", value: "Asia" },
    { key: "6", value: "Oceania" },
  ];

  return (
    <View>
      <SelectList
        setSelected={(val) => setSelectedContinent(val)}
        data={continents}
        save="value"
        boxStyles={styles.input}
        search={false}
        fontWeight
        inputStyles={styles.dropdownItemText}
      />
    </View>
  );
}

const styles=StyleSheet.create({
  dropdownItemText:{
    fontSize:14,
    marginLeft:-10
  },
  input:{
    borderWidth:0.3,
    borderRadius:5,
    borderColor:'#544C4C',
    padding:8,
    marginTop:10,
    width:'100%',
  },
});