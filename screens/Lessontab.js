import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LessonContent } from './LessonContent';
import { Daily } from './Daily';
import Lessondetails from './Lessondetails';
import NoteScreen from './NoteScreen';
import  { useEffect, useState } from 'react';

const Tab = createMaterialBottomTabNavigator();



export const Lessontab = ({route}) => {

  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  useEffect(() => {
    findUser();
  }, []);

  const renderNoteScreen = props => <NoteScreen {...props} user={user} />;

  if (isAppFirstTimeOpen) return <Intro onFinish={findUser} />;




  const {item} = route.params;

  console.log(item)

    return (

         <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#0d1b2a"
      barStyle={{ backgroundColor: '#fff' }}
    >
      
           <Tab.Screen
       name="Lesson"
           component={Lessondetails}
           onPress={()=> navigation.navigate('Lessontab',{item: item})}
           initialParams={{ item: item }}
        options={{
          tabBarLabel: 'Lesson Content',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
          <Tab.Screen name="DailyReading" component={Daily}
          onPress={()=> navigation.navigate('Lessontab',{item: item})}
          initialParams={{ item: item }}
           options={{
          tabBarLabel: 'Daily Reading',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightbulb" color={color} size={26} />
          ),
        }} />

        <Tab.Screen name="NoteScreen" component={NoteScreen}
           options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightbulb" color={color} size={26} />
          ),
        }} />


        </Tab.Navigator>
      );
}
