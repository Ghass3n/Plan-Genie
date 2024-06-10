import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

const profile = require('../../../assets/profile.png');
const plus = require('../../../assets/plus.png');

export default function ProfileTemplate({ image, name, description, navigation }) {
    const [loaded] = useFonts({
        inter: require('../../../assets/fonts/inter.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View>
            <View style={styles.container}>
                <Image source={image} style={styles.icon} />
                <View style={styles.container1}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={{ flex: 1 }} />
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => (navigation.navigate('UserProfile', { name, img: image, description }))}>
                        <Image source={profile} style={styles.plus} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={plus} style={styles.plus} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        width: '100%',
        flexDirection: 'row',
        padding: 20,
    },
    container1: {
        paddingLeft: 20,
        justifyContent: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        height: 0.8,
        width: '95%',
        backgroundColor: '#ddd',
        alignSelf: 'center'
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignSelf: 'center'
    },
    name: {
        fontSize: 19,
        color: 'black',
        textTransform: 'capitalize',
        fontFamily: 'inter'
    },
    description: {
        fontSize: 13,
        color: 'grey',
        textTransform: 'capitalize',
        fontFamily: 'inter'
    },
    plus: {
        height: 35,
        width: 35,
        marginLeft: 5
    }
});
