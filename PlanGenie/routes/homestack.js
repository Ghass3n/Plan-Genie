import React,{useContext} from 'react'
import {View,ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from '@react-navigation/stack';
import LoadingScreen from '../Screens/LoadingScreen/LoadingScreen'
import ProfileMainScreen from "../Screens/ProfileScreen/screens/mainScreen"
import ProfileEditScreen from '../Screens/ProfileScreen/screens/ProfileEditScreen'
import AddFriends from '../Screens/ProfileScreen/screens/AddFriends';
import Screen1 from "../Screens/OboardingScreen/screens/screen1";
import Screen2 from "../Screens/OboardingScreen/screens/screen2";
import Screen3 from "../Screens/OboardingScreen/screens/screen3";
import UserProfile from '../Screens/ProfileScreen/screens/userprofile';
import MainScreen2 from '../Screens/SocialApp/screens/SocialApp';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import PlanScreen from '../Screens/KraiemScreen/PlanScreen';
import PostScreen from '../Screens/SocialApp/screens/PostScreen';
import Welcome from '../Screens/HomeScreen/welcome/Welcome.js';
import LoginScreen from '../Screens/LogScreen/loginScreen.jsx';
import ForgatScreen from '../Screens/LogScreen/ForgatScreen.jsx';
import NotificationScreen from '../Screens/LogScreen/NotificationScreen.jsx';
import OTPScreen from '../Screens/LogScreen/OTPScreen.jsx';
import SignupScreen from '../Screens/LogScreen/signupScreen.jsx';
import MainScreen1 from '../Screens/MainScreen.js';
import { AuthContext } from '../context/AuthContext.js';
import TimerScreen from '../Screens/PlanScreen/Screens/TimerScreen.jsx';
import MainPlanScreen from '../Screens/KraiemScreen/MainPlanScreen.js';
import PaymentMethod from '../Screens/pricing/payment/paymentMethod.jsx';
import Feature from '../Screens/pricing/feature.jsx';
import Settings from '../Screens/SettingsScreen/Settings.js';



const Stack=createStackNavigator();
 export default function Homestack(){
    const {isLoading,userToken} = useContext(AuthContext);


    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
            
        )
    }



    return(
        <NavigationContainer>
            {userToken !== null ? 
                <Stack.Navigator initialRouteName="Main"
                screenOptions={{
                  gestureEnabled: false,
                  headerShown: false,
                  ...TransitionPresets.SlideFromRightIOS,
                }}>
                        <Stack.Screen name="Main" component={MainScreen1} options={{headerShown:false}}/>
                        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="ProfileMainScreen" component={ProfileMainScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="AddFriendsScreen" component={AddFriends} options={{headerShown:false}}/>
                        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
                        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>
                        <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}/>
                        <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown:false}}/>
                        <Stack.Screen name="SocialApp" component={MainScreen2} options={{headerShown:false}}/>
                        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="PlanScreen" component={PlanScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="PostScreen" component={PostScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="WelcomeScreen" component={Welcome} options={{headerShown:false}}/>
                        <Stack.Screen name="TimerScreen" component={TimerScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="MainPlanScreen" component={MainPlanScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{headerShown:false}}/>
                        <Stack.Screen name="FeatureScreen" component={Feature} options={{headerShown:false}}/>
                        <Stack.Screen name="SettingsScreen" component={Settings} options={{headerShown:false}}/>

                    </Stack.Navigator>
            :       <Stack.Navigator initialRouteName="LoginScreen"
            screenOptions={{
              gestureEnabled: false,
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}>
                        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="ForgetScreen" component={ForgatScreen} options={{headerShown:false}}/>

                </Stack.Navigator>
            }
            
        </NavigationContainer>
    )
 }