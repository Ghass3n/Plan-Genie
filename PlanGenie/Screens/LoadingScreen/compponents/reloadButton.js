import React from 'react';
import { View, TouchableWithoutFeedback, Image, StyleSheet, Text } from 'react-native';

const reload = require('../../../assets/reload.png');

const ReloadButton = ({ onReload, showReload }) => {
    const handleReloadPress = () => {
        onReload();
    };
    return (
        <View>
            <TouchableWithoutFeedback onPress={handleReloadPress}>
                <Image source={reload} style={styles.reload}/>
            </TouchableWithoutFeedback>
        </View>
    );
}
const styles = StyleSheet.create({
    reload:{ 
        height: 110,
        width: 110,
        top:-150,
        marginTop:90
      },
    tryAgainText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        marginTop: 20
    }
})

export default ReloadButton;
