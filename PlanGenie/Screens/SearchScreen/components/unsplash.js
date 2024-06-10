import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import { debounce } from 'lodash';

const UnsplashPhotoComponent = ({ script, onUpdateImage }) => {
  const [photoUrl, setPhotoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchPhotoFromUnsplash = useCallback(debounce(async (query) => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: `Client-ID -Hbt-NZYyVBQC45u7g2EYXs-7FY2vcbEYQfgleF2cXw`, // Replace YOUR_ACCESS_KEY with your actual Unsplash Access Key
        },
        params: {
          query,
        },
      });

      if (response.data && response.data.urls && response.data.urls.regular) {
        const imageUrl = response.data.urls.regular;
        setPhotoUrl(imageUrl);
        onUpdateImage(imageUrl); // Pass the image URL to the parent component via callback
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 300,
    resizeMode: 'cover',
    borderRadius:30,
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default UnsplashPhotoComponent;
