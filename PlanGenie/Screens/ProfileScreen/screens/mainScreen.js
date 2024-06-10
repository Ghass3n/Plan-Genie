import React, { useState,useContext, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '../components/navbar';
import { useFonts } from "expo-font";
import NavBar from '../../../components/navbar';
import { set } from 'lodash';
import Trip from '../components/trip';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import { ip } from '../../../constants/ip';
import Post from '../../SocialApp/components/post';

const background=require('../../../assets/theworld.jpeg');
const image= require('../../../assets/dio.jpg');
const gps= require('../../../assets/gps.png');
const svg1=require('../../../assets/svg.png');
const premuim=require('../../../assets/premuim.png');



export default function MainScreen({navigation}){
  const { userId } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('Tab1');
  const [data,setData]=useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        // Make a GET request to the backend endpoint to retrieve user posts
        const response = await axios.get(`/api/getuserposts/${userId}`);

        // If the request is successful, set the retrieved user posts in state
        setUserPosts(response.data);
        setLoading(false);
      } catch (error) {
        // If an error occurs during the request, set the error state
        setError(error.response.data.error);
        setLoading(false);
      }
    };

    // Call the fetchUserPosts function when the component mounts
    fetchUserPosts();
    async function getUser() {
      try {
        const response = await axios.get(`http://${ip}:3000/users/${userId}`);
        if (response.status === 200) {
          setData(response.data);
        } else {
          Alert.alert('Error', 'User not found');
        }
      } catch (error) {
        console.error('Error retrieving user:', error);
        Alert.alert('Error', 'Internal server error');
      }
    }

    if (userId) {
      getUser();
    }
  }, [userId]);

  const [loaded] = useFonts({
    inter: require('../../../assets/fonts/inter.ttf'),
    interbold: require('../../../assets/fonts/Inter-Regular.ttf'),
    });
  if (!loaded) {
      return null;
    }
  
  return(
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <ScrollView>
        <View style={{padding:40}}>
        {data && data.backgroundimage && ( // Added a check here
          <Image source={ {uri: data.backgroundimage}} style={styles.bkg}/>
        )}
        <View style={styles.picturecontainer}>
          <Image source={svg1} style={styles.image1}/>
          {data && data.profileimage && ( // Added a check here
            <Image source={{uri: data.profileimage}} style={styles.image}/>
          )}
          <View style={styles.circle}/>
        </View>
        {data && ( // Added a check here
          <View style={styles.namecontainer}>
            <Text style={styles.name}>{data.username}</Text>
            <Text style={{fontFamily:'inter'}}>{data.description}</Text>
            <View style={styles.locationcontainer}>
              <Image source={gps} style={styles.gps}/>
              <Text style={{fontFamily:'inter'}}>{data.location}</Text>
            </View>
          </View>
        )}
        {data && ( // Added a check here
          <View style={styles.infocontainer}>
            <View style={styles.infocontainer1}>
              <Text style={styles.infotext}>12k</Text>
              <Text style={styles.infotext2}>followers</Text>
            </View>
            <View style={{flex:1}}/>
            <View style={styles.infocontainer1}>
              <Text style={styles.infotext}>135</Text>
              <Text style={styles.infotext2}>following</Text>
            </View>
            <View style={{flex:1}}/>
            <View style={styles.infocontainer1}>
              <Text style={styles.infotext}>{data.likes}</Text>
              <Text style={styles.infotext2}>likes</Text>
            </View>
          </View>
        )}
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileEditScreen')}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddFriendsScreen')}>
            <Text style={styles.buttonText}>Add Friends</Text>
          </TouchableOpacity>
        </View>
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'Tab1' && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Trip image={require('../../../assets/paris.jpg')} place={'Paris, France'} date={'January, 2017'}/>
            <Trip image={require('../../../assets/rome.webp')} place={'Rome, Italy'} date={'October, 2022'}/>
            <Trip image={require('../../../assets/sydney.jpg')} place={'Sydney, Australia'} date={'February, 2020'}/>
          </View>
        )}
        {activeTab === 'Tab2' && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {userPosts.map((post, index) => (
                                <Post
                                    key={index}
                                    navigation={navigation}
                                    img={image} // Provide necessary props for Post component
                                    name={post.title}
                                    description={post.description}
                                    photo={{ uri: post.image }}
                                    title={post.title}
                                    subtitle={post.location}
                                    paragraph={post.description}
                                    numStars={post.rating}
                                />
                            ))}
          </View>
        )}
        </View>
        {data && data.premium && ( // Added a check here
          <TouchableOpacity onPress={()=>{navigation.navigate('PaymentMethod')}}><Image source={premuim} style={styles.premuim}/></TouchableOpacity>
        )}
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0
  },
  picturecontainer:{
    alignItems:'center',
    position:'relative',
    justifyContent: 'center'
  },
  namecontainer:{
    paddingTop:90,
    alignItems:'center'
  },
  locationcontainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  infocontainer:{
    flexDirection:'row',
    justifyContent:'center',
    width:'70%',
    alignSelf:'center',
    textAlign:'center'
  },
  infocontainer1:{
    alignItems:'center',
  },
  bkg:{
    top:-40,
    left:-40,
    height:227,
    width:390,
    marginBottom:-40
  },
  circle:{
    position: 'absolute',
          width: 155,
          height: 155,
          borderRadius: 77.5,
          borderWidth: 1.5,
          borderColor: '#000',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
  },
  image:{
    position:'absolute',
    height:150,
    width:150,
    borderRadius:75
  },
  image1:{
    position:'absolute',
    height:110,
    width:370,
    top:-90,
    
  },
  premuim:{
    width:48,
    height:45,
    top:-600,
    left:305,
    position:"absolute"
  },
  name:{
    fontSize:20,
    color:'#176FF2',
    fontFamily:'interbold'
  },
  gps:{
    height:27,
    width:27
  },
  infotext:{
    fontSize:24,
    color:'#242760',
    fontFamily:'inter'
  },
  infotext2:{
    fontSize:14,
    color:'#544C4C',
    fontFamily:'inter',
  },
  button: {
    backgroundColor: '#2111AD',
    borderRadius: 10,
    margin: 10,
    width:124,
    height:35,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontFamily:'inter'
  },
}
)