import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MyButton from "./Button";
import OutlinedButton from "./OtherButton";
import { useFonts } from "expo-font";

const star = require('../../../assets/star.png');
const graystar = require('../../../assets/graystar.png');
const dots = require('../../../assets/dots.png');

// Define navPost function
function navPost(navigation) {
    navigation.navigate('PostScreen');
}

export default function Post({ navigation,img, name, description, photo, title, subtitle, paragraph, numStars }) {
    const [loaded] = useFonts({
        inter: require('../../../assets/fonts/inter.ttf'),
        interbold: require('../../../assets/fonts/Inter-Bold.ttf'),
      });
      if (!loaded) {
        return null;
      }

    const renderStars = (numStars) => {
        const totalStars = 5;
        const filledStars = Math.min(numStars, totalStars);
        const starArray = [];

        // Add filled stars
        for (let i = 0; i < filledStars; i++) {
            starArray.push(<Image key={`star-${i}`} source={star} style={styles.star} />);
        }

        // Add gray stars for the remainder
        for (let i = filledStars; i < totalStars; i++) {
            starArray.push(<Image key={`graystar-${i}`} source={graystar} style={styles.star} />);
        }

        return starArray;
    };

    return (
        <TouchableOpacity onPress={() => navPost(navigation)} style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={img} style={styles.img} />
                <View style={styles.namecontainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={{ flex: 1 }} />
                <View style={styles.starcontainer}>
                    {renderStars(numStars)}
                </View>
                <TouchableOpacity style={styles.dotscontainer}><Image source={dots} style={styles.dots} /></TouchableOpacity>
            </View>
            <Image source={photo} style={styles.photo} />
            <View style={{ padding: 10 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Text style={styles.paragraph}>{paragraph}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <OutlinedButton />
                <MyButton />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 360,
        width: 270,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 18,
        marginRight: -8
    },
    namecontainer: {
        justifyContent: 'center'
    },
    starcontainer: {
        flexDirection: 'row',
        height: 15,
        marginTop: 10,
        marginRight: 15,
        width: 80
    },
    dotscontainer: {
        marginRight: 15,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontFamily:'inter'
    },
    subtitle: {
        fontSize: 15,
        fontFamily:'inter'
    },
    paragraph: {
        fontSize: 13,
        marginTop: 12,
        width: '85%',
        fontFamily:'inter'
    },
    photo: {
        height: 141,
        width: '99.9%',
        alignSelf: 'center'
    },
    img: {
        height: 30,
        width: 30,
        margin: 10,
        borderRadius: 15
    },
    dots: {
        height: 12,
        width: 3
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontFamily:'interbold'
    },
    description: {
        fontSize: 10.5,
        fontFamily:'inter'
    },
    star: {
        height: 15.5,
        width: 15.5
    }
});
