import React from 'react';
import { View, FlatList } from 'react-native';
import Pictures from './button';


const PicturesList = ({picturesData}) => {
    const renderItem = ({ item }) => (
      <Pictures img={item.img} onPress={item.onPress} />
    );
  
    return (
      <FlatList
        data={picturesData}
        style={{paddingHorizontal:15}}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true} // Render pictures horizontally
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
      />
    );
  };
  
  export default PicturesList;
  