import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import animationJSON from '../../../assets/Animation - 1713814491572.json';

export default function Loading() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimationData = async () => {
      try {
       
        setAnimationData(animationJSON);
      } catch (error) {
        console.error('Error loading animation:', error);
        
      }
    };

    loadAnimationData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {animationData && (
        <LottieView
          source={animationData}
          autoPlay
          loop
          style={{ width: 70, height: 70,top:-100 }}
        />
      )}
    </View>
  );
}