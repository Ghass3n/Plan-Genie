import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const OpenMap = ({locationName}) => {
    const openGoogleMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationName)}`;
        Linking.openURL(url);
    };

    return (
        <TouchableOpacity onPress={openGoogleMaps}>
            <Text style={styles.txt2}>Show map</Text>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    txt2: {
        color: '#196EEE',
        fontSize: 14,
        marginRight:15
    },
});

export default OpenMap;
