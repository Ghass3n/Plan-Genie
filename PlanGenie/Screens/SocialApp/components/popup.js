import React from 'react';
import { Modal, View, Text, StyleSheet,Button,TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import Postbutton from './Button1';
import Cancelbutton from './Button2';
import { useFonts } from "expo-font";
import * as ImagePicker from 'expo-image-picker';
import { generateUploadURL } from './s3upload';


const gallery=require('../../../assets/gallery.png');
const hook=require('../../../assets/hook.png');
const location1=require('../../../assets/location.png');
const goldenstar=require('../../../assets/star.png');
const graystar=require('../../../assets/graystar.png');

const PopupModal = ({ visible, onClose,setTitle,setDescription,setRating,userId,title,description,image,location,rating,setPhoto,setImageURL,photo}) => {
  

  const handlePost = async () => {
    try {
      const postData = {
        userId,
        title,
        description,
        image,
        location,
        rating
      };
      const response = await axios.post('http://192.168.1.19:3000/posts', postData);

      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  

  const handleStarPress = (starCount) => {
    setRating(starCount);
  };
  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.cancelled) {
        await setPhoto(result.assets[0].uri);
        const url = await generateUploadURL();
        console.log(url);
  
        // Fetch the image and convert it to a Blob
        const response = await fetch(result.assets[0].uri);
        const blob = await response.blob();
  
        // Upload the Blob to S3
        await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'image/jpeg',
          },
          body: blob,
        });
  
        const imageURL = url.split('?')[0];
        console.log(imageURL);
        setImageURL(imageURL); // You should call a function or update state to save the imageURL
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };
  
  

  const [loaded] = useFonts({
    inter: require('../../../assets/fonts/inter.ttf'),
    interbold: require('../../../assets/fonts/Inter-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <Text style={styles.title}>Create Post:</Text>
          <TextInput style={styles.posttitle} placeholder='Title' onChangeText={setTitle} placeholderTextColor={'black'}/>
          <View style={styles.postcontent}>
            <TextInput style={styles.postcontent1} placeholder='Body' onChangeText={setDescription} placeholderTextColor={'black'} multiline={true}/>
            {image ? <Text>image uploaded</Text>: <></>}
            <View style={styles.bodyicons}>
              <TouchableOpacity onPress={pickImage}><Image source={gallery} style={styles.icon1}/></TouchableOpacity>
              <TouchableOpacity><Image source={hook} style={styles.icon2}/></TouchableOpacity>
              <TouchableOpacity><Image source={location1} style={styles.icon3}/></TouchableOpacity>
            </View>
          </View>
          <Text style={{alignSelf:'center',textAlign:'center',fontFamily:'inter'}}>How likely would you recommend this to your friends?</Text>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => handleStarPress(1)}>
                <Image source={rating >= 1 ? goldenstar : graystar} style={styles.star} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleStarPress(2)}>
                <Image source={rating >= 2 ? goldenstar : graystar} style={styles.star} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleStarPress(3)}>
                <Image source={rating >= 3 ? goldenstar : graystar} style={styles.star} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleStarPress(4)}>
                <Image source={rating >= 4 ? goldenstar : graystar} style={styles.star} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleStarPress(5)}>
                <Image source={rating >= 5 ? goldenstar : graystar} style={styles.star} />
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
            <Cancelbutton onPress={onClose}/>
            <Postbutton onPress={handlePost}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles=StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.5)' 
  },
  maincontainer:{
    backgroundColor: '#FEF7FF', 
    padding: 15, 
    borderRadius: 10, 
    height:469,
    width:344,
    alignItems:'center'
  },
  bodyicons:{
    flexDirection:'row'
  },
  icon1:{
    height:20,
    width:27.62
  },
  icon2:{
    height:20,
    width:22.4
  },
  icon3:{
    height:20,
    width:30,
    marginHorizontal:-3
  },
  star:{
    height:30,
    width:30,
    marginHorizontal:3,
    marginTop:6,
    marginBottom:10
  },
  title:{
    fontSize:20,
    alignSelf:'center',
    marginBottom:15,
    fontFamily:'interbold'
  },
  posttitle:{
    backgroundColor:'white',
    borderWidth:2,
    width:231,
    height:35,
    borderRadius:10,
    paddingHorizontal:12,
    marginBottom:20,
    marginLeft:-55
  },
  postcontent:{
    backgroundColor:'white',
    borderWidth:2,
    width:286,
    height:196,
    borderRadius:10,
    padding:8,
    marginBottom:20,
  },
  postcontent1:{
    flex:1,
    textAlignVertical:'top',
  }
})


export default PopupModal;
