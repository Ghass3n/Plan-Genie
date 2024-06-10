import React, { useEffect, useState } from "react";
import PlanScreen from "./PlanScreen";
import { View, StyleSheet } from "react-native";
import UnsplashPhotoComponent1 from "./components/unsplash1";
import axios from 'axios';

export default function MainPlanScreen({ navigation, route }) {
  const { city, dataList } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState(dataList[0].titleActivity);
  const [time, setTime] = useState(dataList[0].time);
  const [cost, setCost] = useState(dataList[0].cost);
  const [description, setDescription] = useState(dataList[0].description);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(dataList.length === 1);
  const [photos, setPhotos] = useState(Array(dataList.length).fill(null));

  useEffect(() => {
    const fetchPhotoFromUnsplash = async (query, index) => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: `Client-ID NK-iai1M4FzHuM8X731EPPINTpRzyaepdLH1-f2M4ug`,
          },
          params: {
            query,
          },
        });

        if (response.data && response.data.urls && response.data.urls.regular) {
          setPhotos(prevPhotos => {
            const newPhotos = [...prevPhotos];
            newPhotos[index] = response.data.urls.regular;
            return newPhotos;
          });
        }
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    dataList.forEach((item, index) => {
      fetchPhotoFromUnsplash(item.titleActivity, index);
    });
  }, [dataList]);

  const next = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < dataList.length) {
      setCurrentIndex(newIndex);
      setTitle(dataList[newIndex].titleActivity);
      setTime(dataList[newIndex].time);
      setCost(dataList[newIndex].cost);
      setDescription(dataList[newIndex].description);
      setIsFirst(newIndex === 0);
      setIsLast(newIndex === dataList.length - 1);
    }
  };

  const back = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
      setTitle(dataList[newIndex].titleActivity);
      setTime(dataList[newIndex].time);
      setCost(dataList[newIndex].cost);
      setDescription(dataList[newIndex].description);
      setIsFirst(newIndex === 0);
      setIsLast(newIndex === dataList.length - 1);
    }
  };

  return (
    <PlanScreen
      navigation={navigation}
      next={next}
      back={back}
      city={city}
      place={title}
      time={time}
      price={cost}
      description={description}
      isFirst={isFirst}
      isLast={isLast}
      photo={photos[currentIndex]} // Pass the current photo to PlanScreen
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
