import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Post from '../screens/Post/Post';
import Home from '../screens/Home/Home';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconenome;
            if (route.name === 'Home') {
              iconenome = 'ios-people-sharp';
            } else if (route.name === 'Post') {
              iconenome = 'ios-albums';
            }

            return <Ionicons name={iconenome} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Post" component={Post} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

