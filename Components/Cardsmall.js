import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../misc/colors';

const { width } = Dimensions.get('window');
const cardWidth = Math.min(150, width * 0.9); // Set minimum width to 150px or 90% of device width

const Card = ({ title, description, image,onPress }) => {
  return (
    <TouchableOpacity className='mt-5' style={[styles.card, { width: cardWidth }]} onPress={onPress}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        margin: 10,
        borderColor: colors.CARDCOLOR,
        borderWidth: 5,
        borderRadius: 15,
        overflow: 'hidden', // This ensures the border doesn't overlap the image
      },
      card: {
        backgroundColor: colors.CARDCOLOR,
        borderRadius: 13, // Adjust to make the card slightly smaller than the container to show the border
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
      },
      image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      description: {
        fontSize: 16,
      },
});

export default Card;
