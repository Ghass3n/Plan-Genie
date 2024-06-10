import { Text, View,StyleSheet,Image,SafeAreaView,TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react';
import { useFonts } from "expo-font";
import TabBar from '../components/tabbar';
import Popular from '../tabs/popular';
import PopupModal from '../components/popup';
import NavBar from '../../../components/navbar';

const background=require('../../../assets/theworld1.jpeg');
const premuim=require('../../../assets/premuim.png');
const picture=require('../../../assets/dio.jpg');
const circle=require('../../../assets/M.png');
const profile=require('../../../assets/profile1.png');

export default function MainScreen2({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto]=useState(null);
  const [image, setImageURL]=useState('');
  const [rating, setRating] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const location="sidi bouzid";
  const userId = '662971bc861f19a19981a400';
  const [activeTab, setActiveTab] = useState('Tab1');
  const [loaded] = useFonts({
    inter: require('../../../assets/fonts/inter.ttf'),
    interbold: require('../../../assets/fonts/Inter-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  const handlePostPress = (postId) => {
    navigation.navigate('PostScreen', { postId });
  };
  

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
    return (
      <SafeAreaView style={{flex:1,paddingTop:25}}>
        <PopupModal visible={isModalVisible} onClose={toggleModal} photo={photo} setImageURL={setImageURL} setTitle={setTitle} setDescription={setDescription} setRating={setRating} userId={userId} title={title} description={description} rating={rating} image={image} location={location} setPhoto={setPhoto}/>
        <View style={styles.container}>
          <View>
            <Image source={background} style={styles.background}/>
            <TouchableOpacity onPress={()=>{navigation.navigate('PaymentMethod')}} style={styles.premuimcontainer}><Image source={premuim} style={styles.premuim}/></TouchableOpacity>
          </View>
          <View style={styles.picturecontainer}>
            <Image source={picture} style={styles.picture}/>
            <Image source={circle} style={styles.circle}/>
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity onPress={()=>{navigation.navigate('ProfileMainScreen')}}><Image source={profile} style={styles.profile}/></TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={toggleModal}
            >
                <Text style={styles.buttonText}>Add Post</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.maincontainer}>
            <View>
              <Text style={styles.name}>Dio Brando</Text>
              <View style={{flexDirection:'row',marginHorizontal:18}}>
                <Text style={styles.description}>4</Text>
                <Text style={styles.description1}> Trips </Text>
                <Text style={styles.description}>7</Text>
                <Text style={styles.description1}> Reviews</Text>
              </View>
              <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
              {activeTab === 'Tab1' && (
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    <Popular location={'japan'} navigation={navigation}/>
                    <Popular location={'tunisia'} navigation={navigation}/>
                </ScrollView>
                
                        )}
              {activeTab === 'Tab2' && (
                            <Text>Tab2</Text>
                        )}
              {activeTab === 'Tab3' && (
                            <Text>Tab3</Text>
                        )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }

  const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    maincontainer:{
      flex:1,
    },
    scrollViewContainer:{
      paddingBottom:120
    },
    premuimcontainer:{
        position:'absolute',
        alignSelf:'flex-end',
        padding:5,
        paddingRight:48
    },
    picturecontainer:{
      height:65,
      width:65,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      top:105,
      left:20
    },
    buttoncontainer:{
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center'
    },
    background:{
      width:"100%",
      height:132,
    },
    premuim:{
      width:48,
      height:48,
      position:'absolute'
    },
    picture:{
      height:62,
      width:62,
      borderRadius:31,
      position:'absolute',
      alignSelf:'flex-start'
    },
    circle:{
      position:'absolute',
      height:64,
      width:64
    },
    profile:{
      height:26,
      width:26
    },
    button: {
      backgroundColor: '#6C21DC',
      borderRadius:7,
      alignItems: 'center',
      justifyContent: 'center',
      width:124,
      height:35,
      alignSelf:'center',
      margin:15,
      justifyContent:'center',
      alignSelf:'flex-end'
    },
    buttonText: {
      color: 'white',
      fontSize: 15,
      fontFamily:'interbold'
    },
    name:{
      fontSize:20,
      marginHorizontal:18,
      fontFamily:'interbold'
    },
    description:{
      fontSize:15,
      fontFamily:'inter'
    },
    description1:{
      fontSize:15,
      color:'#8B98A5',
      fontFamily:'inter'
    }
  })