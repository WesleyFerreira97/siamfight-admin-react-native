import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';

export function ListPayment(props: any) {
    const { cliente } = props;
    const navigation : any = useNavigation();
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    useEffect(() => {
        setCurrentDate(new Date(cliente.payDay));
    }, [cliente.payDay]);
    
    return (
      <View style={styles.form}>
        
        {/* <TouchableOpacity onPress={() => navigation.navigate('SingleClient', cliente)}> */}
        <TouchableOpacity onPress={() => navigation.navigate('Search' , { screen: 'SingleClient', params: cliente })}>
          <View style={styles.listItem} >
            <Icon name="user" style={styles.icon}/>
            <Text style={{...globalStyles.titleSmall, ...styles.userName}}>
            <View style={styles.dateWrap}>
              <Text style={styles.text}>{currentDate.getDate()} /</Text> 
              <Text style={styles.text}>{currentDate.getMonth() +1} /</Text>
              <Text style={styles.text}>{currentDate.getFullYear()}</Text>
            </View>
            </Text>
            <Text style={{...globalStyles.titleSmall, ...styles.userName}}>{cliente.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}