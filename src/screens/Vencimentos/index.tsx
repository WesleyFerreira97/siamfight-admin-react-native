import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';


export function Vencimentos({ navigation, route}: any) {
  
  return (
    <View style={globalStyles.container}>
        <Text>Vencimentos</Text>
        <Text style={globalStyles.title}>{route.params.name}</Text>
        <Text style={globalStyles.title}>Peso: {route.params.peso}</Text>
        <Text style={globalStyles.title}>Naturalidade : {route.params.naturalidade}</Text>
        <Text style={globalStyles.title}>Contato 1 : {route.params.contact1}</Text>
        <Text style={globalStyles.title}>Contato 2 : {route.params.contact2}</Text>
        <Text style={globalStyles.title}>Objetivo : {route.params.objective}</Text>
   </View>
  );
}