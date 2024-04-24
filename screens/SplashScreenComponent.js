import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import splash from '../assets/gospelar.json';

const SplashScreenComponent = ({ navigation }) => {
  const animation = useRef(null);
  useEffect(() => {
    // Navigate to the main screen after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Replace 'MainScreen' with your actual main screen component name
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
     
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: screenWidth * 0.8, // Adjust the percentage as per your requirement
          aspectRatio: 1, // Maintain aspect ratio
          backgroundColor: '#fff',
        }}
        source={require('../assets/gospelar.json')} // Corrected the typo in the file name
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default SplashScreenComponent;
