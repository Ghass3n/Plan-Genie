import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '../components/navbar';
import { useFonts } from "expo-font";

const gps = require('../../../assets/gps.png');
const svg1 = require('../../../assets/svg.png');
const background = require('../../../assets/theworld.jpeg');
const arrow = require('../../../assets/arrow.png');
const search = require('../../../assets/BlackSearch.png');

export default function UserProfile({ route, navigation }) {
    const { name, img, description } = route.params;

    const [activeTab, setActiveTab] = React.useState('Tab1');
    const [loaded] = useFonts({
        inter: require('../../../assets/fonts/inter.ttf'),
        interbold: require('../../../assets/fonts/Inter-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("ProfileMainScreen")}>
                    <Image source={arrow} style={styles.arrow} />
                </TouchableOpacity>
                <View style={{flex:1}}/>
                <TouchableOpacity onPress={() => navigation.navigate("AddFriendsScreen")}>
                    <Image source={search} style={styles.search}/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.line} />
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ padding: 40 }}>
                        <Image source={background} style={styles.bkg} />
                        <View style={styles.picturecontainer}>
                            <Image source={svg1} style={styles.image1} />
                            <Image source={img} style={styles.image} />
                            <View style={styles.circle} />
                        </View>
                        <View style={styles.namecontainer}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={{ fontFamily: 'inter' }}>{description}</Text>
                            <View style={styles.locationcontainer}>
                                <Image source={gps} style={styles.gps} />
                                <Text style={{ fontFamily: 'inter' }}>Tunis, Tunisia</Text>
                            </View>
                        </View>
                        <View style={styles.infocontainer}>
                            <View style={styles.infocontainer1}>
                                <Text style={styles.infotext}>0</Text>
                                <Text style={styles.infotext2}>followers</Text>
                            </View>
                            <View style={{ flex: 1 }} />
                            <View style={styles.infocontainer1}>
                                <Text style={styles.infotext}>0</Text>
                                <Text style={styles.infotext2}>following</Text>
                            </View>
                            <View style={{ flex: 1 }} />
                            <View style={styles.infocontainer1}>
                                <Text style={styles.infotext}>0</Text>
                                <Text style={styles.infotext2}>likes</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Follow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Add Friend</Text>
                            </TouchableOpacity>
                        </View>
                        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
                        {activeTab === 'Tab1' && (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'inter' }}>Content for Tab 1</Text>
                            </View>
                        )}
                        {activeTab === 'Tab2' && (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'inter' }}>Content for Tab 2</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 0
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
        paddingHorizontal:10
    },
    arrow: {
        width: 17,
        height: 30,
    },
    search:{
        width:30,
        height:30
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        alignSelf: 'center'
    },
    picturecontainer: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center'
    },
    namecontainer: {
        paddingTop: 90,
        alignItems: 'center'
    },
    locationcontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infocontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '70%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    infocontainer1: {
        alignItems: 'center',
    },
    bkg: {
        top: -40,
        left: -40,
        height: 227,
        width: 390,
        marginBottom: -40
    },
    circle: {
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
    image: {
        position: 'absolute',
        height: 150,
        width: 150,
        borderRadius: 75
    },
    image1: {
        position: 'absolute',
        height: 110,
        width: 370,
        top: -90,

    },
    name: {
        fontSize: 20,
        color: '#176FF2',
        fontFamily: 'interbold',
        textTransform:'capitalize'
    },
    gps: {
        height: 27,
        width: 27
    },
    infotext: {
        fontSize: 24,
        color: '#242760',
        fontFamily: 'inter'
    },
    infotext2: {
        fontSize: 14,
        color: '#544C4C',
        fontFamily: 'inter',
    },
    button: {
        backgroundColor: '#2111AD',
        borderRadius: 10,
        margin: 10,
        width: 124,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'inter'
    },
});
