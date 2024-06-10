import React, { useState } from 'react';
import { View, StyleSheet,Text, SafeAreaView } from 'react-native';
import Welcome from './HomeScreen/welcome/Welcome';
import MainScreen from './ProfileScreen/screens/mainScreen';
import MainScreen2 from './SocialApp/screens/SocialApp';
import NavBar from '../components/navbar';
import Settings from './SettingsScreen/Settings';

const MainScreen1 = ({ navigation }) => {
  const [selected, setSelected] = useState(0);

  const renderScreen = () => {
    switch (selected) {
      case 0:
        return <Welcome navigation={navigation} />;
      case 1:
        return <MainScreen2 navigation={navigation}/>;
      case 2:
        return <Settings/>;
      case 3:
        return <MainScreen navigation={navigation} />;
      default:
        return <Welcome navigation={navigation} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>
      <NavBar selected={selected} setSelected={setSelected} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
});

export default MainScreen1;
