import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';





const ToggleCard = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  const windowWidth = Dimensions.get('window').width;
  const cardWidth = windowWidth * 0.9; // Set card width to 90% of the device width

  return (
    <View style={[styles.container, { width: cardWidth }]} className="">
      <TouchableOpacity style={styles.cardHeader} onPress={toggleCard} className='flex flex-row justify-around items-center'>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <View className='w-[60%] h-90 flex flex-col items-center'>
      <Text style={styles.title}>{title}fvsbvbbvbvbvvbdbvbddvcvsvsv</Text>
      <Text style={styles.title}>{title}fvsbvbbvbvbvvbdbvbddvcvsvsv</Text>
      <Text style={styles.title}>{title}fvsbvbbvbvbvvbdbvbddvcvsvsv</Text>
      </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.cardContent}>
          <Text style={styles.description}>{description}wfwdhffhfdh8h8h8h89h89h8hhh8h8hh988</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14213d',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
  },
  cardHeader: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height:220
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 10,
  },
  image: {
    width: '35%', // Fill the width of the card
    height: "70%", // Fixed height for the image
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign:"left"
  },
});

export default ToggleCard;
