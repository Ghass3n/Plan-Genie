import React, { useState, useEffect, useContext } from 'react';
import { Modal, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import axios from 'axios'; 
import { AuthContext } from '../../context/AuthContext';
import { ip } from '../../constants/ip';

export default function LoginScreen({ navigation }) {
  const { login,setUserId,setUserToken } = useContext(AuthContext);
  let [fontsLoaded] = useFonts({
    'Asar': require('../../assets/fonts/Asar-Regular.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);
  const [showBtnContainer, setShowBtnContainer] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [id,setId]=useState();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setShowBtnContainer(false);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setShowBtnContainer(true);
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  const handleLogin = async () => {
    try {
      const response = await fetch('http://'+ip+':3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (!response.ok) {
        // Handle unsuccessful login (e.g., display error message)
        const errorData = await response.json();
        Alert.alert('Error', errorData.error);
        return;
      }
  
      const data = await response.json();
      console.log(data.message);
      console.log('Token:', data.token);
      console.log('id ',data.user._id);
  
      // Update application state to reflect successful login (e.g., set loggedIn state to true)
      // You might need to use the context provided by AuthContext here
      login(data.token,data.user._id); // Assuming this triggers a state change in AuthContext
  
      // Navigate to the next screen or perform other actions after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Internal server error');
    }
  };
  

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Terms and Conditions</Text>
            <Text style={styles.termsText}>
              Here are the terms and conditions of our app. Please read them carefully.
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.BackText}>Back</Text>
      <Image source={require('../../assets/Circle 3 SIDE BOTTEM.png')} style={[styles.image, styles.image3]} />
      <Image source={require('../../assets/Untitled design (15).png')} style={[styles.image, styles.image2]} />
      <Image source={require('../../assets/Circle 1 TOP.png')} style={[styles.image, styles.image1]} />
      <TextInput
        placeholder="Your Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        onFocus={() => { setInputFocused(true); setShowBtnContainer(false); }}
        onBlur={() => setInputFocused(false)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        onFocus={() => { setInputFocused(true); setShowBtnContainer(false); }}
        onBlur={() => setInputFocused(false)}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgetScreen')}>
        <Text style={styles.btn1}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={styles.sign}>Sign In</Text>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.btnC}>
          <Image source={require('../../assets/Untitled design (16).png')} style={styles.btn2} />
        </View>
      </TouchableOpacity>
      {showBtnContainer && (
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.leftBtn} onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.btn3}>Signup</Text> 
            <Image source={require('../../assets/Sign Up BOTTEM.png')} style={[styles.image, styles.image4]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.rightBtn}>
            <Text style={styles.btn3}>Terms and Conditions</Text>
            <Image source={require('../../assets/Forgot BOTTEM.png')} style={[styles.image, styles.image5]} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7E5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 39,
    marginBottom: 20,
    color: "white",
    top: 115,
    left: 20,
    zIndex: 999,
    position: "absolute",
    fontFamily: "Asar"
  },
  BackText: {
    fontSize: 39,
    marginBottom: 20,
    color: "white",
    zIndex: 998,
    top: 180,
    left: 20,
    position: "absolute",
    fontFamily: "Asar"
  },
  image: {
    resizeMode: 'cover',
    position: 'absolute',
  },
  image1: {
    top: 40,
    left: 0,
  },
  image2: {
    top: -300,
    left: -150,
    width: 639,
    height: 700,
  },
  image3: {
    top: 40,
    right: 0,
  },
  input: {
    width: 300,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 17,
    paddingLeft: 20,
    top: 130,
    marginBottom: 20,
    color: '#000',
    fontSize: 16,
    fontFamily: "Asar"
  },
  btn1: {
    color: "#635C5C",
    top: 120,
    left: -90,
  },
  sign: {
    fontSize: 27,
    fontFamily: "Asar",
    bottom: -150,
    left: -100,
  },
  btn2: {
    width: 40,
    height: 40,
    borderRadius: 25,
    padding: 10,
    right: -10,
    bottom: -10,
  },
  btnC: {
    backgroundColor: "#6C21DC",
    bottom: -90,
    right: -120,
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  btn3: {
    fontSize: 16,
    fontFamily: "Asar"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: 'row',
    position: "absolute",
    bottom: 30,
    zIndex: 999,
  },
  leftBtn: {
    marginRight: 'auto',
    left: -50,
  },
  rightBtn: {
    marginLeft: 'auto',
    right: -60,
  },
  image4: {
    left: -10,
    bottom: 7,
  },
  image5: {
    left: 10,
    bottom: 7, 
  },
});
