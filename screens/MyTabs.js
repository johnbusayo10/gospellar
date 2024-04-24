import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as React from 'react';
import Homescreen from './Homescreen';




const Tab = createBottomTabNavigator();


export default function MyTabs() {

  return (


   
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            tabBarActiveTintColor: '#023e8a',
          }}
        >
          <Tab.Screen
            name="Feed"
            component={Homescreen}
            options={{
              
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="chatroom"
            component={Homescreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
              ),
              tabBarBadge: 3,
            }}
          />
         
        </Tab.Navigator>
      );


        }












