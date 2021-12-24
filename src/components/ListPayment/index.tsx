import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';

export function ListPayment({cliente}: any) {
    const navigation : any = useNavigation();
  
    return (
      <View style={styles.form}>
        <TouchableOpacity onPress={() => navigation.navigate('SingleClient', cliente)}>
          <View style={styles.listItem} >
            <Icon name="user" style={styles.icon}/>
            <Text style={{...globalStyles.titleSmall, ...styles.userName}}>{cliente.name}</Text>
            <Text style={{...globalStyles.titleSmall, ...styles.userName}}>25/10/2021</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}