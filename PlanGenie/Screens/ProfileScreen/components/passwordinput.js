import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const darkeye = require('../../../assets/darkeye.png');
const grayeye = require('../../../assets/grayeye.png');



const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };
  
    return (
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image source={isPasswordVisible ? darkeye : grayeye} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 10,
      width: '100%',
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0.3,
      borderRadius: 5,
      borderColor: '#544C4C',
      padding: 8,
    },
    input: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'inter',
    },
    eyeIcon: {
      width: 24,
      height: 24,
      tintColor: '#544C4C',
    },
  });
  
  export default PasswordInput;
  