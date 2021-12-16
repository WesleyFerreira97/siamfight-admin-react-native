import React from 'react'
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import { SearchClient } from './src/screens/SearchClient/index';
import { AddClient } from './src/screens/AddClient/index';
import { Vencimentos } from './src/screens/Vencimentos/index';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IndexPath, Select, SelectItem  } from '@ui-kitten/components';

const Tab = createMaterialBottomTabNavigator();

export default function App() {


  return (
    <>
    <StatusBar backgroundColor="#1A1A2E" />
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SearchClient"
        barStyle={{ 
          backgroundColor: '#C70039', 
          padding: 2
        }}
      >
        <Tab.Screen 
          name="SearchClient" 
          component={SearchClient} 
          options={{
            title: 'Buscar',
            tabBarIcon: () => (
              <Icon name="search" size={22} color="#fff" />
            ),
          }}
        />
        <Tab.Screen 
          name="AddClient" 
          component={AddClient} 
          options={{
            title: 'Adicionar',
            tabBarIcon: () => (
              <Icon name="user-plus" size={22} color="#fff"/>
            ),
          }}
        />
        <Tab.Screen 
          name="Vencimentos" 
          component={Vencimentos} 
          options={{
            title: 'Vencimentos',
            tabBarIcon: () => (
              <Icon name="dollar-sign" size={22} color="#fff"/>
            ),
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
    </ApplicationProvider>
    </>
    )
}