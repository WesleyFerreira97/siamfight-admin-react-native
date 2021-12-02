import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { SearchClient } from './src/screens/SearchClient/index';
import { AddClient } from './src/screens/AddClient/index';
import { Vencimentos } from './src/screens/Vencimentos/index';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      
      >
      <Tab.Screen name="SearchClient" component={SearchClient} />
      <Tab.Screen name="AddClient" component={AddClient} />
      <Tab.Screen 
        name="Vencimentos" 
        component={Vencimentos} 
        options={{
          title: 'Vencimentosaaaa',
        }}
        />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchClient">
        <Stack.Screen 
          name="SearchClient" 
          component={Tabs}
          options={{
            title: 'Buscar Cliente',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}