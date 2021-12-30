import React, { Component, useState, useEffect } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getData } from '../../services/firebaseFunctions';
import { ListPayment } from '../../components/ListPayment';

export function PaymentDates() {
  const [allClients, setAllClients] = useState<any[]>([]);
  const [activeClients, setActiveClients] = useState<any>({});
  const [dateAsc, setDateAsc] = useState<any>({});

  useEffect(() => {
    // Get Data from Database
    getData('cliente').then(data => { setAllClients(data as never) });
  }, []); 

  useEffect(() => {
    if(allClients.length > 0) {
      const actives = allClients.filter(cliente => cliente.statusClient === true);
      setActiveClients(actives);
    }
  }, [allClients]);

  // useEffect(() => {
  //   let newList : any = [...activeClients];
  //   console.log(newList);
    
  //   // const listAsc = () => { 
  //   //   newList.sort((firstClient: any, secondClient: any) => firstClient.name.localeCompare(secondClient.name))
  //   //   setDateAsc(newList);
  //   // }
  //   // listAsc();
  // }, [activeClients]);


  return (
    <View style={globalStyles.container} >
        <Text style={globalStyles.title}>Próximos Vencimentos</Text>
        <FlatList 
          data={activeClients}
          renderItem={({ item }) => <ListPayment cliente={item} />}
          keyExtractor={(item) => item.id}
        />
   </View>
  );
} 