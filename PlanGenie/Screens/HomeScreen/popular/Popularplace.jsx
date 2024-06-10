import {useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router'
import styles from './popularplace.style'
import { COLORS,SIZES } from '../../../constants'

import Popularplacecard from'../../common/cards/popular/Popularplacecard';
const PopularPlaces = () => {
  const router=useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular destinations</Text>
        <TouchableOpacity>
          <Text>see all</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PopularPlaces