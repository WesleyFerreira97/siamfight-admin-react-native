import React, { Component, useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';


export function PaymentDates({cliente}: any) {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());
  
  return (
    <View style={globalStyles.container} >
        <Text style={globalStyles.title}>Payment Date</Text>
   </View>
  );
}