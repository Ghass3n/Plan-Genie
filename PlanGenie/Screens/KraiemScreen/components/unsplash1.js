import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import { debounce } from 'lodash';
import { useFonts } from 'expo-font';

const UnsplashPhotoComponent1 = ({ script,place }) => {
  const [photoUrl, setPhotoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [loaded] = useFonts({
    inter: require('../../../assets/fonts/inter.ttf'),
    interbold: require('../../../assets/fonts/Inter-Bold.ttf'),
  });
  if (!loaded) {
      return null;
  }
  const fetchPhotoFromUnsplash = useCallback(debounce(async (query) => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: `Client-ID NK-iai1M4FzHuM8X731EPPINTpRzyaepdLH1-f2M4ug`, // Replace YOUR_ACCESS_KEY with your actual Unsplash Access Key
        },
        params: {
          query,
        },
      });

      if (response.data && response.data.urls && response.data.urls.regular) {
        const imageUrl = response.data.urls.regular;
        setPhotoUrl(imageUrl);
      }
    } catch (error) {
      console.error('Error fetching photo:', error);
    } finally {
      setIsLoading(false);
    }
  }, 1000), []); // Adjust the debounce delay as necessary

  useEffect(() => {
    if (script) {
      fetchPhotoFromUnsplash(script);
    }
  }, [script, fetchPhotoFromUnsplash]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {photoUrl ? (
          <Image source={{ uri: photoUrl }} style={styles.image} />
      ) : (
        <Text style={styles.errorText}>No photo found for '{script}'</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:40
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius:30,
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  place:{
    position:'absolute',
    color:'white',
    marginTop:245,
    marginLeft:15,
    fontSize:30
  },
  
});

export default UnsplashPhotoComponent1;
