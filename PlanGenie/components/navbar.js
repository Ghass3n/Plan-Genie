import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

const blue_home = require('../assets/blue_home.png');
const gray_home = require('../assets/gray_home.png');
const blue_pen = require('../assets/blue_pen.png');
const gray_pen = require('../assets/gray_pen.png');
const plus = require('../assets/pluss.png');
const blue_settings = require('../assets/blue_settings.png');
const gray_settings = require('../assets/gray_settings.png');
const blue_profile = require('../assets/blue_profile.png');
const gray_profile = require('../assets/gray_profile.png');

export default function NavBar({navigation, selected, setSelected }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { setSelected(0) }}>
                <Image style={styles.icon} source={selected === 0 ? blue_home : gray_home} />
            </TouchableOpacity>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => { setSelected(1) }}>
                <Image style={styles.icon} source={selected === 1 ? blue_pen : gray_pen} />
            </TouchableOpacity>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={()=>{navigation.navigate('TimerScreen')}}>
                <Image style={styles.icons} source={plus} />
            </TouchableOpacity>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => { setSelected(2) }}>
                <Image style={styles.icon} source={selected === 2 ? blue_settings : gray_settings} />
            </TouchableOpacity>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => { setSelected(3) }}>
                <Image style={styles.icon} source={selected === 3 ? blue_profile : gray_profile} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
    },
    icon: {
        height: 30,
        width: 30
    },
    icons: {
        height: 70,
        width: 70
    }
});
