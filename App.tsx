import React from 'react'
import { View, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SearchClient } from './src/screens/SearchClient/index';
import { AddClient } from './src/screens/AddClient/index';
import { PaymentDates } from './src/screens/PaymentDates/index';
import { SingleClient } from './src/screens/SingleClient/index';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator
      initialRouteName="SearchClient"
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name="SearchClient" component={SearchClient} />
      <HomeStack.Screen name="SingleClient" component={SingleClient} />
    </HomeStack.Navigator>
  );
}

export default function App() {

  return (
    <>
    <StatusBar backgroundColor="#1A1A2E" />
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="PaymentDates"
        barStyle={{ 
          backgroundColor: '#C70039', 
          padding: 2
        }}
      >
        <Tab.Screen 
          name="Search" 
          component={SearchStack} 
          options={{
            title: 'Buscar',
            tabBarIcon: () => (
              <Icon name="search" size={23} color="#fff" />
            ),
          }}
        />
        <Tab.Screen 
          name="AddClient" 
          component={AddClient} 
          options={{
            title: 'Adicionar',
            tabBarIcon: () => (
              <Icon name="user-plus" size={23} color="#fff"/>
            ),
          }}
        />
        <Tab.Screen 
          name="PaymentDates" 
          component={PaymentDates} 
          options={{
            title: 'Vencimentos',
            tabBarIcon: () => (
              <Icon name="dollar-sign" size={23} color="#fff"/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </>
    )
}

