import React, { useState } from 'react';
import { View, Text, ScrollView, Animated,Image, TouchableOpacity, ImageBackground, StatusBar, Dimensions,StyleSheet } from 'react-native';
import Card from '../Components/Card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import colors from '../misc/colors';



  

const Lessondetails = ({navigation}) => {
  const route = useRoute();
  const { item } = route.params;
  
  const { width, height } = Dimensions.get('window');




  const [scrollY] = useState(new Animated.Value(0));

  const headerTextColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [colors.SECONDARY, "#000000"], // Change color from white to black as user scrolls up
    extrapolate: "clamp",
  });

  const headerTextSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [24, 18], // Reduce text size as user scrolls up
    extrapolate: "clamp",
  });

  
  const windowWidth = Dimensions.get('window').width;
  const cardWidth = windowWidth * 0.9; // Set card width to 90% of the device width



  return (
    <View style={{ flex: 1 }} >
    <StatusBar translucent backgroundColor="transparent" />


    <Animated.View
    className="flex flex-rol"
    style={[
      styles.header,
      {
        backgroundColor: headerTextColor,
      },
    ]}
  >
    <MaterialCommunityIcons
      name="arrow-left"
      size={30}
      color= {colors.PRIMARY}
      onPress={() => navigation.goBack()}
      style={styles.icon}
    />
    <Animated.Text
      style={[styles.headerText, { fontSize: headerTextSize }]}
    >
    LESSON {item.content.lesson_number}
    </Animated.Text>
  </Animated.View>



  <ScrollView
  contentContainerStyle={styles.scrollContent}
  scrollEventThrottle={16}
  onScroll={Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  )}
  className='bg-white'
>
<View style={[ { width:cardWidth, backgroundColor:colors.BOXCOLOR, fontSize: windowWidth * 0.033 }]}  className=' w-[90%] mx-auto h-48 flex flex-row justify-between items-center mt-5 rounded-lg'>
<View className='w-1/2 min-h-full justify-center items-center '>
<Text className=' font-extrabold text-2xl italic'>LESSON</Text>
<Text style={[{ fontSize: windowWidth * 0.16 }]} className=' font-extrabold text-7xl font-mono'>{item.content.lesson_number}</Text>

<Text style={[ { fontSize: windowWidth * 0.033 }]} className=' font-medium text-sm  ' >{item.content.lesson_date}</Text>
<Text style={[ { fontSize: windowWidth * 0.025 }]} className=' font-medium text-xs  '>(RESPONSIBILITY MONTH)</Text>
</View>
<Image style={[ {  fontSize: windowWidth * 0.04 }]} className=' w-1/2 h-full bg-transparent' source = {require('../assets/teach.png')} />
</View>
        <View className=" w-full h-fit bg-[#fff] flex flex-col items-center mt-10"> 
          <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >

        <Card
        icon="book-open-page-variant-outline"
        title="Memory Verse" 
        description={item.content.memory_verse}
        />
        <Card
        icon="book-music"
        title="Hymn" 
        description={item.content.suggested_hymns}
        />
        <Card
        icon="book-sync"
        title="Background" 
        description={item.content.lesson_background}
        />
        <Card
        icon="alpha-c-circle-outline"
        title="Conclusion" 
        description={item.content.lesson_conclusion}
        />
        </ScrollView>
          

        <View  style={[ { width:cardWidth }]}  className='min-h-fit mx-auto justify-center   flex flex-col items-start pl-5  my-10 bg-[#0d1b2a] rounded-xl '> 
        <Text style={[ { fontSize: windowWidth * 0.039 }]} className=' font-semibold py-2 text-white  text-lg '>Topic For Adults: {item.content.topic_for_adults} </Text>
        <Text style={[ { fontSize: windowWidth * 0.039 }]} className=' font-semibold py-2 text-white  text-lg '>Topic For Youth:{item.content.topic_for_youth}  </Text>
        <Text style={[ { fontSize: windowWidth * 0.039 }]} className=' font-semibold py-2 text-white   text-lg '>Topic For Intermediate:{item.content.topic_for_intermediate} </Text>
        <Text style={[ { fontSize: windowWidth * 0.039 }]} className=' font-semibold  pb-5 text-white  text-lg '>Lesson Scriptures:{item.content.lesson_scriptures}</Text> 
        </View> 


        
    
   
       
        
     <Text style={[ { fontSize: windowWidth * 0.04 }]} className=' font-bold text-[#f8f9fa]text-base py-5'>NOTES ON THE LESSON</Text>

     {item.content.parts.map((part, index) => (
      <View key={index} style={[ { width:cardWidth, fontSize: windowWidth * 0.033 }]} className='my-5 font-bold'>
        <Text style={[, { fontSize: windowWidth * 0.045 }]} className='font-bold'>{part[`part${index + 1}_topic`]}</Text>
        <Image
        source={part.image}
        className='mt-6'
        style={{
          width: windowWidth * 0.9, // 90% of the device width
          height: (windowWidth * 0.8) * (9 / 16), // Maintaining 16:9 aspect ratio
          borderRadius: 10, // Border radius
        }}
        resizeMode="cover" // Ensure image fills the container
      />
        <Text  style={[, { fontSize: windowWidth * 0.043 }]} className='pt-5 leading-6'>{part[`part${index + 1}_para1`]}</Text>
        <Text  style={[, { fontSize: windowWidth * 0.043 }]} className='pt-5 leading-6'>{part[`part${index + 1}_para2`]}</Text>
        {part[`part${index + 1}_para3`] && (
          <Text  style={[styles.paragraph, { fontSize: windowWidth * 0.04 }]} className='pt-5 leading-6'>{part[`part${index + 1}_para3`]}</Text>
        )}
      </View>
    ))}
      

      </View>

          
      </ScrollView>
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    zIndex: 10,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  scrollContent: {
    paddingTop: 100, // Adjust to accommodate header height
  },
  content: {
    padding: 20,
  },

  card: {
    backgroundColor: "#023047",
    borderRadius: 10,
    padding: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#8d99ae",
    textAlign: "center",
    fontFamily: "serif",
    fontWeight: "bold",
  },
  description: {
    color: "#8d99ae",
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#8d99ae",
    textAlign: "center",
    fontWeight: "normal",
  },

  containertoggle: {
    backgroundColor: "#f5f3f4",
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
  },
  cardHeader: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    height: 220,
  },
  titletoggle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    padding: 10,
  },
  imagetoggle: {
    width: "35%", // Fill the width of the card
    height: "70%", // Fixed height for the image
    borderRadius: 10,
    marginBottom: 10,
  },
  descriptiontoggle: {
    fontSize: 16,
    textAlign: "left",
  },
});

export default Lessondetails;



