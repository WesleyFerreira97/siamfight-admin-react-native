import React, { Component, useState, useEffect } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getData } from '../../services/firebaseFunctions';
import { ListPayment } from '../../components/ListPayment';

export function PaymentDates() {
  const [allClients, setAllClients] = useState<any[]>([]);

  useEffect(() => {
    // Get Data from Database
    getData('cliente').then(data => { setAllClients(data as never) });
  }, []); 
  return (
    <View style={globalStyles.container} >
        <Text style={globalStyles.title}>Próximos Vencimentos</Text>
        <FlatList 
          data={allClients}
          renderItem={({ item }) => <ListPayment cliente={item} />}
          keyExtractor={(item) => item.id}
        />
   </View>
  );
} 