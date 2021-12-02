import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'


export function Vencimentos({ navigation }: any) {
  return (
    <View>
        <Text>Vencimentos</Text>
        
        <Button
            title="Add Cliente"
            onPress={() => navigation.navigate('AddClient')}
            />
   </View>
  );
}