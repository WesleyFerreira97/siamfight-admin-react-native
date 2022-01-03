import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';

export function ListPayment(props: any) {
    const { cliente } = props;
    const navigation : any = useNavigation();
    const [nextPayment, setNextPayment] = useState<Date>(new Date());
  
    useEffect(() => {
        let currentDate = new Date(cliente.payDay);
        currentDate.setDate(currentDate.getDate() + 30);
        setNextPayment(currentDate);
    }, [cliente.payDay]);
    
    return (
      <View style={styles.listWrap}>
        <TouchableOpacity onPress={() => navigation.navigate('Search' , { screen: 'SingleClient', params: cliente })}>
          <View style={styles.listItem} >
            <Icon name="user" style={styles.icon}/>
            <View style={styles.listInfo}>
              <Text style={{...globalStyles.titleSmall, ...styles.userName}}>{cliente.name}</Text>
                <View style={styles.dateWrap}>
                  <View style={styles.dateWrap2}>
                    <Text style={styles.infoTitle}>Próx. Vencimento : </Text>
                  </View>
                  <View style={styles.dateWrap2}>
                    <Text style={styles.text}>{nextPayment.getDate()} /</Text> 
                    <Text style={styles.text}>{nextPayment.getMonth() +1} /</Text>
                    <Text style={styles.text}>{nextPayment.getFullYear()}</Text>
                  </View>
                </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
}