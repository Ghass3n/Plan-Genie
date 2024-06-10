import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,ActivityIndicator } from 'react-native';
import Block from './components/block';
import PicturesList from './components/pictureslist';
import OpenMap from './components/openmap';
import UnsplashPhotoComponent from './components/unsplash';
import axios from 'axios';


const img1 = require('../../assets/SearchScreenAssets/star.png');
const img2 = require('../../assets/SearchScreenAssets/v.png');
const img22 = require('../../assets/SearchScreenAssets/v1.png');
const img3_2 = require('../../assets/SearchScreenAssets/Shinjuku-Koen-min.jpg');
const img3_3 = require('../../assets/SearchScreenAssets/tokyo sky tree.jpg');
const img3_4 = require('../../assets/SearchScreenAssets/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg');
const img3_5 = require('../../assets/SearchScreenAssets/tokyo tower.jpg');
const img4 = require('../../assets/SearchScreenAssets/flesh.png');
const arrow= require('../../assets/SearchScreenAssets/arrow.png');
const dio=require('../../assets/dio.jpg');






const picturesData = [
    { id: '1', img: img3_2, onPress: () => console.log('Image 1 clicked') },
    { id: '2', img: img3_3, onPress: () => console.log('Image 2 clicked') },
    { id: '3', img: img3_4, onPress: () => console.log('Image 3 clicked') },
    { id: '4', img: img3_5, onPress: () => console.log('Image 4 clicked') },
    { id: '5', img: img3_5, onPress: () => console.log('Image 4 clicked') },
    { id: '6', img: img3_5, onPress: () => console.log('Image 4 clicked') },
    { id: '7', img: img3_5, onPress: () => console.log('Image 4 clicked') },
    { id: '8', img: img3_5, onPress: () => console.log('Image 4 clicked') },
    { id: '9', img: img3_5, onPress: () => console.log('Image 4 clicked') },
    { id: '10', img: img3_5, onPress: () => console.log('Image 4 clicked') },
    { id: '11', img: img3_5, onPress: () => console.log('Image 4 clicked') },
];

export default function SearchScreen({navigation,route}) {
  const {location} =route.params;
  const img0=null;
  const handleExploreNow = () => {
    console.log('Explore now clicked');
  };
  const [expanded, setExpanded] = useState(false);

  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await axios.post('http://192.168.43.216:3000/description', { location }); // Replace with your API endpoint
        setDescription(response.data.Description);
          setLoading(false);
        
        console.log("res data is here: "+response.data.Description)
      } catch (error) {
        console.error('Error fetching description:', error);
        setLoading(false);
      }
    };

    fetchDescription();
  }, [location]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const [imageObject, setImageObject] = useState({});

  const handleUpdateImage = (imageUrl) => {
    setImageObject({
      ...imageObject,
      imageUrl: imageUrl,
    });
  };
  return (
    loading ? 
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size="large" color="#0000ff" /></View>
       :
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => {navigation.navigate("Main")}}>
            <Image source={arrow} style={styles.arrow} />
          </TouchableOpacity>
          <Text style={styles.editProfile}>Browse</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <UnsplashPhotoComponent script={location} onUpdateImage={handleUpdateImage} />
          </View>
          <View>
            <View style={styles.container0}>
              <Text style={styles.txt1}>{location}</Text>
              <View style={{ flex: 1 }} />
              <OpenMap locationName={location} />
            </View>

            <Text style={{ marginLeft: 15 }}>
              <Image style={styles.image1} source={img1} /> 4.5 (355 Reviews)
            </Text>
            <Text style={styles.txt3} numberOfLines={expanded ? undefined : 4}>
              {description}
            </Text>
            {description.length > 400 && (
              <TouchableOpacity onPress={toggleExpanded}>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 15 }}>
                  <Text style={styles.txt4}>{expanded ? 'Read less' : 'Read more'}</Text>
                  <Image style={{ width: 24, height: 24 }} source={expanded ? img22 : img2} />
                </View>
              </TouchableOpacity>
            )}

            <View>
              <Text style={styles.txt5}>Browse Tour options</Text>
              <PicturesList picturesData={picturesData} />
              <TouchableOpacity onPress={()=>{navigation.navigate("TimerScreen")}} style={{ alignSelf: 'flex-end', marginRight: 15 }}>
                <Text style={styles.txt6}>
                  Explore Now <Image style={{ width: 24, height: 24 }} source={img4} />
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 25, marginHorizontal: 20 }}>
              <Text style={{ fontSize: 40, fontWeight: 'bold', alignSelf: 'flex-end', top: 20, left: -20 }}>4.5</Text>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Reviews</Text>
              <Text style={styles.txt7}>322+ reviews</Text>
            </View>
            <Block name={'Davion'} description={'place is so amazing'} numberOfStars={3} />
            <Block name={'Molka'} description={'very cool'} numberOfStars={5} />
            <Block name={'Dio'} description={'malla jappon w malla heyya'} numberOfStars={4} profileimg={dio} />
            <Text>TOO DOWN</Text>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom:5,
    justifyContent:'center'
  },
  arrow: {
    width: 17,
    height: 30,
    alignSelf:"center",
    position:'absolute',
    top:-20,
    left:-145
  },
  editProfile: {
    fontSize: 20,
    left: -7,
    top:-5
  },
  container: {
    flex: 1,
  },
  container0: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft:15
  },
  txt1: {
    textTransform: 'uppercase',
    color: '#232323',
    fontSize: 24,
    fontWeight: 'bold',
  },
  txt3: {
    fontSize: 15,
    marginTop: 15,
    marginHorizontal:15
  },
  txt4: {
    fontSize: 14,
    color:'#196EEE'
  },
  txt5:{
    height:50,
    width:191,
    fontSize:18,
    fontWeight:'700',
    color:'#232323',
    marginTop:30,
    marginLeft:15
  },
  txt6:{
    fontSize:16,
    color:'white',
    borderWidth:1,
    backgroundColor:'#176FF2',
    paddingTop:11,
    textAlign:'center', 
    textAlignVertical:'top',
    borderColor:'#176FF2',
    marginLeft:105,
    marginTop:18,
    height:56,
    width:223,
    borderRadius:16,
  },
  txt7:{
    fontWeight:'bold',
    fontSize:16,
    color:'white',
    borderWidth:1,
    backgroundColor:'#5D5DFF',
    textAlign:'center', 
    textAlignVertical:'center',
    borderColor:'#5D5DFF',
    borderRadius:200,
    padding:8,
    width:117,
    height:36,
    alignSelf:'flex-end',
    bottom:10,
    left:10
  },
  txt8:{
    fontWeight:'bold',
    fontSize:24,
    color:'white',
    borderWidth:1,
    backgroundColor:'#2111AD',
    textAlign:'center', 
    textAlignVertical:'center',
    borderColor:'#2111AD',
    width:64,
    height:80,
    bottom:88
  },
  image0:{
    height:340,
    width:335,
    borderRadius:20,
    alignSelf:'center',
    marginTop:10
  },
  image1:{
    height:11.33,
    width:12,
  },
})