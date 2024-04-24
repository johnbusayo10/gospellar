import React from 'react'
import { Text, View,Image, SafeAreaView, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export const LessonContent = ({navigation}) => {
  const route = useRoute();
  const { item } = route.params;

  

  return (
   <SafeAreaView className=' bg-[#000000]'>
    <View className=' w-full min-h-[56px] flex flex-row items-center pl-2 pt-3'>
<MaterialCommunityIcons name="arrow-left" size={30} color='#fb8500'onPress={() => navigation.goBack()} />
<Text className=' capitalize text-2xl text-[#ffffff] font-semibold px-10'>Lesson {item.content.lesson_number}</Text>

</View>

    <ScrollView className=' w-full  min-h-full flex flex-col mb-80'>

    
      <View className=' w-[90%] mx-auto h-48 flex flex-row justify-between items-center'>
           <View className='w-1/2 min-h-full justify-center items-center '>
           <Text className=' font-extrabold text-2xl italic text-[#ffffff]'>LESSON</Text>
           <Text className=' font-extrabold text-7xl font-mono text-[#ffffff]'>{item.content.lesson_number}</Text>
         
           <Text className=' font-medium text-sm text-[#ffffff] ' >{item.content.lesson_date}</Text>
           <Text className=' font-medium text-xs text-[#ffffff] '>(RESPONSIBILITY MONTH)</Text>
           </View>
           <Image className=' w-1/2 h-full bg-transparent' source = {require('../assets/teach.png')} />
      </View>
         <View className=' w-[90%] min-h-[128px] bg-[#8d0801] items-center mx-auto my-5 justify-center rounded-lg'>
         <Text className=' font-extrabold text-2xl italic text-center text-white '>{item.topic} </Text>
       
         </View>
         <View  className=' w-96 mx-auto justify-center   flex flex-col items-center  my-5'> 
         <Text className=' font-semibold text-[#f8f9fa] text-base '>Suggested Hymns:{item.content.suggested_hymns}</Text>
         <Text className=' font-semibold text-[#f8f9fa] text-base '>Devotional Reading:{item.content.devotional_reading}</Text>
         <Text className=' font-semibold text-[#f8f9fa]  text-base '>Topic For Adults: {item.content.topic_for_adults} </Text>
         <Text className=' font-semibold text-[#f8f9fa] text-base '>Topic For Youth: {item.content.topic_for_youth} </Text>
         <Text className=' font-semibold text-[#f8f9fa]  text-base '>Topic For Intermediate: {item.content.topic_for_intermediate}</Text>
         <Text className=' font-semibold text-[#f8f9fa] pb-5  text-base '>Lesson Scriptures:{item.content.lesson_scriptures}</Text>
         </View>
    
         <View className=' w-[90%] min-h-[120px] border-solid border-2 border-[#44A1A0] mx-auto justify-between items-center'>
         <Text className=' -m-6 bg-white p-3 font-extrabold text-xl'>MEMORY VERSE</Text>
         <Text className=' text-center text-base font-semibold text-[#f8f9fa]'>{item.content.memory_verse} <Text className=' font-extrabold py-2'>{item.content.memoryVerse_bible_passage} </Text></Text>
         </View>
        
         <View className=' w-full flex flex-col items-center gap-2 mx-auto'>
    
         <Text className=' font-extrabold text-xl py-5 text-[#ffffff]'>DAILY DEVOTIONAL READING</Text>
    
         <View className=' w-[90%] bg-[#8d0801]  flex flex-col justify-center items-center rounded-lg'>
          <Text className=' text-[#f8f9fa] font-extrabold text-2xl italic py-5'>BACKGROUND</Text>
          <Text className=' text-[#f8f9fa] text-center p-2 text-lg font-semibold'>{item.content.lesson_background} </Text>
         </View>
          <View className=' w-[98%]  flex flex-col items-center'> 
      <Text className=' font-bold text-[#f8f9fa]text-base py-5'>NOTES ON THE LESSON</Text>

      {/* <View className=' w-screen h-2/3 flex flex-col gap-5 align-middle items-center'> */}
           <Text className=' w-[90%]  font-bold text-base text-white py-2 px-3 bg-[#8d0801] '>PART 1:  {item.content.part1_topic} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-2'>{item.content.part1_para1}</Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-3'>{item.content.part1_para2} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-3'>{item.content.part1_para3} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-3'>{item.content.part1_para4} </Text>


      <Text className=' w-[90%] font-bold text-base text-[#ffffff] py-2 px-3 bg-[#8d0801] '>PART 2: {item.content.part2_topic} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5'> {item.content.part2_para1} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-3'>{item.content.part2_para2} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-3'>{item.content.part2_para3} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-3'>{item.content.part2_para4} </Text>


      <Text className=' w-[90%] font-bold text-base text-[#ffffff] py-2 px-3 bg-[#8d0801] '>PART 3: {item.content.part3_topic} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5'> {item.content.part3_para1} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-3'>{item.content.part3_para2} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-3'>{item.content.part3_para3} </Text>
      <Text className='text-lg text-[#f8f9fa] text-justify px-5 py-3'>{item.content.part3_para4} </Text>

        </View>

            </View>
            <View className=' w-full flex flex-col justify-center items-center'>
          <Text className=' w-[90%] text-center text-white font-bold text-xl bg-[#8d0801] py-5'>CONCLUSION</Text>
          <Text className='  text-[#f8f9fa] text-justify px-5 py-3 text-lg'>{item.content.lesson_conclusion} </Text>
          <Text className=' text-white bg-[#8d0801] w-[90%] text-center font-bold text-xl py-5'>QUESTION</Text>
          <Text className=' text-[#f8f9fa] text-center p-2 text-base'>1. {item.content.question1}</Text>
          <Text className=' text-[#f8f9fa] p-2 text-base text-start'>2.  {item.content.question2}</Text>
          <Text className=' text-[#f8f9fa] text-center p-2 text-base'>3.  {item.content.question3}</Text>
          <Text className=' text-[#f8f9fa] p-2 text-base text-start'>4.  {item.content.question4}</Text>
          <Text className=' text-[#f8f9fa] pb-4 text-base text-start'>5.  {item.content.question5}</Text>

         </View>
        
    </ScrollView>


   </SafeAreaView>
   
  )
}
