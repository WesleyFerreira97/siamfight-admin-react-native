import React, { useState } from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native';
import { styles } from './style';

interface SearchClient {
  navigation: any;
}

export function SearchClient({ navigation }: SearchClient) {
  return (
    <View style={styles.container}>
      <Button 
        title="Buscar"
        onPress={() => navigation.navigate('Vencimentos')}
      />
    
    
    </View>        
    ) 
}

