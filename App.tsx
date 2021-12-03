import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import { SearchClient } from './src/screens/SearchClient/index';
import { AddClient } from './src/screens/AddClient/index';
import { Vencimentos } from './src/screens/Vencimentos/index';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SearchClient"
      >
        <Tab.Screen 
          name="SearchClient" 
          component={SearchClient} 
          options={{
            title: 'Buscar Cliente',
            tabBarIcon: () => (
              <Icon name="search" size={25} color="#fff" />
            ),
          }}
        />
        <Tab.Screen 
          name="AddClient" 
          component={AddClient} 
          options={{
            title: 'Add Cliente',
            tabBarIcon: () => (
              <Icon name="user-plus" size={25} color="#fff"/>
            ),
          }}
        />
        <Tab.Screen 
          name="Vencimentos" 
          component={Vencimentos} 
          options={{
            title: 'Vencimentos',
            tabBarIcon: () => (
              <Icon name="dollar-sign" size={25} color="#fff"/>
            ),
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
    )
}