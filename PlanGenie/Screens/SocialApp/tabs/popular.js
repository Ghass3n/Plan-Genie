import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Post from "../components/post";
import { useFonts } from "expo-font";

const jotaro = require('../../../assets/jotaro.webp');
const crusadors = require('../../../assets/crusadors.webp');

export default function Popular({ location,navigation }) {
    const [loaded] = useFonts({
        inter: require('../../../assets/fonts/inter.ttf'),
        interbold: require('../../../assets/fonts/Inter-Bold.ttf'),
      });
      if (!loaded) {
        return null;
      }

    
    const data = [
        {
            id: '1',
            img: jotaro,
            name: 'Jotaro Kujo',
            description: 'Crusader',
            photo: crusadors,
            title: 'Saving my mom in Egypt',
            subtitle: 'Looking hot with the boys',
            paragraph: 'Some vampire gives her disease apparently so we’re here to kick his ass',
            numStars: 1, // Number of stars for this post
        },
        {
            id: '2',
            img: jotaro,
            name: 'Jotaro Kujo',
            description: 'Crusader',
            photo: crusadors,
            title: 'Saving my mom in Egypt',
            subtitle: 'Looking hot with the boys',
            paragraph: 'Some vampire gives her disease apparently so we’re here to kick his ass',
            numStars: 3, // Number of stars for this post
        },
        {
            id: '3',
            img: jotaro,
            name: 'Jotaro Kujo',
            description: 'Crusader',
            photo: crusadors,
            title: 'Saving my mom in Egypt',
            subtitle: 'Looking hot with the boys',
            paragraph: 'Some vampire gives her disease apparently so we’re here to kick his ass',
            numStars: 5, // Number of stars for this post
        },
    ];

    const renderItem = ({ item }) => (
        <Post
            img={item.img}
            name={item.name}
            description={item.description}
            photo={item.photo}
            title={item.title}
            subtitle={item.subtitle}
            paragraph={item.paragraph}
            numStars={item.numStars} // Pass the numStars prop to Post component
            navigation={navigation}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.trending}>Trending In <Text style={styles.trending1}>{location}</Text></Text>
            <View style={styles.container1}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        width: '100%',
    },
    flatListContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    trending: {
        fontSize: 18,
        marginTop: 10,
        marginHorizontal: 18,
        fontFamily:'inter'
    },
    trending1: {
        fontSize: 18,
        textTransform: 'capitalize',
        fontFamily:'interbold'
    },
});
