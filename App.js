import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Homescreen from './screens/Homescreen';





const Stack = createNativeStackNavigator();


import { useState, useEffect } from "react";

import SplashScreenComponent from './screens/SplashScreenComponent';
import MyTabs from './screens/MyTabs';

import Children from './screens/Children';
import Youth from './screens/Youth';
import Intermediate from './screens/Intermediate';
import Adult from './screens/Adult';
import { LessonContent } from './screens/LessonContent';
import { Lessontab } from './screens/Lessontab';
import { Daily } from './screens/Daily';
import Lessondetails from './screens/Lessondetails';

import Intro from './screens/Intro';
import NoteScreen from './screens/NoteScreen';
import NoteDetail from './Components/NoteDetail';
import NoteProvider from './contexts/NoteProvider';


export default function App() {

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
    
  return (
   
    <NavigationContainer>
  <NoteProvider>
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerTitle: '', headerTransparent: true }}>
      <Stack.Screen component={NoteScreen} name='NoteScreen' />
      <Stack.Screen component={NoteDetail} name='NoteDetail' />

    <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreenComponent} />
    <Stack.Screen options={{ headerShown: false }} name="Home" component={Homescreen} />
    <Stack.Screen options={{ headerShown: false }} name="tab1" component={MyTabs} />
    <Stack.Screen options={{ headerShown: false }} name="child" component={Children} />
    <Stack.Screen options={{ headerShown: false }} name="youth" component={Youth} />
    <Stack.Screen options={{ headerShown: false }} name="intermediate" component={Intermediate} />
    <Stack.Screen options={{ headerShown: false }} name="adult" component={Adult} />
    <Stack.Screen options={{ headerShown: false }} name="lessoncontent" component={LessonContent} />
    <Stack.Screen options={{ headerShown: false }} name="lessontab" component={Lessontab} />
    <Stack.Screen options={{ headerShown: false }} name="daily" component={Daily} />
    <Stack.Screen options={{ headerShown: false, headerBackTitleVisible: false, headerTransparent: true, headerTintColor: '#fff' }} name="details" component={Lessondetails} />
    </Stack.Navigator>
    </NoteProvider>
</NavigationContainer>

   
  );
};

