import React, {  useState, useEffect, useCallback } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getData } from '../../services/firebaseFunctions';
import { ListPayment } from '../../components/ListPayment';
import { styles } from './style';

const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export function PaymentDates() {
  const [allClients, setAllClients] = useState<any[]>([]);
  const [activeClients, setActiveClients] = useState<any>({});
  const [dateAsc, setDateAsc] = useState<any>({});
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    // Get Data from Database
    getData('cliente').then(data => { setAllClients(data as never) });
    
  }, [refreshing]); 

  useEffect(() => {
    if(allClients.length > 0) {
      const actives = allClients.filter(cliente => cliente.statusClient === true);
      setActiveClients(actives);
    }
  }, [allClients]);

  const orderByDate = (list: any[]) => {
  let newList : any = [...activeClients];
    
    const listAsc = () => { 
      newList.sort((firstClient: any, secondClient: any) => secondClient.payDay.localeCompare(firstClient.payDay))
      setDateAsc(newList);
    }
    listAsc();
  }

  useEffect(() => {
    if(activeClients.length > 0) {
      orderByDate(activeClients);
    }  
  }, [activeClients]);

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Próximos Vencimentos</Text>
        <Text style={styles.headerInfo}>Clientes ativos :  {activeClients.length}</Text>
        <FlatList 
          data={dateAsc}
          renderItem={({ item }) => <ListPayment cliente={item} />}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
   </View>
  );
} 