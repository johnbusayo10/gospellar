import React ,{ useState, useEffect }from 'react'
import {Image,TouchableOpacity, Text, View, ScrollView, SafeAreaView ,StatusBar,ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';
import { StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Cardsmall from '../Components/Cardsmall';
import colors from '../misc/colors';




const child = require('../assets/child.jpg')
const inter = require("../assets/inter.jpg")
const youth = require('../assets/youth.jpg')
const adult = require("../assets/adult.jpg")





const data = [
  { id: 1, image: require('../assets/firstimage2.jpg') },
  { id: 2, image: require('../assets/firstimage2.jpg') },
  { id: 3, image: require('../assets/firstimage2.jpg') },
  // Add more items as needed
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.image} style={styles.image} />
  </View>
);
const Homescreen = ({navigation}) => {

  const handleCard1Press = () => {
    navigation.navigate('child'); // Navigate to Screen1
  };
  
  const handleCard2Press = () => {
    navigation.navigate('intermediate'); // Navigate to Screen2
  };
  
  const handleCard3Press = () => {
    navigation.navigate('youth'); // Navigate to Screen3
  };
  
  const handleCard4Press = () => {
    navigation.navigate('adult'); // Navigate to Screen3
  };


  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const onSnapToItem = (index) => setActiveIndex(index);


  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let greetingMessage = '';
    if (currentHour >= 5 && currentHour < 12) {
      greetingMessage = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      greetingMessage = 'Good Afternoon';
    } else {
      greetingMessage = 'Good Evening';
    }

    setGreeting(greetingMessage);
  }, []);



  return (
   <SafeAreaView className=" bg-white">
   <StatusBar translucent backgroundColor="transparent" />
   <ScrollView className=" min-w-full min-h-full  flex flex-col"  >
   
   <View className=" min-h-full w-[90%] flex flex-col items-center mx-auto ">

   <View className=" w-[100%] min-h-[60px] bg-inherit flex flex-row justify-between items-center align-middle">
   <Text className=" font-semibold text-2xl text-[#463f3a] ">{greeting}</Text>
  
   <Image className=' w-14 h-14 rounded-full' source = {require('../assets/logo.png')} /> 
   </View>
   

   <View style={styles.container} className=' min-h-[300px]'>
   <Text className=' text-[#8d99ae] text-lg text-semibold py-5'>Recent Events</Text>
   <Carousel
     data={data}
     renderItem={renderItem}
     sliderWidth={Dimensions.get('window').width}
     itemWidth={Dimensions.get('window').width - 100}
     onSnapToItem={onSnapToItem}
   />
   <Pagination
     dotsLength={data.length}
     activeDotIndex={activeIndex}
     containerStyle={{ marginTop: -30 }}
     dotStyle={styles.dot}
     inactiveDotOpacity={0.4}
     inactiveDotScale={0.6}
   />
 </View>

 <View className='w-full'>

 <Text className='text-3xl font-extrabold text-[#023047] py-5'>Categorys</Text>


     <View className=" w-full min-h-fit bg-white flex flex-row justify-between flex-wrap ">
      
     <Cardsmall
     onPress={handleCard1Press}
     title='Children'
     description='This is for children'
     image={child}/>

     <Cardsmall
     onPress={handleCard2Press}
     title='Intermediate'
     description='This is for Intermediate'
     image={inter}/>
     <Cardsmall
     onPress={handleCard3Press}
     title='Youth'
     description='This is for Youth'
     image={youth}/>

     <Cardsmall
     onPress={handleCard4Press}
     title='Adult'
     description='This is for Adult'
     image={adult}/>
  

     




    </View>
   

 </View>
  
 
  
   </View>
   </ScrollView>
   </SafeAreaView>
 
   
  
  )
  
}

export default Homescreen;
  
const styles = StyleSheet.create({
  
 
  
 
  
  container: {
   
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  item: {
    borderRadius: 5,
    overflow: 'hidden',
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').width - 250, // Adjust height as needed
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },

  container1: {
   
    borderRadius: 20,
    overflow: 'hidden',
    margin: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageStyle: {
    opacity: 0.5, // Adjust the opacity as needed
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the opacity as needed
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },

});