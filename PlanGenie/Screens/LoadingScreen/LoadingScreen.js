import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Loading from './compponents/loader';
import { useFonts } from 'expo-font';
import ReloadButton from './compponents/reloadButton';

const img = require('../../assets/logo.png');


export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [showReload, setShowReload] = useState(false);
  
  const [loaded] = useFonts({
    Righteous: require('../../assets/fonts/Righteous-Regular.ttf'),
    Roboto: require('../../assets/fonts/RobotoFlex-Regular.ttf')
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowReload(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);
  const handleReload = () => {
    setLoading(true);
    setShowReload(false);
    const timer = setTimeout(() => {
      setLoading(false);
      setShowReload(true);
    }, 8000);
    return () => clearTimeout(timer);
  };

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.myStyle}>
        <Image source={img} style={styles.image} />
        <Text style={styles.title}>PLANGENIE</Text>
        {showReload ? <Text style={styles.waitText}>try again...</Text>:<Text style={styles.waitText}>wait for a few seconds...</Text>}
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        showReload &&  <ReloadButton onReload={handleReload} showReload={showReload} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#5429CC',
  },
  myStyle: {
    backgroundColor: '#5429CC',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 150,
    width: 154,
    height: 317,
    left: 10,
    top:0
  },
  title: {
    fontSize: 36,
    color: '#FFF',
    top: -80,
    fontFamily: 'Righteous',
  },
  waitText: {
    fontSize: 16,
    color: '#FFF',
    top: -45,
    fontFamily:'Roboto'
  },
  
});