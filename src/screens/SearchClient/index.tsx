import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { styles } from './style';
import { globalStyles } from './../../styles/globalStyles';
import { ListItem } from '../../components/ListItem/index';
import { getData } from '../../services/firebaseFunctions';

export function SearchClient({ navigation, route }: any) {
  const [search, setSearch] = useState('');
  const [allClients, setAllClients] = useState<any[]>([]);
  const [clientes , setClientes] = useState<any[]>([]);
  const [triggerGetData, setTriggerGetData] = useState('');

  const onChangeSearch = (query: any) => setSearch(query);

  const listAsc = (list: any[]) => {
    let newList : any = [...list];

    newList.sort((firstClient: any, secondClient: any) => firstClient.name.localeCompare(secondClient.name))
    setClientes(newList);
  }

  useEffect(() => {
    if(route.params) {
      // Trigger for useEffect > getData()
      setTriggerGetData(route.params.name);
    }

  }, [route.params]);

  useEffect(() => {
      // Get Data from Database
      getData('Testea').then(data => { setAllClients(data as never) });
  }, [triggerGetData]); 
 
  useEffect(() => {
    if(search === '') {
      return listAsc(allClients);
    }

    const searchClientes = clientes.filter( cliente => {
        if(cliente.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            return cliente;
        }
    });
    
    listAsc(searchClientes);
  }, [allClients, search]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Todos Clientes</Text>
        <View style={styles.searchBar}>
          <Searchbar
            placeholder="Procurar Cliente"
            onChangeText={onChangeSearch}
            value={search}
          />
        </View>
        <FlatList 
          data={clientes}
          renderItem={({ item }) => <ListItem cliente={item} />}
          keyExtractor={(item) => item.id}
        />
    </View> 
    ) 
}


  




