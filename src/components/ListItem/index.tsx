import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';



export function ListItem({cliente}: any) {
    const navigation = useNavigation();

    return (
        <View style={styles.form}>
        <TouchableOpacity onPress={() => navigation.navigate('SingleClient' as never, cliente as never)}>
          
          <View style={styles.listItem} >
            <Icon name="user" style={styles.icon}/>
            <Text style={{...globalStyles.titleSmall, ...styles.userName}}>{cliente.name}</Text>
          </View>

        </TouchableOpacity>
    </View>
    )
}