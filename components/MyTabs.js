import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from './HomeScreen';
import { QuestionaryScreen } from './QuestionaryScreen';
import { ContactScreen } from './ContactScreen';

import { Aclonica_400Regular } from '@expo-google-fonts/aclonica';


const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4395e7',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          //fontFamily: 'BrunoAceSC-Regular',
          fontWeight: '200',
        },
        headerRight: () => (
          <Ionicons name="apps" size={20} color="white" paddingRight={10}/>
        ),
        title: 'Drogolegas',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            paddingBottom: 8,
          },
          headerTitleAlign:'center'
        }}
      />
      <Tab.Screen
        name="Questions"
        component={QuestionaryScreen}
        options={{
          tabBarLabel: 'Questionário',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-checkbox-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            paddingBottom: 8,
          },
          headerTitleAlign:'center'
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contacta',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-mail-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            paddingBottom: 8,
          },
          headerTitleAlign:'center'
        }}
      />
    </Tab.Navigator>
  );
}

